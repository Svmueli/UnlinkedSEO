"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Utility Bar */}
      <div className="bg-success text-white py-2 small">
        <div className="container d-flex justify-content-between">
          <span>Performance-Driven SEO & Web Development</span>
          <div className="d-flex gap-4">
            <a
              href="tel:+254700000000"
              className="text-white text-decoration-none"
            >
              📞 +254 700 000 000
            </a>
            <a
              href="mailto:hello@unlinkedseo.co.ke"
              className="text-white text-decoration-none"
            >
              ✉ hello@unlinkedseo.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">

          {/* LOGO */}
          <Link href="/" className="navbar-brand text-decoration-none">
            <span className="d-inline-flex align-items-center gap-3 logo-wrap">
              <span className="logo-box">U</span>
              <span className="logo-text">
                <span className="fw-bold text-dark">Unlinked</span>
                <span className="fw-bold text-success">SEO</span>
              </span>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-lg-4 align-items-lg-center">

              {/* Services */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle fw-semibold btn btn-link"
                  data-bs-toggle="dropdown"
                >
                  Services
                </button>
                <ul className="dropdown-menu shadow-sm">
                  <li>
                    <Link className="dropdown-item" href="/services/seo">
                      SEO Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/technical-seo">
                      Technical SEO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/cro">
                      Conversion Optimization
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Who We Serve */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle fw-semibold btn btn-link"
                  data-bs-toggle="dropdown"
                >
                  Who We Serve
                </button>
                <ul className="dropdown-menu shadow-sm">
                  <li>
                    <Link className="dropdown-item" href="/industries/startups">
                      Startups
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/industries/small-businesses">
                      Small Businesses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/industries/ecommerce">
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/industries/local-businesses">
                      Local Businesses
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Blog */}
              <li className="nav-item">
                <Link className="nav-link fw-semibold" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/get-a-quote"
              className="btn btn-success fw-bold px-4 py-2"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </nav>

      {/* LOGO STYLES */}
      <style jsx>{`
        .logo-box {
          width: 48px;
          height: 48px;
          background: #6DBE45;
          color: #fff;
          font-weight: 900;
          font-size: 1.6rem;
          border-radius: 14px;
          display: grid;
          place-items: center;
          box-shadow: 0 6px 16px rgba(109, 190, 69, 0.4);
        }

        .logo-text {
          font-size: 1.75rem;
          letter-spacing: -0.6px;
          position: relative;
          line-height: 1;
        }

        .logo-text::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 55%;
          height: 4px;
          background: #6DBE45;
          border-radius: 3px;
        }

        @media (max-width: 991px) {
          .logo-text {
            font-size: 1.5rem;
          }
          .logo-box {
            width: 44px;
            height: 44px;
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}
