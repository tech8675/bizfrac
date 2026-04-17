"use client";

import { useState } from "react";

const BUSINESS_CATEGORIES = [
  "Car Washes", "Laundromats", "Self-Storage", "MedSpas", "Dental Offices",
  "Ophthalmology", "Botox Clinics", "Urgent Care", "Vending Routes",
  "ATM Networks", "Pest Control Routes", "Lawn Care Routes",
  "Pool Service Routes", "HVAC Companies", "Parking Lots",
  "Physical Therapy", "Chiropractic", "IV Therapy", "Franchise Locations",
  "Senior Care",
];

export default function Home() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        /* ── Responsive grid helpers ── */
        .forms-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .forms-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        }

        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
          .hiw-divider { display: none; }
        }

        /* ── Sticky bottom bar ── */
        .sticky-bar {
          display: flex;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #06101f;
          border-top: 1px solid rgba(201,168,76,0.3);
          padding: 0.875rem 1.25rem;
          gap: 0.75rem;
          z-index: 100;
        }
        @media (min-width: 768px) {
          .sticky-bar { display: none; }
        }

        /* ── Mobile padding to avoid sticky bar overlap ── */
        .page-main {
          padding-bottom: 80px;
        }
        @media (min-width: 768px) {
          .page-main { padding-bottom: 0; }
        }

        /* ── Hero type ── */
        .hero-headline {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.15;
          color: #fff;
          font-family: Georgia, serif;
          letter-spacing: -0.02em;
          margin: 0 auto 1.25rem;
          max-width: 820px;
        }
        @media (min-width: 768px) {
          .hero-headline { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; }
        }

        .hero-sub {
          font-size: 1rem;
          color: var(--gray-soft);
          max-width: 640px;
          margin: 0 auto 2rem;
          line-height: 1.65;
        }
        @media (min-width: 768px) {
          .hero-sub { font-size: 1.15rem; margin-bottom: 2.5rem; }
        }

        /* ── Category tags expansion ── */
        .category-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          justify-content: center;
        }

        /* ── Touch targets ── */
        input, select, button, a.btn {
          min-height: 44px;
          font-size: 1rem;
        }

        /* ── Form inputs full-width ── */
        .form-input {
          width: 100%;
          background: rgba(10,22,40,0.6);
          border: 1px solid rgba(138,154,181,0.25);
          border-radius: 6px;
          padding: 0.75rem 0.875rem;
          color: #e8edf5;
          font-size: 1rem;
          outline: none;
          min-height: 44px;
          -webkit-appearance: none;
          appearance: none;
        }
        .form-input::placeholder { color: rgba(138,154,181,0.5); }

        .form-select {
          width: 100%;
          background: rgba(10,22,40,0.6) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a9ab5' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 0.875rem center;
          border: 1px solid rgba(138,154,181,0.25);
          border-radius: 6px;
          padding: 0.75rem 2.5rem 0.75rem 0.875rem;
          color: #e8edf5;
          font-size: 1rem;
          outline: none;
          min-height: 44px;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }

        .btn-gold {
          width: 100%;
          background: var(--gold);
          color: #0a1628;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          padding: 0.875rem 1.5rem;
          min-height: 44px;
          cursor: pointer;
          letter-spacing: 0.02em;
          margin-top: 0.25rem;
        }

        .btn-outline {
          width: 100%;
          background: transparent;
          color: var(--gold);
          font-weight: 700;
          font-size: 1rem;
          border: 1.5px solid var(--gold);
          border-radius: 6px;
          padding: 0.875rem 1.5rem;
          min-height: 44px;
          cursor: pointer;
          letter-spacing: 0.02em;
          margin-top: 0.25rem;
        }

        /* ── HIW mobile divider ── */
        .hiw-divider {
          border: none;
          border-top: 1px solid rgba(201,168,76,0.15);
          margin: 2.5rem 0;
        }

        label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gray-soft);
          margin-bottom: 0.4rem;
        }
      `}</style>

      <main className="page-main" style={{ minHeight: "100vh", background: "var(--navy)" }}>

        {/* ── NAV ── */}
        <nav style={{
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          padding: "1rem 1.25rem",
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center" }}>
            <span style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--gold)",
              letterSpacing: "-0.02em",
              fontFamily: "Georgia, serif",
            }}>
              BizFrac™
            </span>
            <span style={{
              fontSize: "0.6rem",
              color: "var(--gray-soft)",
              border: "1px solid rgba(138,154,181,0.4)",
              borderRadius: "4px",
              padding: "2px 6px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginLeft: "0.5rem",
            }}>
              Coming Soon
            </span>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3.5rem 1.25rem 2.5rem",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.25rem",
            fontWeight: 500,
          }}>
            Fractional Business Equity · Blockchain-Powered · Main Street Investing
          </p>

          <h1 className="hero-headline">
            Own a Fraction of a{" "}
            <span style={{ color: "var(--gold)" }}>Real Business</span>
          </h1>

          <p className="hero-sub">
            Invest in cash-flowing Main Street businesses starting at $100. Or
            sell a stake in yours — without a broker.
          </p>

          {/* ── CATEGORIES ACCORDION ── */}
          <div style={{ marginBottom: "2.5rem" }}>
            <button
              onClick={() => setCategoriesOpen((o) => !o)}
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "8px",
                padding: "0.625rem 1.25rem",
                color: "var(--gold)",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "44px",
              }}
              aria-expanded={categoriesOpen}
            >
              20+ Business Types
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                style={{
                  transform: categoriesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {categoriesOpen && (
              <div className="category-tags">
                {BUSINESS_CATEGORIES.map((biz) => (
                  <span
                    key={biz}
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: "20px",
                      padding: "0.3rem 0.875rem",
                      fontSize: "0.8rem",
                      color: "var(--gold)",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {biz}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── FORMS ── */}
        <section id="invest" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem 4rem" }}>
          <div className="forms-grid">

            {/* INVESTOR FORM */}
            <div id="investor-form" style={{
              background: "var(--navy-light)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <span style={{
                fontSize: "0.7rem", letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--gold)", fontWeight: 600,
              }}>
                For Investors
              </span>
              <h2 style={{
                fontSize: "1.4rem", fontWeight: 700, color: "#fff",
                fontFamily: "Georgia, serif", margin: "0.5rem 0",
              }}>
                I Want to Invest
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--gray-soft)", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                Get early access and be notified when businesses go live on BizFrac™.
              </p>

              <form
                action="https://formspree.io/f/REPLACE_WITH_ID"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <input type="hidden" name="form_type" value="investor" />
                <div>
                  <label htmlFor="inv-name">Full Name</label>
                  <input id="inv-name" className="form-input" type="text" name="name" required placeholder="Jane Smith" />
                </div>
                <div>
                  <label htmlFor="inv-email">Email Address</label>
                  <input id="inv-email" className="form-input" type="email" name="email" required placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="inv-range">How much are you looking to invest?</label>
                  <select id="inv-range" className="form-select" name="investment_range" required>
                    <option value="">Select a range</option>
                    <option value="$100–$500">$100 – $500</option>
                    <option value="$500–$2,500">$500 – $2,500</option>
                    <option value="$2,500–$10,000">$2,500 – $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
                <button type="submit" className="btn-gold">Join the Investor Waitlist →</button>
              </form>
            </div>

            {/* OWNER FORM */}
            <div id="owner-form" style={{
              background: "var(--navy-light)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <span style={{
                fontSize: "0.7rem", letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--gold)", fontWeight: 600,
              }}>
                For Business Owners
              </span>
              <h2 style={{
                fontSize: "1.4rem", fontWeight: 700, color: "#fff",
                fontFamily: "Georgia, serif", margin: "0.5rem 0",
              }}>
                I Want to List My Business
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--gray-soft)", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                Unlock growth capital by selling a minority equity stake — no brokers, no debt.
              </p>

              <form
                action="https://formspree.io/f/REPLACE_WITH_ID"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <input type="hidden" name="form_type" value="owner" />
                <div>
                  <label htmlFor="own-name">Full Name</label>
                  <input id="own-name" className="form-input" type="text" name="name" required placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="own-email">Email Address</label>
                  <input id="own-email" className="form-input" type="email" name="email" required placeholder="john@mybusiness.com" />
                </div>
                <div>
                  <label htmlFor="own-type">What type of business?</label>
                  <select id="own-type" className="form-select" name="business_type" required>
                    <option value="">Select your business type</option>
                    <option value="Car Wash">Car Wash</option>
                    <option value="Laundromat">Laundromat</option>
                    <option value="Self-Storage">Self-Storage</option>
                    <option value="MedSpa / Botox Clinic">MedSpa / Botox Clinic</option>
                    <option value="Dental Office">Dental Office</option>
                    <option value="Ophthalmology Practice">Ophthalmology Practice</option>
                    <option value="Urgent Care">Urgent Care</option>
                    <option value="Physical Therapy">Physical Therapy</option>
                    <option value="Chiropractic">Chiropractic</option>
                    <option value="IV Therapy Lounge">IV Therapy Lounge</option>
                    <option value="Vending Routes">Vending Routes</option>
                    <option value="ATM Network">ATM Network</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Lawn Care / Landscaping">Lawn Care / Landscaping</option>
                    <option value="Pool Service">Pool Service</option>
                    <option value="HVAC Company">HVAC Company</option>
                    <option value="Parking Lot / Garage">Parking Lot / Garage</option>
                    <option value="Franchise Location">Franchise Location</option>
                    <option value="Senior Care Facility">Senior Care Facility</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn-outline">Join the Owner Waitlist →</button>
              </form>
            </div>

          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{
          background: "var(--navy-light)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "3.5rem 1.25rem",
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{
              fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--gold)", textAlign: "center", marginBottom: "0.75rem",
            }}>
              The Process
            </p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 700,
              fontFamily: "Georgia, serif", color: "#fff",
              textAlign: "center", marginTop: 0, marginBottom: "2.5rem",
            }}>
              How It Works
            </h2>

            <div className="hiw-grid">
              {/* Investors column */}
              <div>
                <h3 style={{
                  fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--gold)", marginBottom: "1.5rem", paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                }}>
                  For Investors
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { n: "01", title: "Browse vetted businesses", body: "Every listing passes our due-diligence screen — audited cash flow, ownership history, and operational health." },
                    { n: "02", title: "Buy fractional equity", body: "Invest as little as $100. Your stake is tokenized on the blockchain — transparent, transferable, and legally documented in a regulated structure." },
                    { n: "03", title: "Earn quarterly distributions", body: "Receive your pro-rata share of business cash flow deposited directly to your account every quarter." },
                  ].map((step) => (
                    <div key={step.n} style={{ display: "flex", gap: "1.25rem" }}>
                      <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "rgba(201,168,76,0.3)", fontFamily: "Georgia, serif", lineHeight: 1, minWidth: "2.25rem" }}>
                        {step.n}
                      </span>
                      <div>
                        <p style={{ fontWeight: 600, color: "#fff", margin: "0 0 0.35rem", fontSize: "1rem" }}>{step.title}</p>
                        <p style={{ color: "var(--gray-soft)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="hiw-divider" />

              {/* Owners column */}
              <div>
                <h3 style={{
                  fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--gold)", marginBottom: "1.5rem", paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                }}>
                  For Business Owners
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { n: "01", title: "Apply and get listed", body: "Submit your business details. Our team reviews financials and, if approved, creates your listing in days — not months." },
                    { n: "02", title: "Set your terms", body: "Decide what percentage to offer and at what valuation. You retain control and operational authority of your business." },
                    { n: "03", title: "Fund and grow", body: "Once funded, capital is released to you. Distribute earnings each quarter and build a track record with your investor base." },
                  ].map((step) => (
                    <div key={step.n} style={{ display: "flex", gap: "1.25rem" }}>
                      <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "rgba(201,168,76,0.3)", fontFamily: "Georgia, serif", lineHeight: 1, minWidth: "2.25rem" }}>
                        {step.n}
                      </span>
                      <div>
                        <p style={{ fontWeight: 600, color: "#fff", margin: "0 0 0.35rem", fontSize: "1rem" }}>{step.title}</p>
                        <p style={{ color: "var(--gray-soft)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3.5rem 1.25rem" }}>
          <div className="stats-grid">
            {[
              { stat: "$100", label: "Minimum investment", desc: "Fractional ownership makes Main Street accessible to everyday investors." },
              { stat: "No Broker", label: "Required to list", desc: "Business owners keep more of their deal — no expensive intermediaries." },
              { stat: "Tokenized", label: "On the blockchain", desc: "Your equity stake lives on the blockchain — fully transferable and always yours." },
              { stat: "Quarterly", label: "Distribution schedule", desc: "Predictable income paid directly to investors every quarter." },
            ].map((item) => (
              <div key={item.stat} style={{
                background: "var(--navy-light)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "10px",
                padding: "1.25rem",
              }}>
                <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--gold)", fontFamily: "Georgia, serif", margin: "0 0 0.2rem" }}>
                  {item.stat}
                </p>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gray-soft)", margin: "0 0 0.625rem" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#8a9ab5", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section style={{
          background: "linear-gradient(135deg, var(--navy-mid) 0%, var(--navy-light) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          padding: "3.5rem 1.25rem",
          textAlign: "center",
        }}>
          <h2 style={{
            fontSize: "clamp(1.4rem, 4vw, 2.1rem)", fontWeight: 700,
            fontFamily: "Georgia, serif", color: "#fff", margin: "0 0 1rem",
          }}>
            Be First to Access the Marketplace
          </h2>
          <p style={{ color: "var(--gray-soft)", fontSize: "1rem", marginBottom: "2rem" }}>
            We&apos;re building in public. Join our waitlist and shape the platform.
          </p>
          <a href="#invest" className="btn" style={{
            display: "inline-block",
            background: "var(--gold)",
            color: "#0a1628",
            fontWeight: 700,
            fontSize: "1rem",
            padding: "0.875rem 2.25rem",
            borderRadius: "6px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            minHeight: "44px",
            lineHeight: "1.5",
          }}>
            Join the Waitlist
          </a>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid rgba(138,154,181,0.1)", padding: "2.5rem 1.25rem", textAlign: "center" }}>
          <p style={{ color: "rgba(201,168,76,0.9)", fontWeight: 700, fontFamily: "Georgia, serif", fontSize: "1.1rem", margin: "0 0 0.5rem" }}>
            BizFrac™
          </p>
          <p style={{ color: "var(--gray-soft)", fontSize: "0.875rem", margin: "0 0 0.5rem" }}>
            Fractional equity for Main Street businesses.
          </p>
          <p style={{ color: "rgba(138,154,181,0.35)", fontSize: "0.75rem", marginTop: "1.25rem" }}>
            © {new Date().getFullYear()} BizFrac™. All rights reserved. Investment offerings subject to regulatory approval.
          </p>
        </footer>

      </main>

      {/* ── STICKY MOBILE BAR ── */}
      <div className="sticky-bar">
        <a
          href="#investor-form"
          style={{
            flex: 1,
            background: "var(--gold)",
            color: "#0a1628",
            fontWeight: 700,
            fontSize: "0.9rem",
            borderRadius: "6px",
            padding: "0.75rem",
            textAlign: "center",
            textDecoration: "none",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Invest
        </a>
        <a
          href="#owner-form"
          style={{
            flex: 1,
            background: "transparent",
            color: "var(--gold)",
            fontWeight: 700,
            fontSize: "0.9rem",
            border: "1.5px solid var(--gold)",
            borderRadius: "6px",
            padding: "0.75rem",
            textAlign: "center",
            textDecoration: "none",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          List My Business
        </a>
      </div>
    </>
  );
}
