"use client";

import Link from "next/link";

export default function BlogLayout({ posts = [] }: { posts: any[] }) {
  const brandGreen = "#6DBE45";
  const softGreen = "#F4FFF9";
  const brandBrown = "#1A1A1A";

  return (
    <main className="bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: brandBrown }}>
      
      {/* 1. MINIMALIST EDITORIAL HERO WITH INTEGRATED IMAGE */}
      <section className="pt-5 pb-5 border-bottom position-relative overflow-hidden" style={{ backgroundColor: "#fff" }}>
        
        {/* BACKGROUND PATTERNS */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          zIndex: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(${brandGreen} 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            {/* TEXT COLUMN */}
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="fw-bold extra-small text-uppercase ls-3" style={{ color: brandGreen }}>Intelligence Hub</span>
                <div className="flex-grow-1 border-top" style={{ opacity: 0.1, borderColor: brandBrown }}></div>
              </div>
              <h1 className="fw-black display-4 mb-3" style={{ letterSpacing: '-2px', lineHeight: 0.95, fontWeight: 900 }}>
                RESEARCH <br />
                <span style={{ 
                  color: 'transparent', 
                  WebkitTextStroke: `1.5px ${brandBrown}`,
                  opacity: 0.8
                }}>&</span> INSIGHTS.
              </h1>
              <p className="small text-muted mb-0" style={{ maxWidth: '420px', lineHeight: '1.5', fontWeight: 400 }}>
                Technical frameworks and search data models built for teams who treat organic search as an engineering challenge.
              </p>
            </div>

            {/* INTEGRATED IMAGE COLUMN */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="rounded-1 overflow-hidden shadow-sm border" style={{ aspectRatio: '1/1', transform: 'rotate(-2deg)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500" 
                  alt="SEO Insights" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* BADGE COLUMN */}
            <div className="col-lg-2 d-none d-lg-block text-end">
                <div className="d-inline-block p-3 rounded-circle border-2 border-dashed position-relative" style={{ borderColor: brandGreen }}>
                    <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm transition-all" 
                         style={{ width: '90px', height: '90px', backgroundColor: brandGreen }}>
                        <span className="text-white fw-bold extra-small text-center px-2" style={{ lineHeight: '1.2' }}>PROVEN<br/>STRATEGIES</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE "LATEST" FEED & SIDEBAR */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            
            {/* BLOG LIST */}
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-5">
                {posts.length === 0 && <p className="text-muted small">Awaiting data transmission...</p>}
                
                {posts.map((post: any, index: number) => (
                  <article key={post.id} className="blog-item">
                    <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark d-block">
                      <div className="row g-4 align-items-center">
                        <div className="col-auto d-none d-md-block">
                            <span className="fw-bold opacity-10" style={{ fontSize: '3rem' }}>0{index + 1}</span>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center gap-2 extra-small text-muted mb-2 fw-bold text-uppercase ls-1">
                             <span style={{ color: brandGreen }}>Analysis</span>
                             <span>/</span>
                             <span>{new Date().getFullYear()}</span>
                          </div>
                          <h2 className="fw-bold h4 mb-3 title-link transition-all" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          <div className="text-muted small mb-0 line-clamp-2" style={{ lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        </div>
                        <div className="col-md-3">
                          <div className="rounded-0 overflow-hidden shadow-sm aspect-square grayscale-hover">
                            <img
                              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"}
                              className="w-100 h-100 object-fit-cover transition-all"
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

            {/* MINIMAL SIDEBAR */}
            <aside className="col-lg-4">
              <div className="sticky-top" style={{ top: '2rem' }}>
                <div className="p-4 border-start border-4 mb-5 shadow-sm" style={{ borderColor: brandGreen, backgroundColor: softGreen }}>
                  <h5 className="fw-bold h6 mb-3">Stay Integrated</h5>
                  <p className="extra-small text-muted mb-4">Deep-dives into search architecture, weekly.</p>
                  <input type="email" placeholder="email@agency.com" className="form-control form-control-sm mb-2 rounded-0 border-dark shadow-none" />
                  <button className="btn btn-dark w-100 btn-sm rounded-0 fw-bold transition-all hover-green-bg">SUBSCRIBE</button>
                </div>

                <div className="ps-4">
                    <h6 className="fw-bold extra-small text-uppercase ls-3 mb-4 text-muted">Primary Verticals</h6>
                    <ul className="list-unstyled d-flex flex-column gap-3">
                        {['SGE Strategy', 'Data Modeling', 'Technical SEO', 'Revenue Attribution'].map(item => (
                            <li key={item} className="extra-small fw-bold">
                                <Link href="#" className="text-decoration-none text-dark hover-green d-flex justify-content-between">
                                    {item} <span className="opacity-25">→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <style jsx>{`
        .ls-1 { letter-spacing: 0.05rem; }
        .ls-3 { letter-spacing: 0.3rem; }
        .extra-small { font-size: 0.65rem; }
        .aspect-square { aspect-ratio: 1 / 1; }
        .grayscale-hover img { filter: grayscale(100%); transition: all 0.5s ease; }
        .blog-item:hover img { filter: grayscale(0%); transform: scale(1.08); }
        .blog-item:hover .title-link { color: ${brandGreen} !important; }
        .hover-green:hover { color: ${brandGreen} !important; }
        .hover-green-bg:hover { background-color: ${brandGreen} !important; border-color: ${brandGreen} !important; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .transition-all { transition: all 0.4s ease; }
      `}</style>
    </main>
  );
}