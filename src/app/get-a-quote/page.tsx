"use client";

export default function GetAQuotePage() {
  return (
    <main style={{ backgroundColor: "#F4FFF9" }} className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Header */}
            <div className="text-center mb-5">
              <span
                className="badge px-3 py-2 mb-3"
                style={{ backgroundColor: "#1DB954" }}
              >
                🚀 Let’s Grow Your Business
              </span>

              <h1 className="fw-bold mt-3" style={{ color: "#0B1F14" }}>
                Get Your <span style={{ color: "#1DB954" }}>Winning</span> Quote
              </h1>

              <p className="text-muted mt-3 fs-5">
                High-impact SEO. Conversion-driven websites.  
                No fluff — just measurable growth.
              </p>
            </div>

            {/* Form Card */}
            <form
              className="card border-0 shadow-lg p-4 p-md-5"
              style={{ borderRadius: "16px" }}
            >
              <div className="row g-4">

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="you@business.com"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="+254 7xx xxx xxx"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    What do you need help with?
                  </label>
                  <select className="form-select form-select-lg">
                    <option>SEO Services</option>
                    <option>Web Development</option>
                    <option>Technical SEO</option>
                    <option>Conversion Rate Optimization</option>
                    <option>Full Growth Strategy</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Tell us about your goals
                  </label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="What are you trying to achieve in the next 3–6 months?"
                  />
                </div>

                {/* CTA */}
                <div className="col-12 text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg fw-bold px-5 py-3"
                    style={{
                      backgroundColor: "#1DB954",
                      color: "#fff",
                      borderRadius: "50px",
                    }}
                  >
                    GET MY FREE STRATEGY →
                  </button>

                  <p className="small text-muted mt-3">
                    ✅ Free consultation • ✅ No obligation • ✅ Response in 24hrs
                  </p>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
}
