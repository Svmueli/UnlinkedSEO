export default function Services() {
  return (
    <section className="py-5 bg-light" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span
            className="fw-semibold text-uppercase small"
            style={{ color: "#6DBE45" }}
          >
            Services
          </span>
          <h2 id="services-heading" className="fw-bold mt-2">
            What UnlinkedSEO Does Best
          </h2>
          <p className="text-muted mt-2 col-lg-7 mx-auto">
            Data-driven SEO and high-performance web development, enhanced by AI
            where it creates real competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {/* Technical SEO */}
          <div className="col-md-6 col-lg-3">
            <article className="p-4 h-100 border rounded-4 bg-white shadow-sm service-card">
              <h3 className="fw-bold mb-2 h5">Technical SEO</h3>
              <p className="text-muted mb-0">
                Advanced site audits, Core Web Vitals optimization, crawl efficiency,
                and indexing fixes built for scale.
              </p>
            </article>
          </div>

          {/* AI SEO */}
          <div className="col-md-6 col-lg-3">
            <article className="p-4 h-100 border rounded-4 bg-white shadow-sm service-card border-success">
              <h3 className="fw-bold mb-2 h5">
                AI SEO <span style={{ color: "#6DBE45" }}>+</span>
              </h3>
              <p className="text-muted mb-0">
                AI-powered SEO audits, keyword clustering, SERP intelligence,
                and predictive insights to rank faster in competitive SERPs.
              </p>
            </article>
          </div>

          {/* SEO Strategy */}
          <div className="col-md-6 col-lg-3">
            <article className="p-4 h-100 border rounded-4 bg-white shadow-sm service-card">
              <h3 className="fw-bold mb-2 h5">SEO Strategy</h3>
              <p className="text-muted mb-0">
                Search intent mapping, content planning, and execution strategies
                engineered to drive measurable revenue.
              </p>
            </article>
          </div>

          {/* Web Development */}
          <div className="col-md-6 col-lg-3">
            <article className="p-4 h-100 border rounded-4 bg-white shadow-sm service-card">
              <h3 className="fw-bold mb-2 h5">Web Development</h3>
              <p className="text-muted mb-0">
                Lightning-fast, SEO-first websites built with Next.js and
                WordPress for performance and flexibility.
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* Optional micro-interaction */}
      <style jsx>{`
        .service-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
}
