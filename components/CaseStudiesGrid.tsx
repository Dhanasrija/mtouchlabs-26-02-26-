'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CASE_STUDY_CATEGORY_ORDER } from '@/lib/caseStudyCategories';

export interface CaseStudyCardData {
  id: number;
  slug: string;
  title: string;
  industry: string;
  image: string;
  category: string;
}

export default function CaseStudiesGrid({ items }: { items: CaseStudyCardData[] }) {
  const [active, setActive] = useState<string>('All');

  // Only show filter buttons for groups that actually have studies.
  const categories = useMemo(() => {
    const present = new Set(items.map((i) => i.category));
    return ['All', ...CASE_STUDY_CATEGORY_ORDER.filter((c) => present.has(c))];
  }, [items]);

  return (
    <div className="blog-block sec-pad pt80">
      <div className="container">
        {/* Filter bar — same look/behaviour as the /portfolio page */}
        <div className="blog-filter-section mb50">
          <div className="blog-filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-post">
          <div className="row" id="cs-cards-container">
            {items.map((cs) => {
              const href = `/case-studies/${cs.slug}`;
              const hidden = active !== 'All' && cs.category !== active;
              return (
                <div
                  className={`col-lg-4 col-sm-6 blog-card-item ${hidden ? 'filtered-out' : ''}`}
                  key={cs.id}
                  data-category={cs.category}
                >
                  <div className="ree-media-crd">
                    <div className="rpl-img">
                      <Link href={href}>
                        <img src={cs.image} alt={cs.title} className="fill-fixed" />
                      </Link>
                    </div>
                    <div className="rpl-contt">
                      {cs.industry && (
                        <p className="port-tags" style={{ fontSize: '14px', fontWeight: 600 }}>
                          {cs.industry}
                        </p>
                      )}
                      <h4>
                        <Link href={href}>{cs.title}</Link>
                      </h4>
                      <Link href={href} className="blog-read-more">
                        Read More <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
