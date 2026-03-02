"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const brandGreen = "#6DBE45";
  const whatsappGreen = "#25D366";

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* 1. UTILITY BAR */}
      <div style={{ backgroundColor: brandGreen }} className="text-white py-2">
        <div className="container-xxl d-flex justify-content-between align-items-center">
          <span className="fw-bold text-sentencecase ls-1" style={{ fontSize: '0.8rem' }}>
            Performance-Driven SEO & Web Engineering →
          </span>
          <div className="d-flex gap-4 d-none d-md-flex">
            <a href="tel:+254700000000" className="text-white text-decoration-none opacity-hover fw-bold" style={{ fontSize: '0.85rem' }}>
              📞 +254 700 000 000
            </a>
            <a href="mailto:info@unlinkedseo.co.ke" className="text-white text-decoration-none opacity-hover fw-bold" style={{ fontSize: '0.85rem' }}>
              ✉ info@unlinkedseo.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="navbar navbar-expand-lg p-0 sticky-top bg-transparent">
        <div className="container-xxl bg-white shadow-sm my-lg-3 p-0 border-bottom border-3 position-relative" style={{ borderBottomColor: brandGreen }}>
          
          <div className="d-flex w-100 align-items-stretch justify-content-between">

            {/* LOGO SECTION */}
            <div className="ps-4 d-flex align-items-center py-1 flex-shrink-0">
              <Link href="/" className="navbar-brand text-decoration-none m-0 p-0">
                <span className="d-inline-flex align-items-center gap-3">
                  <img 
                    src="/ulogo.png" 
                    alt="Unlinked SEO Logo" 
                    style={{ height: "65px", width: "auto", objectFit: "contain" }} 
                  />
                  <span className="logo-text d-none d-sm-inline" style={{ fontSize: '1.8rem', lineHeight: '1' }}>
                    <strong className="text-dark">Unlinked</strong>
                    <strong style={{ color: brandGreen }}>SEO</strong>
                  </span>
                </span>
              </Link>
            </div>

            {/* DESKTOP NAV LINKS (CENTER) */}
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav mx-auto gap-lg-5 align-items-stretch">
                <li className="nav-item dropdown mega-dropdown d-flex align-items-center">
                  <Link href="/services" className="nav-link fw-bold custom-nav-link d-flex align-items-center gap-1 py-4">
                    Services <i className="bi bi-chevron-down dropdown-icon-mini" />
                  </Link>
                  <div className="dropdown-menu mega-menu shadow-lg p-4">
                    <div className="row">
                      <div className="col-6 text-start">
                        <h6 className="mega-title" style={{ color: brandGreen }}>SEO Services</h6>
                        <div className="d-flex flex-column gap-3">
                          <Link href="/services" className="mega-item"><i className="bi bi-pencil-square" /> On-Page SEO</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-gear" /> Technical SEO</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-link-45deg" /> Link Building</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-search" /> SEO Audits</Link>
                        </div>
                      </div>
                      <div className="col-6 border-start text-start">
                        <h6 className="mega-title" style={{ color: brandGreen }}>Web & Growth</h6>
                        <div className="d-flex flex-column gap-3">
                          <Link href="/services" className="mega-item"><i className="bi bi-code-slash" /> Web Development</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-graph-up-arrow" /> CRO</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-hdd-network" /> Managed Hosting</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-robot" /> AI SEO Strategy</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item d-flex align-items-center">
                  <Link className="nav-link fw-bold custom-nav-link py-4" href="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            {/* RIGHT SECTION: Book a Call (Desktop) & Menu Toggle (Mobile) */}
            <div className="d-flex align-items-stretch">
              <div className="d-none d-lg-flex flex-shrink-0 align-items-stretch" style={{ background: brandGreen }}>
                  <Link href="/get-a-quote" className="btn d-flex align-items-center px-4 text-decoration-none">
                    <h6 className="m-0 fw-bold" style={{ color: 'white', letterSpacing: '1px' }}>BOOK A CALL</h6>
                  </Link>
              </div>

              {/* MOBILE TOGGLE - Flexed to the extreme right */}
              <button 
                className="d-lg-none btn border-0 px-4 d-flex align-items-center gap-2 fw-bold flex-shrink-0" 
                onClick={() => setIsMenuOpen(true)}
                style={{ fontSize: '0.85rem' }}
              >
                MENU <i className="bi bi-list fs-1" style={{ color: brandGreen }}></i>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY (BRANDGREEN BACKGROUND) */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay-header d-flex justify-content-between align-items-center p-3 border-bottom border-white border-opacity-25">
            <span className="logo-text text-white" style={{ fontSize: '1.4rem' }}>
                <strong>Unlinked</strong><strong>SEO</strong>
            </span>
            <button className="btn text-white fw-bold d-flex align-items-center gap-2 border-0" onClick={() => setIsMenuOpen(false)}>
                CLOSE <i className="bi bi-x-lg text-white"></i>
            </button>
        </div>

        <div className="overlay-body d-flex flex-column h-100">
            {/* Main Menu Links arranged in a proper column */}
            <nav className="mobile-nav-list p-4 flex-grow-1 d-flex flex-column">
                <Link href="/services" onClick={() => setIsMenuOpen(false)} className="mobile-link">
                    Services <i className="bi bi-arrow-right text-white"></i>
                </Link>
                <Link href="/industries" onClick={() => setIsMenuOpen(false)} className="mobile-link">
                    Who We Serve <i className="bi bi-arrow-right text-white"></i>
                </Link>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="mobile-link">
                    Blog <i className="bi bi-arrow-right text-white"></i>
                </Link>
                
                <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)} className="mobile-cta-link mt-auto">
                    BOOK A CALL <i className="bi bi-calendar-check-fill ms-2"></i>
                </Link>
            </nav>

            {/* CONTACT INFO FOOTER */}
            <div className="p-4 bg-white bg-opacity-10 border-top border-white border-opacity-25">
                <h6 className="text-uppercase fw-bold mb-3 small text-white" style={{ letterSpacing: '1px' }}>Contact Us</h6>
                <div className="d-flex flex-column gap-3">
                    <a href="tel:+254700000000" className="text-white text-decoration-none d-flex align-items-center gap-3 fw-bold">
                        <i className="bi bi-telephone-fill"></i>
                        <span>+254 700 000 000</span>
                    </a>
                    <a href="mailto:info@unlinkedseo.co.ke" className="text-white text-decoration-none d-flex align-items-center gap-3 fw-bold">
                        <i className="bi bi-envelope-fill"></i>
                        <span>info@unlinkedseo.co.ke</span>
                    </a>
                </div>
                <p className="mt-4 extra-small text-white opacity-75">Performance-Driven SEO & Web Engineering</p>
            </div>
        </div>
      </div>

      {/* 4. WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/254700000000?text=Hello%20Unlinked%20SEO,%20I'm%20interested%20in%20your%20services." 
        className="whatsapp-float shadow-lg" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
        <span className="whatsapp-label">Chat with Us</span>
      </a>

      <style jsx>{`
        .ls-1 { letter-spacing: 0.1rem; }
        .logo-text { font-size: 1.6rem; }
        .extra-small { font-size: 0.75rem; }

        .custom-nav-link {
          color: #1A1A1A !important;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .dropdown-icon-mini { font-size: 0.7rem; transition: transform 0.2s ease; }
        .mega-dropdown:hover .dropdown-icon-mini { transform: rotate(180deg); }
        .mega-dropdown:hover .mega-menu { display: block; }

        .mega-menu {
          display: none; width: 600px; position: absolute; top: 100%; left: 50%;
          transform: translateX(-50%); z-index: 1050; border-radius: 0; border: none;
          border-top: 5px solid ${brandGreen}; background-color: #fff;
        }

        .mega-title { font-size: 0.75rem; font-weight: 900; text-transform: uppercase; margin-bottom: 18px; }
        .mega-item { 
          display: flex; align-items: center; gap: 12px; font-size: 0.95rem; 
          color: #333 !important; text-decoration: none !important; padding: 2px 0; transition: all 0.2s;
        }
        .mega-item i { color: ${brandGreen}; font-size: 1.1rem; }
        .mega-item:hover { color: ${brandGreen} !important; transform: translateX(8px); }

        /* MOBILE OVERLAY STYLES */
        .mobile-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: ${brandGreen}; z-index: 9999; transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            overflow-y: auto; color: white;
            display: flex; flex-direction: column;
        }
        .mobile-overlay.active { transform: translateX(0); }

        .mobile-link {
            display: flex; justify-content: space-between; align-items: center;
            padding: 20px 0; color: white; text-decoration: none;
            font-size: 1.2rem; border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            font-weight: 700;
        }

        .mobile-cta-link {
            display: flex; justify-content: center; align-items: center;
            padding: 16px 25px; background: white; color: ${brandGreen};
            text-decoration: none; font-weight: 800; border-radius: 4px;
            text-transform: uppercase; letter-spacing: 1px;
        }

        /* WHATSAPP FLOAT STYLES */
        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: ${whatsappGreen};
            color: #FFF;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 18px;
            z-index: 999;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .whatsapp-float i {
            font-size: 1.8rem;
        }

        .whatsapp-label {
            max-width: 0;
            overflow: hidden;
            white-space: nowrap;
            transition: max-width 0.5s ease, margin-left 0.3s ease;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .whatsapp-float:hover {
            padding: 12px 24px;
            background-color: #128C7E;
            color: white;
        }

        .whatsapp-float:hover .whatsapp-label {
            max-width: 150px;
            margin-left: 10px;
        }

        @media (max-width: 991px) {
          .container-xxl { margin: 0 !important; width: 100%; border-radius: 0; }
          .whatsapp-float {
              bottom: 20px;
              right: 20px;
              padding: 10px;
              border-radius: 50%;
          }
          .whatsapp-label { display: none; }
        }
      `}</style>
    </>
  );
}