/* ============================================
   Portfolio Create/Edit — Full Interactive JS
   Handles: auto-slug, auto-canonical, image upload/preview,
   live SEO score, character counters
   Works for BOTH create and edit modes
   ============================================ */
(function () {
  var DOMAIN = 'https://mtouchlabs.com';
  var ready = false;

  function init() {
    if (ready) return;
    var title = document.getElementById('p-title');
    if (!title) { setTimeout(init, 250); return; }
    ready = true;

    var slug = document.getElementById('p-slug');
    var canonical = document.getElementById('p-canonical');
    var metaTitle = document.getElementById('p-meta-title');
    var metaDesc = document.getElementById('p-meta-desc');
    var mtCount = document.getElementById('pmt-count');
    var mdCount = document.getElementById('pmd-count');
    var imgInput = document.querySelector('input[name="image"]');
    var tagsInput = document.getElementById('p-tags');
    var categorySelect = document.querySelector('select[name="category"]');

    // ===== 1. AUTO-SLUG =====
    var userEditedSlug = false;
    var userEditedCanonical = false;

    // If slug already has a value (edit mode), mark as user-edited
    if (slug && slug.value.trim().length > 0 && title.value.trim().length > 0) {
      var expectedSlug = makeSlug(title.value);
      if (slug.value !== expectedSlug) {
        userEditedSlug = true;
      }
    }

    if (slug) {
      slug.addEventListener('input', function () {
        userEditedSlug = true;
        updateCanonical();
        calcSEO();
      });
    }

    title.addEventListener('input', function () {
      if (!userEditedSlug && slug) {
        slug.value = makeSlug(title.value);
      }
      updateCanonical();
      calcSEO();
    });

    function makeSlug(text) {
      return text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 200);
    }

    // ===== 2. AUTO-CANONICAL =====
    if (canonical) {
      // Check if manually edited in edit mode
      if (canonical.value.trim().length > 0 && slug && slug.value.trim().length > 0) {
        var expectedCanonical = DOMAIN + '/' + slug.value;
        if (canonical.value !== expectedCanonical) {
          userEditedCanonical = true;
        }
      }
      canonical.addEventListener('input', function () { userEditedCanonical = true; });
    }

    function updateCanonical() {
      if (!userEditedCanonical && canonical && slug) {
        var s = slug.value.trim();
        canonical.value = s ? (DOMAIN + '/' + s) : '';
      }
    }

    // ===== 3. CHARACTER COUNTERS =====
    function setupCounter(input, counter, max) {
      if (!input || !counter) return;
      var update = function () {
        counter.textContent = input.value.length + '/' + max;
        calcSEO();
      };
      input.addEventListener('input', update);
      update(); // run on load for edit mode
    }
    setupCounter(metaTitle, mtCount, 60);
    setupCounter(metaDesc, mdCount, 160);

    // ===== 4. SEO SCORE =====
    // Listen to all fields
    [imgInput, tagsInput, categorySelect].forEach(function (el) {
      if (el) el.addEventListener('input', calcSEO);
      if (el) el.addEventListener('change', calcSEO);
    });

    function calcSEO() {
      var score = 0;
      var total = 5;

      // Check 1: Meta title 30-60 chars
      var mtLen = metaTitle ? metaTitle.value.length : 0;
      var mtOk = mtLen >= 30 && mtLen <= 60;
      setCheck('pico-mt', mtOk);
      if (mtOk) score++;

      // Check 2: Meta description 80-160 chars
      var mdLen = metaDesc ? metaDesc.value.length : 0;
      var mdOk = mdLen >= 80 && mdLen <= 160;
      setCheck('pico-md', mdOk);
      if (mdOk) score++;

      // Check 3: Slug set
      var slOk = slug && slug.value.trim().length > 0;
      setCheck('pico-sl', slOk);
      if (slOk) score++;

      // Check 4: Featured image
      var imgOk = imgInput && imgInput.value.trim().length > 0;
      setCheck('pico-img', imgOk);
      if (imgOk) score++;

      // Check 5: Tags added
      var tagsOk = tagsInput && tagsInput.value.trim().length > 0;
      setCheck('pico-tags', tagsOk);
      if (tagsOk) score++;

      // Update ring
      var pct = Math.round((score / total) * 100);
      var num = document.getElementById('p-seo-num');
      var arc = document.getElementById('p-seo-arc');
      if (num) num.textContent = pct;
      if (arc) {
        var offset = 314 - (314 * pct / 100);
        arc.setAttribute('stroke-dashoffset', String(offset));
        var color = pct < 50 ? '#ef4444' : pct < 80 ? '#f59e0b' : '#22c55e';
        arc.setAttribute('stroke', color);
      }
    }

    function setCheck(id, ok) {
      var el = document.getElementById(id);
      if (!el) return;
      el.textContent = ok ? '✓' : '○';
      el.style.color = ok ? '#22c55e' : '#d1d5db';
    }

    // ===== 5. IMAGE DRAG & DROP + CLICK UPLOAD =====
    setupImageUpload('p-featured-drop', 'input[name="image"]', 'p-featured-preview', false);
    setupImageUpload('p-og-image-drop', 'input[name="og_image"]', 'p-og-preview', false);
    setupImageUpload('p-gallery-drop', null, 'p-gallery-preview', true);

    function setupImageUpload(dropId, inputSelector, previewId, isMultiple) {
      var dropZone = document.getElementById(dropId);
      if (!dropZone) return;

      var hiddenInput = inputSelector ? document.querySelector(inputSelector) : null;
      var previewContainer = document.getElementById(previewId);
      var fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.multiple = isMultiple;
      fileInput.style.display = 'none';
      dropZone.appendChild(fileInput);

      // Click to upload — but NOT when clicking on text inputs inside the drop zone
      dropZone.addEventListener('click', function (e) {
        var tag = e.target.tagName;
        var type = e.target.type || '';
        if (tag === 'INPUT' && type !== 'file') return;
        if (tag === 'TEXTAREA') return;
        fileInput.click();
      });

      // File selected
      fileInput.addEventListener('change', function () {
        handleFiles(fileInput.files);
      });

      // Drag events
      dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = '#6366f1';
        dropZone.style.background = '#f5f3ff';
      });
      dropZone.addEventListener('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = '#e5e7eb';
        dropZone.style.background = '#fafafa';
      });
      dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = '#e5e7eb';
        dropZone.style.background = '#fafafa';
        var files = e.dataTransfer.files;
        handleFiles(files);
      });

      function handleFiles(files) {
        if (!files || files.length === 0) return;

        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (!file.type.startsWith('image/')) continue;
          if (file.size > 5 * 1024 * 1024) { alert('File too large. Max 5MB.'); continue; }

          var reader = new FileReader();
          reader.onload = (function (f) {
            return function (e) {
              var dataUrl = e.target.result;

              if (!isMultiple && hiddenInput) {
                // Single image: store as data URL in hidden input
                hiddenInput.value = dataUrl;
                if (previewContainer) {
                  previewContainer.innerHTML = '<img src="' + dataUrl + '" style="max-width:100%;max-height:200px;border-radius:8px;object-fit:cover;" />';
                }
                calcSEO();
              } else if (isMultiple) {
                // Gallery: append to preview + update JSON
                if (previewContainer) {
                  var img = document.createElement('img');
                  img.src = dataUrl;
                  img.style.cssText = 'width:100px;height:100px;border-radius:8px;object-fit:cover;border:1px solid #e5e7eb;';
                  previewContainer.appendChild(img);
                }
                // Update gallery JSON
                var galleryInput = document.querySelector('textarea[name="gallery_images"]');
                if (galleryInput) {
                  var arr = [];
                  try { arr = JSON.parse(galleryInput.value); } catch (ex) { arr = []; }
                  if (!Array.isArray(arr)) arr = [];
                  arr.push(dataUrl);
                  galleryInput.value = JSON.stringify(arr);
                }
              }
            };
          })(file);
          reader.readAsDataURL(file);
        }
      }

      // Show existing image preview on load (edit mode)
      if (!isMultiple && hiddenInput && hiddenInput.value && previewContainer) {
        var val = hiddenInput.value.trim();
        if (val && (val.startsWith('http') || val.startsWith('data:') || val.startsWith('/'))) {
          previewContainer.innerHTML = '<img src="' + val + '" style="max-width:100%;max-height:200px;border-radius:8px;object-fit:cover;" />';
        }
      }
    }

    // Gallery preview on load (edit mode)
    var galleryTextarea = document.querySelector('textarea[name="gallery_images"]');
    var galleryPreview = document.getElementById('p-gallery-preview');
    if (galleryTextarea && galleryPreview) {
      try {
        var existing = JSON.parse(galleryTextarea.value);
        if (Array.isArray(existing)) {
          existing.forEach(function (url) {
            if (url && typeof url === 'string') {
              var img = document.createElement('img');
              img.src = url;
              img.style.cssText = 'width:100px;height:100px;border-radius:8px;object-fit:cover;border:1px solid #e5e7eb;';
              galleryPreview.appendChild(img);
            }
          });
        }
      } catch (ex) { /* ignore */ }
    }

    // Initial calculations for edit mode
    updateCanonical();
    setTimeout(calcSEO, 100);
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 200); });
  } else {
    setTimeout(init, 200);
  }
})();