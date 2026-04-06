"use client";

const services = [
  {
    title: "Technical SEO",
    icon: "bi-gear-wide-connected",
    description: "Advanced site audits, Core Web Vitals optimization, and indexing fixes built for enterprise scale.",
    features: ["Core Web Vitals", "Crawl Budget", "Schema Markup"]
  },
  {
    title: "AI SEO Strategy",
    icon: "bi-robot",
    description: "AI-powered clustering and predictive insights to dominate competitive SERPs faster than traditional methods.",
    features: ["Clustering", "SERP Intel", "Automation"],
    highlight: true
  },
  {
    title: "Content Strategy",
    icon: "bi-journal-bookmark-fill",
    description: "Search intent mapping and performance content engineered to turn traffic into measurable revenue.",
    features: ["Intent Mapping", "Topic Silos", "ROI Tracking"]
  },
  {
    title: "Web Development",
    icon: "bi-code-slash",
    description: "Lightning-fast, SEO-first websites built with Next.js for maximum performance and indexability.",
    features: ["Next.js/React", "Headless CMS", "Mobile First"]
  }
];

export default function Services() {
  const brandColor = "#6DBE45";

  return (
    <section className="services-section py-5 position-relative overflow-hidden" aria-labelledby="services-heading">
      
      {/* VISIBLE BACKGROUND ELEMENTS */}
      <div className="bg-elements">
        {/* Floating SEO/Code Symbols */}
        <div className="floating-symbol sym-1">{"{ }"}</div>
        <div className="floating-symbol sym-2">#SEO</div>
        <div className="floating-symbol sym-3">{"🚀"}</div>
        <div className="floating-symbol sym-4">{"<div>"}</div>
        <div className="floating-symbol sym-5">{"$RAISE"}</div>
        <div className="floating-symbol sym-6">{"100"}</div>
        
        {/* Visible Brand Glows */}
        <div className="visible-glow glow-1" style={{ backgroundColor: brandColor }}></div>
        <div className="visible-glow glow-2" style={{ backgroundColor: brandColor }}></div>
      </div>

      <div className="container py-lg-4 position-relative z-1">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8 position-relative">
            <span className="fw-bold text-uppercase small" style={{ color: brandColor, letterSpacing: '4px' }}>
              Our Expertise
            </span>
            <h2 id="services-heading" className="fw-black display-5 mt-3 mb-4">
              What <span className="text-dark">Unlinked</span><span style={{color: brandColor}}>SEO</span> Does Best
            </h2>
            <div className="h-line mx-auto mb-4" style={{ backgroundColor: brandColor }}></div>
            <p className="lead text-dark fw-medium mx-auto" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Data-driven SEO and high-performance engineering.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <article className={`service-card h-100 ${service.highlight ? 'highlighted' : ''}`}>
                
                <div className="icon-box mb-4">
                  <div className="icon-bg" style={{ backgroundColor: `${brandColor}15` }}></div>
                  <i className={`bi ${service.icon} position-relative`} style={{ color: brandColor }}></i>
                </div>
                
                <h3 className="h5 fw-bold mb-3 d-flex align-items-center justify-content-between position-relative z-1">
                  {service.title}
                  {service.highlight && <span className="badge-ai">AI-POWERED</span>}
                </h3>
                
                <p className="text-muted small mb-4 lh-lg position-relative z-1">
                  {service.description}
                </p>

                <ul className="list-unstyled mt-auto pt-3 border-top border-2 position-relative z-1">
                  {service.features.map((feat, i) => (
                    <li key={i} className="feature-item d-flex align-items-center">
                      <span className="dot me-2" style={{ backgroundColor: brandColor }}></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        .z-1 { z-index: 1; }
        
        .services-section {
          background-color: #fcfcfc;
        }

        .h-line {
          width: 80px;
          height: 4px;
        }

        /* FLOATING SYMBOLS */
        .floating-symbol {
          position: absolute;
          font-family: 'Courier New', monospace;
          font-weight: 900;
          color: #000;
          opacity: 0.08;
          pointer-events: none;
          user-select: none;
        }

        .sym-1 { top: 10%; left: 5%; font-size: 5rem; transform: rotate(-15deg); }
        .sym-2 { top: 60%; left: 2%; font-size: 3rem; transform: rotate(10deg); color: ${brandColor}; opacity: 0.15; }
        .sym-3 { top: 15%; right: 10%; font-size: 4rem; filter: grayscale(1); }
        .sym-4 { bottom: 10%; right: 5%; font-size: 3rem; transform: rotate(-5deg); }
        .sym-5 { top: 40%; right: 20%; font-size: 2rem; opacity: 0.2; }
        .sym-6 { bottom: 20%; left: 20%; font-size: 6rem; opacity: 0.04; }

        /* VISIBLE GLOWS */
        .visible-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          filter: blur(100px);
          border-radius: 50%;
          opacity: 0.12;
          pointer-events: none;
        }
        .glow-1 { top: -100px; left: -100px; }
        .glow-2 { bottom: -100px; right: -100px; }

        /* CARDS */
        .service-card {
          padding: 2.5rem 2rem;
          background: #ffffff;
          border: 2px solid #ebebeb;
          border-radius: 0;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .icon-box {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
        }

        .icon-bg {
          position: absolute;
          inset: 0;
          transform: rotate(45deg);
          transition: transform 0.4s ease;
        }

        .service-card:hover .icon-bg {
          transform: rotate(135deg);
        }

        .highlighted {
          border: 2px solid ${brandColor} !important;
          box-shadow: 10px 10px 0px ${brandColor}15;
        }

        .badge-ai {
          background: #000;
          color: #fff;
          font-size: 0.55rem;
          padding: 3px 10px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .feature-item {
          font-size: 0.8rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 0.6rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .service-card:hover {
          transform: translate(-5px, -5px);
          box-shadow: 15px 15px 0px #000;
          border-color: #000;
        }

        @media (max-width: 768px) {
          .floating-symbol { display: none; }
          .service-card { padding: 1.5rem; }
        }
      `}</style>
    </section>
  );
}