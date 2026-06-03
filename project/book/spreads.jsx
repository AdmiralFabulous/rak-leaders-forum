/* ============================================================================
   Kai Kata — RAK Rising spreads
   Each entry returns the inner content of the .book grid.
   bleed:true spreads fill both pages edge-to-edge.
============================================================================ */

/* 1 — COVER ----------------------------------------------------------------*/
function CoverSpread() {
  return (
    <div className="bleed">
      <Photo id="rak-cover" scrim="none" src="photos/cover-marjan.jpg"
        placeholder="Full-bleed aerial — Jebel Jais meeting golden beaches, Wynn Al Marjan tower in the distance" />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,28,40,.72), rgba(8,28,40,.15) 45%, rgba(8,28,40,.30))", pointerEvents: "none" }}></div>
      <div className="anim d1" style={{ position: "absolute", left: 0, right: 0, bottom: 96, textAlign: "center", padding: "0 40px" }}>
        <div className="cover-kick" style={{ marginBottom: 22 }}>Ras Al Khaimah · The United Arab Emirates</div>
        <div className="cover-title">RAK RISING</div>
        <div className="cover-sub">Thirty Years in the Making</div>
        <PearlRule width={200} style={{ margin: "26px auto 0", color: "var(--gold-bright)" }} />
        <div className="cover-kick" style={{ marginTop: 22, fontSize: 12, letterSpacing: ".22em", opacity: .9 }}>
          Why the world’s investors are looking north
        </div>
      </div>
      <div className="anim d2" style={{ position: "absolute", top: 54, left: 0, right: 0, display: "flex", justifyContent: "center", color: "var(--gold-bright)" }}>
        <Mark size={48} />
      </div>
    </div>
  );
}

/* 2 — WELCOME / LEADERSHIP QUOTE ------------------------------------------*/
function WelcomeSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-sheikh" src="photos/jebel-jais-viewpoint.jpg" eyebrow="A Welcome" title="H.H. Sheikh Saud bin Saqr Al Qasimi overlooking Jebel Jais"
          placeholder="Panoramic portrait — the Ruler overlooking Jebel Jais" />
        <Folio side="l" n={2} />
      </div>
      <div className="page page--sand" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Welcome</Eyebrow></div>
        <p className="kk-quote anim d2" style={{ margin: "22px 0 0" }}>
          Not the loudest emirate, but among the most deliberate — a 7,000-year history of trade, turned into one of the most stable, open and rewarding places to do business in the region.
        </p>
        <div className="anim d3" style={{ marginTop: 26 }}>
          <PearlRule width={120} />
          <p className="kk-body" style={{ marginTop: 20, maxWidth: "44ch" }}>
            This is the story of how that happened — and an invitation to be part of what comes next.
          </p>
        </div>
        <div className="kk-small anim d4" style={{ marginTop: 28, color: "var(--fg-subtle)", fontStyle: "italic" }}>
          A foreword by H.H. Sheikh Saud bin Saqr Al Qasimi, Ruler of Ras Al Khaimah, appears in the printed edition.
        </div>
        <Folio side="r" n={3} />
      </div>
    </React.Fragment>
  );
}

/* 3 — RAK TODAY (DATA SPREAD) ---------------------------------------------*/
function TodaySpread() {
  return (
    <React.Fragment>
      <div className="page">
        <div className="anim d1"><Eyebrow>The Jewel of the North</Eyebrow></div>
        <h1 className="kk-h1 anim d1" style={{ margin: "12px 0 0" }}>Ras Al Khaimah Today</h1>
        <p className="kk-lead anim d2" style={{ marginTop: 18, maxWidth: "42ch" }}>
          Thirty years of patient diversification have produced an economy where no single sector dominates — and where investors find rare things: low costs, full ownership, and genuine stability.
        </p>
        <div className="anim d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px 28px", marginTop: 40 }}>
          <Stat n="400" unit="K" caption="Population · 150+ nationalities" />
          <Stat n="USD 14" unit="B" caption="Gross domestic product" />
          <Stat n="6.7" unit="%" caption="Real GDP growth, 2024" />
          <Stat n="A / A+" caption="S&P · Fitch ratings, stable" />
        </div>
        <Folio side="l" n={3} />
      </div>
      <div className="page page--pad-0">
        <Photo id="rak-today" src="photos/fort-towers.jpg" eyebrow="68 km of coastline" title="Where the Hajar mountains meet the Arabian Gulf"
          placeholder="Aerial montage — beaches, mountains, ports & skyline" />
        <Folio side="r" n={4} />
      </div>
    </React.Fragment>
  );
}

/* 4 — MILESTONE TIMELINE (full bleed pearl) -------------------------------*/
function TimelineSpread() {
  const items = [
    ["2000", "The RAK Free Trade Zone opens — the seed of today's economic zone."],
    ["2005", "The RAK Investment Authority is established to court global investment."],
    ["2008", "International agencies award an A-range credit rating, held ever since."],
    ["2010", "H.H. Sheikh Saud bin Saqr Al Qasimi becomes Ruler."],
    ["2011", "The Tourism Development Authority is created to build a destination."],
    ["2017", "RAKEZ is formed — today home to 40,000+ companies from 100+ countries."],
    ["2018", "Jais Flight, the world's longest zipline, opens atop Jebel Jais."],
    ["2026", "The USD 5.2 B Wynn Al Marjan Island rises; 1.35 M visitors in 2025."],
  ];
  return (
    <div className="bleed page--sand" style={{ padding: "74px 86px", display: "flex", flexDirection: "column" }}>
      <div className="anim d1" style={{ textAlign: "center" }}>
        <Eyebrow>1996 — 2026</Eyebrow>
        <h2 className="kk-h2" style={{ margin: "10px 0 0" }}>Thirty Years, Eight Turning Points</h2>
        <PearlRule width={160} style={{ margin: "16px auto 0" }} />
      </div>
      <div className="timeline anim d2" style={{ marginTop: 56 }}>
        <div className="axis"></div>
        <div className="tl-row">
          {items.slice(0, 4).map((it) => (
            <div className="tl-item" key={it[0]}><div className="tl-year">{it[0]}</div><div className="tl-text">{it[1]}</div></div>
          ))}
        </div>
      </div>
      <div className="timeline anim d3" style={{ marginTop: 48 }}>
        <div className="axis"></div>
        <div className="tl-row">
          {items.slice(4).map((it) => (
            <div className="tl-item" key={it[0]}><div className="tl-year">{it[0]}</div><div className="tl-text">{it[1]}</div></div>
          ))}
        </div>
      </div>
      <div className="anim d4" style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 30 }}>
        <span className="kk-small" style={{ color: "var(--fg-muted)" }}>RAKEZ — nearly <strong style={{ color: "var(--gold)" }}>19,000</strong> new companies in 2025, up 44%</span>
        <span className="kk-small" style={{ color: "var(--fg-muted)" }}>Target: <strong style={{ color: "var(--gold)" }}>3.5 M</strong> annual visitors by 2030</span>
      </div>
    </div>
  );
}

/* 5 — INDUSTRIAL POWERHOUSE (full-bleed feature) --------------------------*/
function PowerhouseSpread() {
  return (
    <div className="bleed">
      <Photo id="rak-industry" scrim="none" src="photos/industry-port.jpg"
        placeholder="Full-bleed — RAK Ceramics & Julphar production facilities at golden hour" />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim)", pointerEvents: "none" }}></div>
      <div className="anim d1" style={{ position: "absolute", left: 86, bottom: 86, right: 86, color: "var(--pearl)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
        <div style={{ maxWidth: "46%" }}>
          <Eyebrow style={{ color: "var(--gold-bright)" }}>The Industrial Powerhouse</Eyebrow>
          <h2 className="kk-h2" style={{ color: "#fff", margin: "12px 0 0" }}>Built to make things</h2>
          <p className="kk-body" style={{ color: "rgba(251,248,242,.85)", marginTop: 14, maxWidth: "42ch" }}>
            While other emirates chased skylines, Ras Al Khaimah built factories — a real, export-driven base, home to global names that began here.
          </p>
        </div>
        <div style={{ display: "flex", gap: 44, flex: "none" }}>
          <div><div className="kk-stat" style={{ color: "#fff", fontSize: 64 }}>⅓</div><div className="kk-small" style={{ color: "rgba(251,248,242,.8)" }}>of the economy is manufacturing</div></div>
          <div><div className="kk-stat" style={{ color: "#fff", fontSize: 64 }}>118<span style={{ fontSize: ".4em", color: "var(--gold-bright)" }}>M</span></div><div className="kk-small" style={{ color: "rgba(251,248,242,.8)" }}>m² of tiles a year · RAK Ceramics</div></div>
        </div>
      </div>
    </div>
  );
}

/* 6 — RAKEZ LAUNCHPAD ------------------------------------------------------*/
function RakezSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-rakez" src="photos/fort-towers.jpg" eyebrow="Where Business Begins" title="Where an idea becomes an operating company"
          placeholder="RAKEZ business park — modern offices & logistics" />
        <Folio side="l" n={15} />
      </div>
      <div className="page" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Where Business Begins</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>RAKEZ</h2>
        <ul className="benefits anim d2">
          <li><span className="k">100%</span><span className="v">Foreign ownership · full profit repatriation</span></li>
          <li><span className="k">0%</span><span className="v">Personal income tax</span></li>
          <li><span className="k">Days</span><span className="v">Licensing measured in days, not months</span></li>
          <li><span className="k">40K+</span><span className="v">Companies from 100+ countries, 50+ sectors</span></li>
        </ul>
        <p className="kk-quote anim d3" style={{ fontSize: 24, marginTop: 28 }}>
          Full foreign ownership, no personal income tax, and licensing measured in days rather than months.
        </p>
        <div className="kk-label anim d3" style={{ marginTop: 12 }}>— The RAKEZ proposition · nearly 19,000 joined in one record year</div>
        <Folio side="r" n={16} />
      </div>
    </React.Fragment>
  );
}

/* 7 — CLOSING CTA + BACK COVER --------------------------------------------*/
function ClosingSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-future" src="photos/future-construction.jpg" flip pos="right center" eyebrow="Vision 2030 & Beyond" title="A leader watches the next chapter take shape"
          placeholder="Forward-looking rendering — RAK Central & Wynn Al Marjan skyline" />
        <Folio side="l" n={29} />
      </div>
      <div className="page page--dark" style={{ justifyContent: "center" }}>
        <div className="anim d1"><img src="assets/wiw-gold.png" alt="Who's Who in RAK" style={{ width: 46, height: 46, display: "block" }} /></div>
        <Eyebrow style={{ marginTop: 22 }} >The Next Chapter Is Yours</Eyebrow>
        <h1 className="kk-h1 anim d1" style={{ color: "var(--pearl)", margin: "12px 0 0" }}>Where heritage fuels tomorrow’s investments</h1>
        <p className="kk-body anim d2" style={{ color: "rgba(251,248,242,.84)", marginTop: 18, maxWidth: "42ch" }}>
          Ras Al Khaimah spent thirty years earning its place. The next chapter is open — and it has room for you. Join the 40,000+ companies already thriving here.
        </p>

        <WaveDivider width={260} style={{ marginTop: 36, color: "var(--gold-bright)" }} />
        <Folio side="r" n={30} />
      </div>
    </React.Fragment>
  );
}

/* 8 — HERITAGE / ROOTS OF RESILIENCE (5–6) -------------------------------*/
function HeritageSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-heritage" src="photos/heritage-dhayah-fort.jpg" eyebrow="Roots of Resilience" title="Dhayah Fort & the ancient trading port of Julfar"
          placeholder="Left — the hilltop Dhayah Fort and the ruins of Julfar at golden hour" />
        <Folio side="l" n={5} />
      </div>
      <div className="page page--sand" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Heritage Meets Modernity</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>Roots of Resilience</h2>
        <p className="kk-body anim d2" style={{ marginTop: 18, maxWidth: "44ch" }}>
          Long before the UAE existed, this was Julfar — one of the Gulf's great trading ports, famous for its pearls and its merchants. The instinct that built Julfar — open to the world, quick to trade, built to last — never left.
        </p>
        <p className="kk-quote anim d3" style={{ fontSize: 26, marginTop: 24 }}>
          The same openness that made Julfar a trading power for seven thousand years makes Ras Al Khaimah an investment destination today.
        </p>
        <div className="anim d4" style={{ display: "flex", gap: 36, marginTop: 30 }}>
          <div><div className="kk-stat" style={{ fontSize: 48 }}>7,000</div><div className="kk-small" style={{ marginTop: 4 }}>years of continuous trade</div></div>
          <div><div className="kk-stat" style={{ fontSize: 48 }}>1,000<span style={{ fontSize: ".5em", color: "var(--gold)" }}>+</span></div><div className="kk-small" style={{ marginTop: 4 }}>archaeological sites</div></div>
        </div>
        <Folio side="r" n={6} />
      </div>
    </React.Fragment>
  );
}

/* 9 — TOURISM & LIFESTYLE (19–22) -----------------------------------------*/
function TourismSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-tourism" src="photos/tourism-resort-dusk.jpg" eyebrow="Tourism & Lifestyle" title="From the world's longest zipline to quiet beaches at dawn"
          placeholder="Montage — Jais Flight zipline mid-ride, empty beaches, a five-star pool deck, a heritage village at dusk" />
        <Folio side="l" n={19} />
      </div>
      <div className="page" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Mountains, Coast & the Good Life</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>A destination, still climbing</h2>
        <p className="kk-lead anim d2" style={{ marginTop: 16, maxWidth: "42ch" }}>
          A decade ago, Ras Al Khaimah set itself the goal of one million visitors. It now welcomes far more — and the curve is still rising.
        </p>
        <div className="anim d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 26px", marginTop: 34 }}>
          <Stat n="1.35" unit="M" caption="Overnight visitors, 2025 — a record" />
          <Stat n="+12" unit="%" caption="Tourism revenue, year on year" />
          <Stat n="2027" caption="Wynn Al Marjan Island opens" />
          <Stat n="×2" caption="Hotel capacity by 2030" />
        </div>
        <p className="kk-quote anim d4" style={{ fontSize: 23, marginTop: 26 }}>
          Adventure, luxury and culture — held together by a sense of safety and space the busier emirates can no longer promise.
        </p>
        <Folio side="r" n={20} />
      </div>
    </React.Fragment>
  );
}

/* 10 — INFRASTRUCTURE & SUSTAINABILITY (23–24) ----------------------------*/
function InfrastructureSpread() {
  return (
    <React.Fragment>
      <div className="page" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Infrastructure & Sustainability</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>The engine beneath the emirate</h2>
        <p className="kk-body anim d2" style={{ marginTop: 18, maxWidth: "44ch" }}>
          Growth on this scale needs foundations to match. Ras Al Khaimah's ports rank among the busiest bulk-handling hubs in the region, its airport keeps adding routes across Europe and Asia, and its roads put Dubai within the hour.
        </p>
        <div className="anim d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 26px", marginTop: 32 }}>
          <Stat n="< 1 hr" caption="By road to Dubai" />
          <Stat n="5×" caption="Trade growth in two decades" />
        </div>
        <p className="kk-quote anim d4" style={{ fontSize: 23, marginTop: 28 }}>
          World-class connectivity, a low-debt balance sheet, and a green agenda — the conditions for returns that last.
        </p>
        <Folio side="l" n={23} />
      </div>
      <div className="page page--pad-0">
        <Photo id="rak-infra" src="photos/infrastructure-port-aerial.jpg" eyebrow="Built for the long term" title="Saqr Port, RAK International Airport & the highway network"
          placeholder="Aerials of Saqr Port, the airport, the highway network and renewable installations" />
        <Folio side="r" n={24} />
      </div>
    </React.Fragment>
  );
}

/* 11 — A PLACE TO BELONG / LIFESTYLE (25–26) ------------------------------*/
function LifestyleSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-lifestyle" src="photos/lifestyle-family-home.jpg" pos="65% center" eyebrow="A Place to Belong" title="Al Hamra Village & Mina Al Arab — neighbourhoods, not just developments"
          placeholder="Expat families on the beach; the residential communities of Al Hamra Village and Mina Al Arab; weekend markets" />
        <Folio side="l" n={25} />
      </div>
      <div className="page page--sand" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Lifestyle Meets Opportunity</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>Investors come for the economics. People stay for the life.</h2>
        <p className="kk-body anim d2" style={{ marginTop: 18, maxWidth: "44ch" }}>
          Ras Al Khaimah pairs the openness and safety the UAE is known for with something its neighbours struggle to offer: space, calm and a slower pace, all within reach of a global city. Mountains on one side, sea on the other, heritage in between.
        </p>
        <p className="kk-quote anim d3" style={{ fontSize: 26, marginTop: 24 }}>
          Work hard, live well. Lower costs, higher quality of life — and the time to enjoy both.
        </p>
        <Folio side="r" n={26} />
      </div>
    </React.Fragment>
  );
}

/* 12 — SUCCESS STORIES & INVESTOR PRIMER (27–28) --------------------------*/
function SuccessSpread() {
  const cases = [
    ["Manufacturing", "A European maker scaling through RAKEZ — because the maths worked."],
    ["Hospitality", "An international hotel brand betting on a destination still early in its rise."],
    ["Real estate", "An investor who saw value on the Al Marjan coast before the market did."],
  ];
  return (
    <React.Fragment>
      <div className="page page--dark" style={{ justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <img src="assets/success-stories-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="anim d1"><Eyebrow>The Proof Is in the People</Eyebrow></div>
          <h2 className="kk-h2 anim d1" style={{ color: "var(--pearl)", margin: "12px 0 0" }}>Success Stories</h2>
          <div className="anim d2" style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
            {cases.map((c, idx) => (
              <div key={c[0]} style={{ display: "flex", gap: 18, alignItems: "flex-start", paddingTop: 14, borderTop: "1px solid rgba(201,162,75,.4)" }}>
                <span className="kk-display" style={{ fontSize: 30, color: "var(--gold-bright)", lineHeight: 1, flex: "none", width: 38 }}>{idx + 1}</span>
                <div>
                  <div className="kk-label" style={{ color: "var(--gold-bright)" }}>{c[0]}</div>
                  <div className="kk-body" style={{ color: "rgba(251,248,242,.82)", fontSize: 15.5, marginTop: 4 }}>{c[1]}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="kk-small anim d3" style={{ marginTop: 24, color: "rgba(251,248,242,.5)", fontStyle: "italic" }}>
            Named case studies, developed with consenting businesses, appear in the printed edition.
          </div>
        </div>
        <Folio side="l" n={27} />
      </div>
      <div className="page" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Why Newcomers Choose Ras Al Khaimah</Eyebrow></div>
        <ul className="benefits anim d2" style={{ marginTop: 16 }}>
          <li><span className="k">01</span><span className="v">100% ownership and licensing measured in days</span></li>
          <li><span className="k">02</span><span className="v">Within an eight-hour flight of much of the world</span></li>
          <li><span className="k">03</span><span className="v">Tax advantages and full profit repatriation</span></li>
          <li><span className="k">04</span><span className="v">An A-range economy with one of the lowest debt loads</span></li>
        </ul>
        <p className="kk-quote anim d3" style={{ marginTop: 28 }}>
          Ras Al Khaimah is not just open for business. It is built for it.
        </p>
        <Folio side="r" n={28} />
      </div>
    </React.Fragment>
  );
}

const SPREADS = [
  { id: "cover", bleed: true, label: "Cover", render: () => <CoverSpread /> },
  { id: "welcome", bleed: false, label: "Welcome", render: () => <WelcomeSpread /> },
  { id: "today", bleed: false, label: "RAK Today", render: () => <TodaySpread /> },
  { id: "heritage", bleed: false, label: "Heritage", render: () => <HeritageSpread /> },
  { id: "timeline", bleed: true, label: "Milestones", render: () => <TimelineSpread /> },
  { id: "powerhouse", bleed: true, label: "Industry", render: () => <PowerhouseSpread /> },
  { id: "rakez", bleed: false, label: "RAKEZ", render: () => <RakezSpread /> },
  { id: "tourism", bleed: false, label: "Tourism", render: () => <TourismSpread /> },
  { id: "infrastructure", bleed: false, label: "Infrastructure", render: () => <InfrastructureSpread /> },
  { id: "lifestyle", bleed: false, label: "Lifestyle", render: () => <LifestyleSpread /> },
  { id: "success", bleed: false, label: "Success Stories", render: () => <SuccessSpread /> },
  { id: "closing", bleed: false, label: "The Future", render: () => <ClosingSpread /> },
];

Object.assign(window, { SPREADS });
