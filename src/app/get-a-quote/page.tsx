"use client";
import { useState } from 'react';

const testimonials = [
  {
    company: "FORK&LIFT",
    quote: "UnlinkedSEO transformed our inbound pipeline in under 90 days. Their technical SEO cleanup alone unlocked rankings we’d been chasing for years.",
    author: "Sammy R.",
    role: "Head of Growth"
  },
  {
    company: "LUMINA",
    quote: "Our organic lead flow is up 210% year-over-year. The transparency in their strategy is what truly sets them apart from other agencies.",
    author: "Elena M.",
    role: "Marketing Director"
  }
];

const articles = [
  { title: "The 2026 Guide to Search Generative Experience", category: "Research", date: "Jan 12, 2026" },
  { title: "Technical SEO: Scaling Content for Enterprise SaaS", category: "Strategy", date: "Jan 05, 2026" },
  { title: "How to Measure SEO ROI Beyond Keyword Rankings", category: "Analytics", date: "Dec 20, 2025" }
];

export default function GetAQuotePage() {
  const brandGreen = "#6DBE45";

  return (
    <main className="bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#0B1F14' }}>
      
      {/* 1. CLEAN MINIMALIST HERO */}
      <section className="py-6 border-bottom bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{ width: '12px', height: '12px', backgroundColor: brandGreen, borderRadius: '2px' }}></div>
                <span className="fw-bold small text-uppercase ls-wide" style={{ color: brandGreen }}>Direct-to-Revenue SEO</span>
              </div>
              <h1 className="fw-bold mb-4" style={{ fontSize: '3rem', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
                Do SEO differently. <br />
                <span style={{ color: brandGreen }}>Rank Higher. Grow Faster.</span>
              </h1>
              <p className="text-muted mb-5 small" style={{ maxWidth: '480px', lineHeight: 1.6 }}>
                Reach out to schedule a consultation and transform organic search into your most profitable marketing channel.
              </p>
              
              <div className="row g-4 border-top pt-4 mt-4">
                <div className="col-4 border-start border-3" style={{ borderColor: brandGreen }}>
                  <div className="ps-2">
                    <h6 className="fw-bold mb-0">98%</h6>
                    <p className="extra-small text-muted text-uppercase mb-0">Retention</p>
                  </div>
                </div>
                <div className="col-4 border-start border-3" style={{ borderColor: brandGreen }}>
                  <div className="ps-2">
                    <h6 className="fw-bold mb-0">422%</h6>
                    <p className="extra-small text-muted text-uppercase mb-0">Avg ROI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 p-md-5 bg-white border-top border-4 shadow-lg rounded-1" style={{ borderColor: brandGreen }}>
                <h3 className="fw-bold h5 mb-1">Request a Quote</h3>
                <p className="extra-small text-muted mb-4">Response within 24 hours. No obligation.</p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="extra-small fw-bold text-muted mb-1 uppercase">First Name*</label>
                    <input type="text" className="form-control form-control-sm rounded-0 border-light-subtle" />
                  </div>
                  <div className="col-md-6">
                    <label className="extra-small fw-bold text-muted mb-1 uppercase">Last Name*</label>
                    <input type="text" className="form-control form-control-sm rounded-0 border-light-subtle" />
                  </div>
                  <div className="col-12">
                    <label className="extra-small fw-bold text-muted mb-1 uppercase">Company Email*</label>
                    <input type="email" className="form-control form-control-sm rounded-0 border-light-subtle" />
                  </div>
                  <div className="col-12">
                    <label className="extra-small fw-bold text-muted mb-1 uppercase">Target Website*</label>
                    <input type="url" className="form-control form-control-sm rounded-0 border-light-subtle" placeholder="example.com" />
                  </div>
                  <div className="col-12 mt-4">
                    <button className="btn w-100 py-3 fw-bold rounded-0 small text-uppercase ls-wide text-white" style={{ backgroundColor: brandGreen }}>
                      GET MY FREE STRATEGY →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAILORED STRATEGY FRAMEWORK */}
      <section className="py-6">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold h4">Let's tailor your SEO strategy.</h2>
            <p className="text-muted extra-small mx-auto" style={{ maxWidth: '600px' }}>
              Our strategic framework combines our SEO experts’ insights with data-driven services to generate long-lasting impact.
            </p>
          </div>
          
          <div className="mb-5 text-center">
            
          </div>

          <div className="row g-4 mt-2">
            {[
              { title: "Keyword Research", desc: "Learn what your customers are searching for and why." },
              { title: "On-Page SEO", desc: "Strategic optimization of your site's content and structure." },
              { title: "Technical SEO", desc: "Optimizing site architecture, speed, and mobile performance." },
              { title: "Off-Page SEO", desc: "Establishing authority through ethical link acquisition." }
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="p-4 border-top border-4 h-100 bg-light bg-opacity-50" style={{ borderColor: brandGreen }}>
                  <h6 className="fw-bold small mb-2">{item.title}</h6>
                  <p className="extra-small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LIGHT-THEMED WHY CHOOSE SECTION */}
      <section className="py-6" style={{ backgroundColor: '#f9fffb' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold h4 mb-4">Why High-Growth Brands Choose <span style={{ color: brandGreen }}>UnlinkedSEO</span></h2>
              <div className="mb-4 text-center">
                
              </div>
              <p className="text-muted small mb-0">We believe collaboration leads to the best results. That’s why we’re committed to a transparent, data-first partnership.</p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {[
                  { title: "Clarity", desc: "We share our SEO insights and provide regular reports so we’re on the same page." },
                  { title: "Transparency", desc: "Open communication means you always know what’s happening with your campaign." },
                  { title: "Accountability", desc: "We tie SEO progress to your goals to contextualize the channel’s effectiveness." }
                ].map((prop, i) => (
                  <div key={i} className="col-md-12">
                    <div className="p-4 bg-white border shadow-sm rounded-1 d-flex gap-3">
                        <div className="fw-bold h4" style={{ color: brandGreen }}>0{i+1}</div>
                        <div>
                            <h6 className="fw-bold small mb-2">{prop.title}</h6>
                            <p className="extra-small text-muted mb-0">{prop.desc}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. READ OUR ARTICLES */}
      <section className="py-6 border-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className="fw-bold h4">Read our articles.</h2>
              <p className="text-muted extra-small mb-0">Step inside our learning lab and explore the latest research.</p>
            </div>
            <a href="/blog" className="btn btn-outline-dark btn-sm rounded-0 fw-bold px-4 small transition" style={{ borderColor: brandGreen, color: brandGreen }}>VIEW ALL BLOGS</a>
          </div>
          <div className="row g-4">
            {articles.map((art, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 border rounded-1 h-100 hover-green-border transition bg-white">
                  <span className="extra-small fw-bold text-uppercase ls-wide" style={{ color: brandGreen }}>{art.category}</span>
                  <h6 className="fw-bold mt-2 mb-3 small" style={{ lineHeight: '1.4' }}>{art.title}</h6>
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                    <span className="extra-small text-muted">{art.date}</span>
                    <span className="fw-bold" style={{ color: brandGreen, fontSize: '0.65rem' }}>READ MORE →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
        .extra-small { font-size: 0.75rem; line-height: 1.6; }
        .ls-wide { letter-spacing: 1px; }
        .transition { transition: all 0.2s ease; }
        .hover-green-border:hover { border-color: ${brandGreen} !important; box-shadow: 0 10px 20px rgba(29, 185, 84, 0.1); cursor: pointer; }
        .form-control-sm { border-radius: 0; padding: 0.6rem; font-size: 0.8rem; }
        .form-control-sm:focus { border-color: ${brandGreen}; box-shadow: none; }
      `}</style>
    </main>
  );
}