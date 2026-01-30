"use client";

import Link from "next/link";

export default function Services() {
  const brandGreen = "#1DB954";
  const softGreen = "#F4FFF9";
  const brandBrown = "#1A1A1A";

  const seoServices = [
    { title: "SEO Services", items: ["Managed Organic Growth", "Competitive Intelligence"] },
    { title: "On-Page SEO", items: ["Content Semantic Mapping", "Internal Link Siloing"] },
    { title: "Technical SEO", items: ["Core Web Vitals Pathing", "Schema Architecture"] },
    { title: "Link Building", items: ["Digital PR", "Authority Engineering"] },
    { title: "SEO Audits", items: ["Full Stack Analysis", "Recovery Roadmaps"] },
  ];

  const growthServices = [
    { title: "Web Development", items: ["Next.js & Headless CMS", "High-Performance Speed"] },
    { title: "CRO", items: ["A/B Testing Frameworks", "User Journey Mapping"] },
    { title: "Managed Hosting", items: ["SEO-Optimized Servers", "Security Hardening"] },
    { title: "AI SEO Strategy", items: ["LLM Content Workflows", "Automated Research"] },
  ];

  return (
    <main className="bg-white min-vh-100" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: brandBrown }}>
      
      {/* 1. ARCHITECTURAL HERO */}
      <section className="pt-5 pb-5 border-bottom position-relative overflow-hidden">
        {/* Subtle dot-grid pattern for that 'Blueprint' feel */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          zIndex: 0, opacity: 0.15, 
          backgroundImage: `radial-gradient(${brandGreen} 1px, transparent 1px)`, 
          backgroundSize: '25px 25px' 
        }}></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{ width: '12px', height: '12px', backgroundColor: brandGreen }}></div>
                <span className="fw-bold extra-small text-uppercase ls-3" style={{ color: brandGreen }}>Service Capabilities</span>
              </div>
              <h1 className="fw-bold h2 mb-3" style={{ letterSpacing: '-1px' }}>
                SEO & Web Engineering <br /> 
                <span className="text-muted">Built for Performance.</span>
              </h1>
              <p className="text-muted small mb-0" style={{ maxWidth: '480px', lineHeight: '1.6' }}>
                We bridge the gap between technical search requirements and business growth objectives through a rigorous, engineering-led approach to organic search.
              </p>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
               <div className="p-4 border border-2 border-dashed text-center rounded-1" style={{ borderColor: brandGreen }}>
                  <span className="display-6 fw-black d-block mb-1" style={{ color: brandGreen }}>98%</span>
                  <span className="extra-small fw-bold text-uppercase ls-2">Client Retention Rate</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEO PROTOCOLS MATRIX */}
      <section className="py-5" style={{ backgroundColor: "#fcfcfc" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-auto">
              <h2 className="h6 fw-black text-uppercase ls-3 border-bottom border-3 pb-2" style={{ borderColor: brandGreen }}>
                01. SEO Architecture
              </h2>
            </div>
          </div>

          <div className="row g-0 border-top border-start">
            {seoServices.map((service) => (
              <div key={service.title} className="col-md-4 border-end border-bottom p-4 bg-white service-hover-box transition-all">
                <h4 className="fw-bold h6 mb-3">{service.title}</h4>
                <ul className="list-unstyled mb-0">
                  {service.items.map(item => (
                    <li key={item} className="extra-small text-muted mb-2 d-flex align-items-center gap-2">
                      <div style={{ width: '4px', height: '4px', backgroundColor: brandGreen }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-md-4 border-end border-bottom p-4 d-none d-md-flex align-items-center justify-content-center bg-light">
               <span className="extra-small fw-bold text-muted opacity-50 text-uppercase ls-2">Scale Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GROWTH & TECH STACK */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row mb-5">
            <div className="col-auto text-end ms-auto">
              <h2 className="h6 fw-black text-uppercase ls-3 border-bottom border-3 pb-2 text-end" style={{ borderColor: brandGreen }}>
                02. Growth Engineering
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {growthServices.map((service) => (
              <div key={service.title} className="col-lg-6">
                <div className="p-4 border rounded-0 h-100 transition-all shadow-hover" style={{ borderLeft: `5px solid ${brandGreen}` }}>
                  <h4 className="fw-bold h6 mb-3 text-uppercase">{service.title}</h4>
                  <div className="row">
                    {service.items.map(item => (
                      <div key={item} className="col-6 extra-small text-muted mb-2 fw-medium">
                        <span style={{ color: brandGreen }}>+</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="py-5 border-top" style={{ backgroundColor: softGreen }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="bg-white border p-5 shadow-sm d-md-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="fw-bold h4 mb-2">Ready to scale your search ROI?</h3>
                    <p className="small text-muted mb-md-0">Request a technical audit and custom growth proposal.</p>
                  </div>
                  <div>
                    <Link 
                      href="/get-a-quote" 
                      className="btn text-white px-5 py-3 fw-bold rounded-0 transition-all hover-dark text-decoration-none d-inline-block" 
                      style={{ backgroundColor: brandGreen, fontSize: '0.8rem' }}
                    >
                      REQUEST PROPOSAL
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ls-2 { letter-spacing: 0.15rem; }
        .ls-3 { letter-spacing: 0.25rem; }
        .extra-small { font-size: 0.7rem; }
        .fw-black { font-weight: 900; }
        
        .service-hover-box:hover {
          background-color: ${softGreen} !important;
          z-index: 2;
        }

        .shadow-hover:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateY(-2px);
        }

        .hover-dark:hover {
          background-color: #000 !important;
          color: #fff !important;
        }

        .transition-all { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
    </main>
  );
}