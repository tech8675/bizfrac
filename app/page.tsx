export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--navy)" }}>
      {/* ── NAV ── */}
      <nav
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--gold)",
              letterSpacing: "-0.02em",
              fontFamily: "Georgia, serif",
            }}
          >
            BizFrac
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              color: "var(--gray-soft)",
              border: "1px solid rgba(138,154,181,0.4)",
              borderRadius: "4px",
              padding: "2px 6px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Coming Soon
          </span>
        </div>
        <a
          href="mailto:aaron@bizfrac.com"
          style={{
            color: "var(--gray-soft)",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          aaron@bizfrac.com
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Fractional Business Equity · Main Street Investing
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#ffffff",
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
            margin: "0 auto 1.5rem",
            maxWidth: "820px",
          }}
        >
          Own a Fraction of a{" "}
          <span style={{ color: "var(--gold)" }}>Real Business</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--gray-soft)",
            maxWidth: "640px",
            margin: "0 auto 3rem",
            lineHeight: 1.65,
          }}
        >
          Invest in cash-flowing Main Street businesses starting at $100. Or
          sell a stake in yours — without a broker.
        </p>

        {/* Trust bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          {["Laundromats", "Car Washes", "Self-Storage", "Vending Routes"].map(
            (biz) => (
              <span
                key={biz}
                style={{
                  fontSize: "0.8rem",
                  color: "var(--gold)",
                  letterSpacing: "0.06em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    display: "inline-block",
                  }}
                />
                {biz}
              </span>
            )
          )}
        </div>
      </section>

      {/* ── FORMS ── */}
      <section
        id="join"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem 6rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* INVESTOR FORM */}
          <div
            style={{
              background: "var(--navy-light)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <div style={{ marginBottom: "1.75rem" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                For Investors
              </span>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  margin: "0.5rem 0 0.5rem",
                }}
              >
                I Want to Invest
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--gray-soft)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Get early access and be notified when businesses go live on
                BizFrac.
              </p>
            </div>

            <form
              action="https://formspree.io/f/REPLACE_WITH_ID"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input type="hidden" name="form_type" value="investor" />
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>How much are you looking to invest?</label>
                <select name="investment_range" required style={selectStyle}>
                  <option value="">Select a range</option>
                  <option value="$100–$500">$100 – $500</option>
                  <option value="$500–$2,500">$500 – $2,500</option>
                  <option value="$2,500–$10,000">$2,500 – $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
              <button type="submit" style={btnGoldStyle}>
                Join the Investor Waitlist →
              </button>
            </form>
          </div>

          {/* OWNER FORM */}
          <div
            style={{
              background: "var(--navy-light)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <div style={{ marginBottom: "1.75rem" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                For Business Owners
              </span>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  margin: "0.5rem 0 0.5rem",
                }}
              >
                I Want to List My Business
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--gray-soft)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Unlock growth capital by selling a minority equity stake — no
                brokers, no debt.
              </p>
            </div>

            <form
              action="https://formspree.io/f/REPLACE_WITH_ID"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input type="hidden" name="form_type" value="owner" />
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@mybusiness.com"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>What type of business?</label>
                <select name="business_type" required style={selectStyle}>
                  <option value="">Select your business type</option>
                  <option value="Laundromat">Laundromat</option>
                  <option value="Car Wash">Car Wash</option>
                  <option value="Self-Storage">Self-Storage</option>
                  <option value="Vending">Vending Route</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" style={btnOutlineStyle}>
                Join the Owner Waitlist →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        style={{
          background: "var(--navy-light)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textAlign: "center",
              marginBottom: "0.75rem",
            }}
          >
            The Process
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              color: "#fff",
              textAlign: "center",
              marginTop: 0,
              marginBottom: "3.5rem",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Investors column */}
            <div>
              <h3
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1.75rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                For Investors
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                {[
                  {
                    n: "01",
                    title: "Browse vetted businesses",
                    body: "Every listing passes our due-diligence screen — audited cash flow, ownership history, and operational health.",
                  },
                  {
                    n: "02",
                    title: "Buy fractional equity",
                    body: "Invest as little as $100. Your stake is held in a regulated structure — transparent, documented, and legally yours.",
                  },
                  {
                    n: "03",
                    title: "Earn quarterly distributions",
                    body: "Receive your pro-rata share of business cash flow deposited directly to your account every quarter.",
                  },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1.25rem" }}>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "rgba(201,168,76,0.3)",
                        fontFamily: "Georgia, serif",
                        lineHeight: 1,
                        minWidth: "2.5rem",
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#fff",
                          margin: "0 0 0.35rem",
                          fontSize: "1rem",
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        style={{
                          color: "var(--gray-soft)",
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                borderLeft: "1px solid rgba(201,168,76,0.15)",
                display: "none",
              }}
            />

            {/* Owners column */}
            <div>
              <h3
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1.75rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                For Business Owners
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                {[
                  {
                    n: "01",
                    title: "Apply and get listed",
                    body: "Submit your business details. Our team reviews financials and, if approved, creates your listing in days — not months.",
                  },
                  {
                    n: "02",
                    title: "Set your terms",
                    body: "Decide what percentage to offer and at what valuation. You retain control and operational authority of your business.",
                  },
                  {
                    n: "03",
                    title: "Fund and grow",
                    body: "Once funded, capital is released to you. Distribute earnings each quarter and build a track record with your investor base.",
                  },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1.25rem" }}>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "rgba(201,168,76,0.3)",
                        fontFamily: "Georgia, serif",
                        lineHeight: 1,
                        minWidth: "2.5rem",
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#fff",
                          margin: "0 0 0.35rem",
                          fontSize: "1rem",
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        style={{
                          color: "var(--gray-soft)",
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BIZFRAC ── */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              stat: "$100",
              label: "Minimum investment",
              desc: "Fractional ownership makes Main Street accessible to everyday investors.",
            },
            {
              stat: "No Broker",
              label: "Required to list",
              desc: "Business owners keep more of their deal — no expensive intermediaries.",
            },
            {
              stat: "Cash Flow",
              label: "Not speculation",
              desc: "Investments are backed by real revenue from operating businesses.",
            },
            {
              stat: "Quarterly",
              label: "Distribution schedule",
              desc: "Predictable income paid directly to investors every quarter.",
            },
          ].map((item) => (
            <div
              key={item.stat}
              style={{
                background: "var(--navy-light)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "10px",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  fontFamily: "Georgia, serif",
                  margin: "0 0 0.25rem",
                }}
              >
                {item.stat}
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--gray-soft)",
                  margin: "0 0 0.75rem",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#8a9ab5",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--navy-mid) 0%, var(--navy-light) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            color: "#fff",
            margin: "0 0 1rem",
          }}
        >
          Be First to Access the Marketplace
        </h2>
        <p
          style={{
            color: "var(--gray-soft)",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          We&apos;re building in public. Join our waitlist and shape the
          platform.
        </p>
        <a
          href="#join"
          style={{
            display: "inline-block",
            background: "var(--gold)",
            color: "#0a1628",
            fontWeight: 700,
            fontSize: "0.95rem",
            padding: "0.875rem 2.25rem",
            borderRadius: "6px",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          Join the Waitlist
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(138,154,181,0.1)",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(201,168,76,0.9)",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            fontSize: "1.1rem",
            margin: "0 0 0.5rem",
          }}
        >
          BizFrac
        </p>
        <p
          style={{
            color: "var(--gray-soft)",
            fontSize: "0.8rem",
            margin: "0 0 0.75rem",
          }}
        >
          Fractional equity for Main Street businesses.
        </p>
        <a
          href="mailto:aaron@bizfrac.com"
          style={{
            color: "var(--gold)",
            fontSize: "0.85rem",
            textDecoration: "none",
          }}
        >
          aaron@bizfrac.com
        </a>
        <p
          style={{
            color: "rgba(138,154,181,0.4)",
            fontSize: "0.7rem",
            marginTop: "1.5rem",
          }}
        >
          © {new Date().getFullYear()} BizFrac. All rights reserved. Investment
          offerings subject to regulatory approval.
        </p>
      </footer>
    </main>
  );
}

/* ── Shared style objects ── */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--gray-soft)",
  marginBottom: "0.4rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(10,22,40,0.6)",
  border: "1px solid rgba(138,154,181,0.25)",
  borderRadius: "6px",
  padding: "0.7rem 0.875rem",
  color: "#e8edf5",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
  appearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a9ab5' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.875rem center",
  paddingRight: "2.5rem",
};

const btnGoldStyle: React.CSSProperties = {
  background: "var(--gold)",
  color: "#0a1628",
  fontWeight: 700,
  fontSize: "0.9rem",
  border: "none",
  borderRadius: "6px",
  padding: "0.85rem 1.5rem",
  cursor: "pointer",
  letterSpacing: "0.02em",
  marginTop: "0.25rem",
};

const btnOutlineStyle: React.CSSProperties = {
  background: "transparent",
  color: "var(--gold)",
  fontWeight: 700,
  fontSize: "0.9rem",
  border: "1.5px solid var(--gold)",
  borderRadius: "6px",
  padding: "0.85rem 1.5rem",
  cursor: "pointer",
  letterSpacing: "0.02em",
  marginTop: "0.25rem",
};
