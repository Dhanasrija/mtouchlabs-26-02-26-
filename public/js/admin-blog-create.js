// ── Image Upload: Click + Drag & Drop + Preview ──
(function () {
  var zones = document.querySelectorAll('.cb-upload-zone');
  zones.forEach(function (zone) {
    var input = zone.querySelector('.cb-upload-input');
    if (!input) return;

    zone.addEventListener('click', function (e) {
      if (e.target === input) return;
      input.click();
    });

    zone.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.add('cb-upload-zone--drag');
    });
    zone.addEventListener('dragleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.remove('cb-upload-zone--drag');
    });
    zone.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.remove('cb-upload-zone--drag');
      var files = e.dataTransfer.files;
      if (files && files.length > 0) {
        input.files = files;
        showPreview(zone, files[0]);
      }
    });

    input.addEventListener('change', function () {
      if (input.files && input.files.length > 0) {
        showPreview(zone, input.files[0]);
      }
    });
  });

  function showPreview(zone, file) {
    if (!file.type.startsWith('image/')) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      var oldPreview = zone.querySelector('.cb-upload-preview');
      if (oldPreview) oldPreview.remove();
      var preview = document.createElement('div');
      preview.className = 'cb-upload-preview';
      preview.innerHTML =
        '<img src="' + e.target.result + '" alt="Preview" style="max-width:100%;max-height:180px;border-radius:8px;object-fit:cover;margin-bottom:8px;" />' +
        '<p style="font-size:12px;color:#6b7280;margin:0;">' + file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)</p>' +
        '<button type="button" class="cb-upload-remove" style="margin-top:8px;padding:4px 12px;border-radius:6px;border:1px solid #e5e7eb;background:#fff;color:#ef4444;font-size:12px;cursor:pointer;">Remove</button>';
      zone.appendChild(preview);
      var icon = zone.querySelector('.cb-upload-icon');
      var text = zone.querySelector('.cb-upload-text');
      var hint = zone.querySelector('.cb-upload-hint');
      if (icon) icon.style.display = 'none';
      if (text) text.style.display = 'none';
      if (hint) hint.style.display = 'none';
      var removeBtn = preview.querySelector('.cb-upload-remove');
      removeBtn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        preview.remove();
        zone.querySelector('.cb-upload-input').value = '';
        if (icon) icon.style.display = '';
        if (text) text.style.display = '';
        if (hint) hint.style.display = '';
      });
    };
    reader.readAsDataURL(file);
  }
})();

// ── Auto-generate slug from title ──
(function () {
  var titleInput = document.getElementById('title');
  var slugInput = document.getElementById('slug');
  if (!titleInput || !slugInput) return;
  var manualSlug = false;
  slugInput.addEventListener('keydown', function () { manualSlug = true; });
  titleInput.addEventListener('input', function () {
    if (manualSlug) return;
    slugInput.value = titleInput.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    slugInput.dispatchEvent(new Event('input', { bubbles: true }));
  });
})();

// ── SEO character counters ──
(function () {
  function counter(inputId, counterId, max) {
    var input = document.getElementById(inputId);
    var ctr = document.getElementById(counterId);
    if (!input || !ctr) return;
    function update() {
      var len = input.value.length;
      ctr.textContent = len + '/' + max;
      ctr.style.color = len > max ? '#ef4444' : len > max * 0.8 ? '#f59e0b' : '#9ca3af';
    }
    input.addEventListener('input', update);
    update();
  }
  counter('meta_title', 'mt-count', 60);
  counter('meta_description', 'md-count', 160);
})();

// ── Auto-fill canonical URL ──
(function () {
  var slugInput = document.getElementById('slug');
  var canonicalInput = document.getElementById('canonical_url_field');
  if (!slugInput || !canonicalInput) return;
  slugInput.addEventListener('input', function () {
    if (!canonicalInput.value || canonicalInput.value.includes('mtouchlabs.com/')) {
      canonicalInput.value = 'https://mtouchlabs.com/' + slugInput.value;
    }
  });
})();

// ── SEO Score ──
(function () {
  function updateScore() {
    var score = 0;
    var checks = { mt: false, md: false, fk: false, cn: false, og: false };
    var mt = document.getElementById('meta_title');
    var md = document.getElementById('meta_description');
    var fk = document.getElementById('focus_keyword');
    var cn = document.getElementById('canonical_url_field');
    var og = document.getElementById('og_title');
    var title = document.getElementById('title');
    if (mt && mt.value.length >= 20 && mt.value.length <= 60) { score += 20; checks.mt = true; }
    if (md && md.value.length >= 50 && md.value.length <= 160) { score += 20; checks.md = true; }
    if (fk && fk.value.trim() && title && title.value.toLowerCase().includes(fk.value.toLowerCase())) { score += 20; checks.fk = true; }
    if (cn && cn.value.trim().startsWith('http')) { score += 20; checks.cn = true; }
    if (og && og.value.trim()) { score += 20; checks.og = true; }
    var arc = document.getElementById('seo-arc');
    var num = document.getElementById('seo-num');
    if (arc) {
      arc.style.strokeDashoffset = 314 - (314 * score / 100);
      arc.style.stroke = score >= 80 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444';
    }
    if (num) num.textContent = score;
    for (var key in checks) {
      var ico = document.getElementById('ico-' + key);
      if (ico) { ico.textContent = checks[key] ? '✓' : '○'; ico.style.color = checks[key] ? '#22c55e' : '#9ca3af'; }
    }
  }
  ['meta_title', 'meta_description', 'focus_keyword', 'canonical_url_field', 'og_title', 'title'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', updateScore);
  });
  updateScore();
})();