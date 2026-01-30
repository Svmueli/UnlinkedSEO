"use client";

import Link from "next/link";

export default function Navbar() {
  const brandGreen = "#6DBE45"; 

  return (
    <>
      {/* 1. UTILITY BAR */}
      <div style={{ backgroundColor: brandGreen }} className="text-white py-2">
        <div className="container-xxl d-flex justify-content-between align-items-center">
          <span className="fw-bold text-sentencecase ls-1" style={{ fontSize: '0.8rem' }}>
            Performance-Driven SEO & Web Engineering →
          </span>
          <div className="d-flex gap-4">
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
          
          {/* PARENT FLEX: align-items-stretch is the secret to the button filling the height */}
          <div className="d-flex w-100 align-items-stretch">

            {/* LOGO */}
            <div className="ps-4 d-flex align-items-center py-1 flex-shrink-0">
              <Link href="/" className="navbar-brand text-decoration-none m-0 p-0">
                <span className="d-inline-flex align-items-center gap-3">
                  <img 
                    src="/ulogo.png" 
                    alt="Unlinked SEO Logo" 
                    style={{ height: "65px", width: "auto", objectFit: "contain" }} 
                  />
                  <span className="logo-text" style={{ fontSize: '1.8rem', lineHeight: '1' }}>
                    <strong className="text-dark">Unlinked</strong>
                    <strong style={{ color: brandGreen }}>SEO</strong>
                  </span>
                </span>
              </Link>
            </div>

            {/* NAV LINKS - Centered */}
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav mx-auto gap-lg-5 align-items-stretch">
                {/* SERVICES */}
                <li className="nav-item dropdown mega-dropdown d-flex align-items-center">
                  <Link href="/services" className="nav-link fw-bold custom-nav-link d-flex align-items-center gap-1 py-4">
                    Services <i className="bi bi-chevron-down dropdown-icon-mini" />
                  </Link>
                  <div className="dropdown-menu mega-menu shadow-lg p-4">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="mega-title" style={{ color: brandGreen }}>SEO Services</h6>
                        <div className="d-flex flex-column gap-3">
                          <Link href="/services" className="mega-item"><i className="bi bi-pencil-square" /> On-Page SEO</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-gear" /> Technical SEO</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-link-45deg" /> Link Building</Link>
                          <Link href="/services" className="mega-item"><i className="bi bi-search" /> SEO Audits</Link>
                        </div>
                      </div>
                      <div className="col-6 border-start">
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

                {/* WHO WE SERVE */}
                <li className="nav-item dropdown mega-dropdown d-flex align-items-center">
                  <a className="nav-link fw-bold custom-nav-link d-flex align-items-center gap-1 py-4" role="button">
                    Who We Serve <i className="bi bi-chevron-down dropdown-icon-mini" />
                  </a>
                  <div className="dropdown-menu mega-menu shadow-lg p-4">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="mega-title" style={{ color: brandGreen }}>Industries</h6>
                        <div className="d-flex flex-column gap-3">
                          <Link href="/industries/saas" className="mega-item"><i className="bi bi-cloud" /> SaaS Companies</Link>
                          <Link href="/industries/ecommerce" className="mega-item"><i className="bi bi-cart" /> E-commerce</Link>
                          <Link href="/industries/ai" className="mega-item"><i className="bi bi-cpu" /> AI & Tech</Link>
                        </div>
                      </div>
                      <div className="col-6 border-start">
                        <h6 className="mega-title" style={{ color: brandGreen }}>Scale</h6>
                        <div className="d-flex flex-column gap-3">
                          <Link href="/markets/b2b" className="mega-item"><i className="bi bi-building" /> B2B Strategy</Link>
                          <Link href="/markets/enterprise" className="mega-item"><i className="bi bi-diagram-3" /> Enterprise</Link>
                          <Link href="/platforms/wordpress" className="mega-item"><i className="bi bi-wordpress" /> Platforms</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item d-flex align-items-center">
                  <Link className="nav-link fw-bold custom-nav-link py-4" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* GET A QUOTE  */}
            <div className="flex-shrink-0 d-flex align-items-stretch h-auto" style={{background: "#6DBE45"}}>
              <button className="btn" type="button" color="#6DBE45">
                <Link href="/get-a-quote" className= "btn btn-custom-green">
                <h6 style={{color: 'white'}}> GET QUOTE</h6>

                 </Link>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="navbar-toggler border-0 d-lg-none me-3 align-self-center" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
              <span className="navbar-toggler-icon" />
            </button>

          </div>
        </div>
      </nav>

      <style jsx>{`
        .ls-1 { letter-spacing: 0.1rem; }
        
        .logo-box {
          width: 45px; height: 45px;
          background: ${brandGreen};
          color: #fff; font-weight: 900; font-size: 1.4rem;
          border-radius: 2px; display: grid; place-items: center;
        }

        .logo-text { font-size: 1.6rem; }

        /* THE FIX: Forcing solid block and overriding default link colors */
        .btn-rect-flush {
          background-color: ${brandGreen} !important;
          color: white !important;
          font-weight: 800;
          padding: 0 45px;
          text-decoration: none !important;
          letter-spacing: 1.5px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
          border-radius: 0 !important;
          height: 100%; /* Stretch to full height of parent */
          min-height: 80px; /* Optional: adjust based on logo height */
          white-space: nowrap;
          border: none;
        }

        .btn-rect-flush:hover {
          background-color: #169c46 !important;
        }

        .custom-nav-link {
          color: #1A1A1A !important;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .dropdown-icon-mini {
          font-size: 0.7rem;
          transition: transform 0.2s ease;
        }

        .mega-dropdown:hover .dropdown-icon-mini {
          transform: rotate(180deg);
        }

        .mega-dropdown:hover .mega-menu { display: block; }

        .mega-menu {
          display: none;
          width: 600px;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1050;
          border-radius: 0;
          border: none;
          border-top: 5px solid ${brandGreen};
          margin-top: 0;
          background-color: #fff;
        }

        .mega-dropdown::after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 20px;
        }

        .mega-title { font-size: 0.75rem; font-weight: 900; text-transform: uppercase; margin-bottom: 18px; }
        .mega-item { 
          display: flex; align-items: center; gap: 12px; font-size: 0.95rem; 
          color: #333 !important; text-decoration: none !important; padding: 2px 0; transition: all 0.2s;
        }
        .mega-item i { color: ${brandGreen}; font-size: 1.1rem; }
        .mega-item:hover { color: ${brandGreen} !important; transform: translateX(8px); }

        @media (max-width: 991px) {
          .container-xxl { margin: 0 !important; width: 100%; border-radius: 0; }
          .btn-rect-flush { padding: 20px; min-height: 60px; height: auto; }
          .mega-menu { width: 100%; position: static; transform: none; display: none; }
          .mega-dropdown:hover .mega-menu { display: block; }
        }
      `}</style>
    </>
  );
}