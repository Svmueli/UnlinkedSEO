"use client";

import Link from "next/link";

export default function BlogLayout({ posts = [] }: { posts: any[] }) {
  const brandGreen = "#1DB954";
  const darkGreen = "#0B1F14";
  const brandBrown = "#3D1A1A";

  return (
    <main className="bg-white" style={{ fontFamily: 'Inter, sans-serif', color: brandBrown }}>
      
      {/* 1. UPGRADED HERO SECTION */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: darkGreen }}>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div style={{ width: '8px', height: '8px', backgroundColor: brandGreen }}></div>
                <span className="fw-bold extra-small text-uppercase ls-1" style={{ color: brandGreen }}>Intelligence Hub</span>
              </div>
              <h1 className="fw-bold h2 mb-3 text-white" style={{ letterSpacing: '-0.5px' }}>
                SEO Insights & <span style={{ color: brandGreen }}>Growth Resources</span>
              </h1>
              <p className="small mb-0 opacity-75 text-white" style={{ maxWidth: '500px', lineHeight: '1.5' }}>
                Technical frameworks and search data to help high-growth brands transform organic search into a predictable revenue channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            
            {/* BLOG LIST COLUMN */}
            <div className="col-lg-8">
              {posts.length === 0 && (
                <p className="text-center text-muted py-5 small">No blog posts available at the moment.</p>
              )}

              <div className="d-flex flex-column gap-5">
                {posts.map((post: any) => (
                  <article key={post.id} className="pb-4 border-bottom blog-item">
                    <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                      <div className="row g-4 align-items-start">
                        {/* Post Metadata & Content */}
                        <div className="col-md-8 order-2 order-md-1">
                          <div className="d-flex gap-2 extra-small text-muted mb-2 fw-medium text-uppercase ls-1">
                             <span style={{ color: brandGreen }}>Jan 2026</span> <span>•</span> <span>7m read</span>
                          </div>
                          <h2 
                            className="fw-bold h4 mb-2 title-link transition-all" 
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                          />
                          <div 
                            className="text-muted small mb-3 line-clamp-2" 
                            style={{ lineHeight: '1.5' }} 
                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                          />
                          <div className="d-flex align-items-center gap-2">
                             <div className="rounded-circle" style={{ width: '20px', height: '20px', backgroundColor: '#eee' }}></div>
                             <span className="extra-small fw-bold text-muted">UnlinkedSEO Editorial</span>
                          </div>
                        </div>

                        {/* Post Image */}
                        <div className="col-md-4 order-1 order-md-2">
                          <div className="rounded-1 overflow-hidden shadow-sm" style={{ aspectRatio: '4/3' }}>
                            <img
                              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"}
                              className="w-100 h-100 object-fit-cover hover-zoom"
                              alt={post.title.rendered}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* SIDEBAR COLUMN */}
            <aside className="col-lg-4">
              <div className="sticky-top" style={{ top: '2rem' }}>
                
                {/* Newsletter Box */}
                <div className="p-4 rounded-1 text-white mb-4 shadow-sm" style={{ backgroundColor: brandGreen }}>
                  <h5 className="fw-bold h6 mb-2">The Weekly Insight</h5>
                  <p className="extra-small opacity-90 mb-3">Join 5,000+ SEOs getting our weekly search intelligence reports.</p>
                  <div className="d-flex gap-2">
                    <input type="email" placeholder="Email" className="form-control form-control-sm border-0 rounded-0" />
                    <button className="btn btn-dark btn-sm fw-bold rounded-0 px-3">JOIN</button>
                  </div>
                </div>

                {/* Popular Topics */}
                <div className="p-4 rounded-1 border bg-light">
                  <h6 className="fw-bold extra-small text-uppercase ls-1 mb-3 text-muted">Core Research</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Technical SEO', 'AI Search', 'SaaS Growth', 'Backlink Data'].map(tag => (
                      <span key={tag} className="badge border text-muted fw-bold extra-small bg-white px-2 py-1 hover-green transition-all" style={{ cursor: 'pointer' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <style jsx>{`
        .ls-1 { letter-spacing: 0.05rem; }
        .extra-small { font-size: 0.65rem; }
        .hover-zoom { transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .blog-item:hover .hover-zoom { transform: scale(1.03); }
        .blog-item:hover .title-link { color: ${brandGreen} !important; }
        .hover-green:hover { border-color: ${brandGreen} !important; color: ${brandGreen} !important; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .transition-all { transition: all 0.2s ease; }
      `}</style>
    </main>
  );
}