"use client";

export default function CTA() {
  const brandGreen = "#6DBE45";

  return (
    <section className="cta-section py-5 bg-white position-relative">
      <div className="container">
        <div className="cta-frame p-4 p-md-5 position-relative overflow-hidden">
          
          <div className="cta-corner-accent" style={{ backgroundColor: brandGreen }}></div>

          <div className="row justify-content-center text-center position-relative z-1">
            <div className="col-lg-8">
              
              <div className="mb-3">
                <span className="cta-label" style={{ color: brandGreen }}>
                  Final Step to Dominance
                </span>
              </div>

              {/* Reduced font size from display-4 to a crisp h2 size */}
              <h2 className="fw-black text-dark mb-3 lh-sm h1" style={{ fontSize: '2.25rem' }}>
                Ready to <span style={{ color: brandGreen }}>own your search market</span>, not just participate?
              </h2>

              {/* Reduced lead text from 1.2rem to 1.05rem */}
              <p className="text-muted mx-auto mb-4 col-md-10" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                Get a technical SEO & conversion audit that reveals exactly 
                where your growth is leaking. No fluff—just a roadmap to revenue.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a href="/get-a-quote" className="btn-rect-primary">
                  GET MY FREE AUDIT
                </a>
                <a href="/services" className="btn-rect-dark">
                  EXPLORE SERVICES
                </a>
              </div>

              <div className="mt-4 pt-2 d-flex flex-wrap justify-content-center gap-4">
                <span className="text-muted extra-small fw-bold">
                  <i className="bi bi-shield-check me-2" style={{ color: brandGreen }}></i> 100% Confidential
                </span>
                <span className="text-muted extra-small fw-bold">
                  <i className="bi bi-clock-history me-2" style={{ color: brandGreen }}></i> 48-Hour Delivery
                </span>
                <span className="text-muted extra-small fw-bold">
                  <i className="bi bi-graph-up me-2" style={{ color: brandGreen }}></i> Zero Sales Pressure
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        
        .extra-small { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; }

        .cta-frame {
          border: 1px solid #eee;
          background: #fdfdfd;
          border-top: 5px solid ${brandGreen};
          box-shadow: 0 15px 35px rgba(0,0,0,0.03);
        }

        .cta-label {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.7rem;
          letter-spacing: 2px;
        }

        .cta-corner-accent {
          position: absolute;
          width: 150px;
          height: 150px;
          top: -75px;
          right: -75px;
          opacity: 0.05;
          filter: blur(50px);
          border-radius: 50%;
        }

        .btn-rect-primary {
          background-color: ${brandGreen};
          color: #fff !important;
          font-weight: 800;
          padding: 14px 35px;
          text-decoration: none !important;
          letter-spacing: 1px;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          display: inline-block;
          border: 2px solid ${brandGreen};
        }

        .btn-rect-primary:hover {
          background-color: #5da33a;
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(109, 190, 69, 0.2);
        }

        .btn-rect-dark {
          background-color: #212529;
          color: #fff !important;
          font-weight: 800;
          padding: 14px 35px;
          text-decoration: none !important;
          letter-spacing: 1px;
          font-size: 0.85rem;
          border: 2px solid #212529;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-rect-dark:hover {
          background-color: transparent;
          color: #212529 !important;
        }

        .z-1 { z-index: 1; }

        @media (max-width: 768px) {
          h2 { font-size: 1.75rem !important; }
          .btn-rect-primary, .btn-rect-dark { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
}