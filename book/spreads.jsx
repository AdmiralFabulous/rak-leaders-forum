/* ============================================================================
   Kai Kata, RAK Rising spreads
   Each entry returns the inner content of the .book grid.
   bleed:true spreads fill both pages edge-to-edge.
============================================================================ */

/* 1, COVER ----------------------------------------------------------------*/
function CoverSpread() {
  return (
    <div className="bleed">
      <Photo id="rak-cover" scrim="none" src="photos/cover-marjan.jpg"
        placeholder="Full-bleed aerial, Jebel Jais meeting golden beaches, Wynn Al Marjan tower in the distance" />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,28,40,.72), rgba(8,28,40,.15) 45%, rgba(8,28,40,.30))", pointerEvents: "none" }}></div>
      <div className="anim d1" style={{ position: "absolute", left: 0, right: 0, bottom: 96, textAlign: "center", padding: "0 40px" }}>
        <div className="cover-kick" style={{ marginBottom: 22 }}>The United Arab Emirates</div>
        <div className="cover-title" style={{ lineHeight: ".88" }}><span style={{ display: "block" }}>DAWN</span><span style={{ display: "block", fontStyle: "italic", textTransform: "none", fontSize: "0.4em", fontWeight: 500, letterSpacing: "0", lineHeight: "1", margin: "-0.04em 0 -0.02em" }}>of the</span><span style={{ display: "block" }}>NORTH</span></div>
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

/* 2, WELCOME / LEADERSHIP QUOTE ------------------------------------------*/
function WelcomeSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-sheikh" src="photos/jebel-jais-viewpoint.jpg" eyebrow="A Welcome" title="View over Jebel Jais"
          placeholder="Panoramic portrait, the Ruler overlooking Jebel Jais" />
        <Folio side="l" n={2} />
      </div>
      <div className="page page--sand" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Welcome</Eyebrow></div>
        <p className="kk-quote anim d2" style={{ margin: "22px 0 0" }}>
          “While each of us has a finite time on Earth, Ras Al Khaimah’s prosperity should be endless.”
        </p>
        <div className="anim d3" style={{ marginTop: 26 }}>
          <PearlRule width={120} />
          <p className="kk-body" style={{ marginTop: 20, maxWidth: "44ch" }}>
            His Highness Sheikh Saud bin Saqr Al Qasimi, Member of the UAE Supreme Council and Ruler of Ras Al Khaimah.
          </p>
        </div>
        <Folio side="r" n={3} />
      </div>
    </React.Fragment>
  );
}

/* 3, RAK TODAY (DATA SPREAD) ---------------------------------------------*/
function TodaySpread() {
  return (
    <React.Fragment>
      <div className="page">
        <div className="anim d1"><Eyebrow>The Jewel of the North</Eyebrow></div>
        <h1 className="kk-h1 anim d1" style={{ margin: "12px 0 0" }}>Ras Al Khaimah Today</h1>
        <p className="kk-lead anim d2" style={{ marginTop: 18, maxWidth: "42ch" }}>
          Thirty years of patient diversification have produced an economy where no single sector dominates, and where investors find rare things: low costs, full ownership, and genuine stability.
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
        <Photo id="rak-today" src="photos/fort-towers.jpg" align="left" eyebrow="68 km of coastline" title="Mountains meet Business"
          placeholder="Aerial montage, beaches, mountains, ports & skyline" />
        <Folio side="r" n={4} />
      </div>
    </React.Fragment>
  );
}

/* 4, MILESTONE TIMELINE (full bleed pearl, two spreads) ------------------*/
const TL_CATS = {
  Industry:       "#a8572f",
  Business:       "#2c6e8f",
  Port:           "#1f7a6b",
  "Real estate":  "#9a7330",
  Tourism:        "#c2562f",
  Heritage:       "#9c5f7e",
  Aviation:       "#3d6aa6",
  Tech:           "#51589c",
  Roads:          "#6b6b6b",
  Sustainability: "#5b8c3f",
};

const TL_PART1 = [
  ["1980", "Industry", "The Gulf's first pharmaceutical manufacturer is founded in RAK; today 12 certified plants export to 50+ countries."],
  ["1989", "Industry", "A future top-five global ceramics and sanitaryware maker is established, making RAK an industrial exporter beyond oil."],
  ["2000", "Business", "RAK Free Trade Zone opens by Emiri decree — the emirate's first, with 100% ownership, zero tax and four sector parks."],
  ["Early 2000s", "Real estate", "Freehold law opens RAK to foreign buyers; Al Hamra Village adds the northern UAE's first golf course and marina."],
  ["Mid 2000s", "Real estate", "Al Marjan Island begins — four reclaimed islands reaching 4.5 km into the Gulf, the stage for RAK's resorts."],
  ["2005", "Business", "RAK Investment Authority creates industrial parks with tax exemptions; manufacturing reaches 26% of GDP."],
  ["2007", "Port", "Mina Saqr's container terminal hits 350,000 TEU; S&P and Fitch award the emirate 'A' ratings as GDP grows ~20%."],
  ["2010", "Heritage", "Al Jazeera Al Hamra reopens — the Gulf's only intact pre-oil pearling village, 54 ha of coral-stone houses."],
  ["2015", "Business", "RAK ICC launches as a world-class registry, today managing 15,000+ companies from 160+ countries."],
  ["2015", "Heritage", "A phased conservation of Al Jazeera Al Hamra begins; placed on the UNESCO tentative list in 2020."],
  ["2017", "Business", "RAKEZ forms across 33M m² — 13,000+ companies from 100+ countries across three industrial zones."],
  ["2017–19", "Port", "Saqr Port adds two 780 m deepwater berths dredged to 18 m, opening RAK to mainline container vessels."],
  ["2018", "Tourism", "The world's longest zipline, 2,832 m, opens atop Jebel Jais — the UAE's highest peak — igniting adventure tourism."],
];

const TL_PART2 = [
  ["2020", "Tourism", "Jais Adventure Peak completes the mountain hub — sky tour, sky maze, viewing decks and an adventure centre."],
  ["2020", "Tourism", "The UAE's highest restaurant opens at exactly 1,484 m on Jebel Jais, with glass walls over the Hajar range."],
  ["2023", "Tech", "RAK DAO launches — the world's first free zone built solely for digital and virtual-asset companies."],
  ["2025", "Tech", "RAK DAO relaunches as Innovation City, the world's first AI-powered free zone, across five technology pillars."],
  ["2025", "Roads", "An 11.5 km overhaul of the E11 coastal highway begins — wider lanes, new bridges and four junction tunnels."],
  ["2025", "Aviation", "A 30,000 m² airport terminal begins — six times today's size, built for 4.5M passengers a year by 2028."],
  ["2025", "Port", "Saqr 2.0 begins — a $1B, 8M m² expansion with 17–18 m berths, the deepest draft in the MENA region."],
  ["Q4 2026", "Business", "RAK Central delivers the emirate's first central business district — 1M sq ft of Grade-A office space."],
  ["Q1 2027", "Aviation", "A VVIP terminal and private-jet base opens to LEED Gold standard, 15 minutes from the Al Marjan resorts."],
  ["2027", "Tourism", "The region's first licensed integrated gaming resort opens on Al Marjan Island, with up to 1M visitors a year."],
  ["2027–28", "Real estate", "Marjan Beach — RAK's largest master plan: 85M sq ft, 3 km of beachfront, homes for 74,000 residents."],
  ["2027–28", "Real estate", "Mina Al Arab's Raha Island adds a marina, 2.5 km of private beaches and branded island residences."],
  ["2028", "Port", "Saqr 2.0 phase 1 opens — about 72 berths and +50M tonnes capacity, MENA's deepest project-cargo port."],
  ["2028", "Roads", "Emirates Road (E611) widens to five lanes each way, cutting RAK–Dubai travel time by up to 45%."],
  ["2028", "Aviation", "The new airport terminal reaches its full 4.5M annual passenger capacity with an expanded air-cargo hub."],
  ["2030", "Tourism", "Vision 2030 targets 3.5M overnight visitors, with 9,000+ hotel keys and 6,000 more in the pipeline."],
  ["2030", "Real estate", "Vision 2030 targets a population of 650,000 and 45,000 new homes, with global developers entering RAK."],
  ["2040", "Sustainability", "The Energy & Renewable Strategy targets 20% renewable generation and 30% energy savings."],
];

function TimelineSpread({ eyebrow, title, sub, items, cols }) {
  return (
    <div className="bleed page--sand timeline2" style={{ padding: "52px 70px 46px", display: "flex", flexDirection: "column" }}>
      <div className="anim d1" style={{ textAlign: "center" }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="kk-h2" style={{ margin: "10px 0 0" }}>{title}</h2>
        {sub && <p className="kk-small" style={{ margin: "8px 0 0", color: "var(--fg-muted)", fontStyle: "italic" }}>{sub}</p>}
        <PearlRule width={160} style={{ margin: "13px auto 0" }} />
      </div>

      <div className="tl2-legend anim d2">
        {Object.keys(TL_CATS).map((c) => (
          <span className="tl2-leg" key={c} style={{ "--cat": TL_CATS[c] }}><i></i>{c}</span>
        ))}
      </div>

      <div className="tl2-wrap anim d3">
        <div className="tl2-flow" style={{ columnCount: cols }}>
          {items.map(([year, cat, text]) => (
            <div className="tl2-item" key={year + cat + text.slice(0, 10)} style={{ "--cat": TL_CATS[cat] }}>
              <div className="tl2-head">
                <span className="tl2-year">{year}</span>
                <span className="tl2-chip">{cat}</span>
              </div>
              <div className="tl2-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 5, INDUSTRIAL POWERHOUSE (full-bleed feature) --------------------------*/
function PowerhouseSpread() {
  return (
    <div className="bleed">
      <Photo id="rak-industry" scrim="none" src="photos/industry-port.jpg"
        placeholder="Full-bleed, RAK Ceramics & Julphar production facilities at golden hour" />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim)", pointerEvents: "none" }}></div>
      <div className="anim d1" style={{ position: "absolute", left: 86, bottom: 86, right: 86, color: "var(--pearl)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
        <div style={{ maxWidth: "46%" }}>
          <Eyebrow style={{ color: "var(--gold-bright)" }}>The Industrial Powerhouse</Eyebrow>
          <h2 className="kk-h2" style={{ color: "#fff", margin: "12px 0 0" }}>Built to make things</h2>
          <p className="kk-body" style={{ color: "rgba(251,248,242,.85)", marginTop: 14, maxWidth: "42ch" }}>
            While other emirates chased skylines, Ras Al Khaimah built factories, a real, export-driven base, home to global names that began here.
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

/* 6, RAKEZ LAUNCHPAD ------------------------------------------------------*/
function RakezSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-rakez" src="photos/fort-towers.jpg" eyebrow="Where Business Begins" title="Where an idea becomes an Enterprise"
          placeholder="RAKEZ business park, modern offices & logistics" />
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
        <div className="kk-label anim d3" style={{ marginTop: 12 }}>The RAKEZ proposition · nearly 19,000 joined in one record year</div>
        <Folio side="r" n={16} />
      </div>
    </React.Fragment>
  );
}

/* 7, CLOSING CTA + BACK COVER --------------------------------------------*/
function ClosingSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-future" src="photos/future-construction.jpg" flip pos="right center" eyebrow="Vision 2030 & Beyond" title="A leader watches the next chapter take shape"
          placeholder="Forward-looking rendering, RAK Central & Wynn Al Marjan skyline" />
        <Folio side="l" n={29} />
      </div>
      <div className="page page--dark" style={{ justifyContent: "center" }}>
        <div className="anim d1"><img src="assets/wiw-gold.png" alt="Who's Who in RAK" style={{ width: 46, height: 46, display: "block" }} /></div>
        <Eyebrow style={{ marginTop: 22 }} >The Next Chapter Is Yours</Eyebrow>
        <h1 className="kk-h1 anim d1" style={{ color: "var(--pearl)", margin: "12px 0 0" }}>Where heritage fuels tomorrow’s investments</h1>
        <p className="kk-body anim d2" style={{ color: "rgba(251,248,242,.84)", marginTop: 18, maxWidth: "42ch" }}>
          Ras Al Khaimah spent thirty years earning its place. The next chapter is open, and it has room for you. Join the 40,000+ companies already thriving here.
        </p>

        <WaveDivider width={260} style={{ marginTop: 36, color: "var(--gold-bright)" }} />
        <p className="kk-small anim d3" style={{ marginTop: 30, color: "rgba(251,248,242,.5)", fontSize: 10.5, lineHeight: 1.6, maxWidth: "56ch", fontStyle: "italic" }}>
          Disclaimer: The photography in this book is illustrative and does not depict real people, places or properties. All information is provided for general illustration only and may not be accurate, current or complete.
        </p>
        <Folio side="r" n={30} />
      </div>
    </React.Fragment>
  );
}

/* 8, HERITAGE / ROOTS OF RESILIENCE (5–6) -------------------------------*/
function HeritageSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-heritage" src="photos/heritage-dhayah-fort.jpg" eyebrow="Roots of Resilience" title="Dhayah Fort"
          placeholder="Left, the hilltop Dhayah Fort and the ruins of Julfar at golden hour" />
        <Folio side="l" n={5} />
      </div>
      <div className="page page--sand" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Heritage Meets Modernity</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>Roots of Resilience</h2>
        <p className="kk-body anim d2" style={{ marginTop: 18, maxWidth: "44ch" }}>
          Long before the UAE existed, this was Julfar, one of the Gulf's great trading ports, famous for its pearls and its merchants. The instinct that built Julfar, open to the world, quick to trade, built to last, never left.
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

/* 9, TOURISM & LIFESTYLE (19–22) -----------------------------------------*/
function TourismSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-tourism" src="photos/tourism-resort-dusk.jpg" eyebrow="Tourism & Lifestyle" title="The luxury of tranquility"
          placeholder="Montage, Jais Flight zipline mid-ride, empty beaches, a five-star pool deck, a heritage village at dusk" />
        <Folio side="l" n={19} />
      </div>
      <div className="page" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Mountains, Coast & the Good Life</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>A destination, still climbing</h2>
        <p className="kk-lead anim d2" style={{ marginTop: 16, maxWidth: "42ch" }}>
          A decade ago, Ras Al Khaimah set itself the goal of one million visitors. It now welcomes far more, and the curve is still rising.
        </p>
        <div className="anim d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 26px", marginTop: 34 }}>
          <Stat n="1.35" unit="M" caption="Overnight visitors, 2025, a record" />
          <Stat n="+12" unit="%" caption="Tourism revenue, year on year" />
          <Stat n="2027" caption="Wynn Al Marjan Island opens" />
          <Stat n="×2" caption="Hotel capacity by 2030" />
        </div>
        <p className="kk-quote anim d4" style={{ fontSize: 23, marginTop: 26 }}>
          Adventure, luxury and culture, held together by a sense of safety and space the busier emirates can no longer promise.
        </p>
        <Folio side="r" n={20} />
      </div>
    </React.Fragment>
  );
}

/* 10, INFRASTRUCTURE & SUSTAINABILITY (23–24) ----------------------------*/
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
          World-class connectivity, a low-debt balance sheet, and a green agenda, the conditions for returns that last.
        </p>
        <Folio side="l" n={23} />
      </div>
      <div className="page page--pad-0">
        <Photo id="rak-infra" src="photos/infrastructure-port-aerial.jpg" align="left" eyebrow="Built for the long term" title="By Road, Sea & Sky"
          placeholder="Aerials of Saqr Port, the airport, the highway network and renewable installations" />
        <Folio side="r" n={24} />
      </div>
    </React.Fragment>
  );
}

/* 11, A PLACE TO BELONG / LIFESTYLE (25–26) ------------------------------*/
function LifestyleSpread() {
  return (
    <React.Fragment>
      <div className="page page--pad-0">
        <Photo id="rak-lifestyle" src="photos/lifestyle-family-home.jpg" pos="65% center" align="right" eyebrow="A Place to Belong" title="Neighborhoods, not just developments"
          placeholder="Expat families on the beach; the residential communities of Al Hamra Village and Mina Al Arab; weekend markets" />
        <Folio side="l" n={25} />
      </div>
      <div className="page page--sand" style={{ justifyContent: "center" }}>
        <div className="anim d1"><Eyebrow>Lifestyle Meets Opportunity</Eyebrow></div>
        <h2 className="kk-h2 anim d1" style={{ margin: "12px 0 0" }}>Investors come for the economics.<br />People stay for the life.</h2>
        <p className="kk-body anim d2" style={{ marginTop: 18, maxWidth: "44ch" }}>
          Ras Al Khaimah pairs the openness and safety the UAE is known for with something its neighbours struggle to offer: space, calm and a slower pace, all within reach of a global city. Mountains on one side, sea on the other, heritage in between.
        </p>
        <p className="kk-quote anim d3" style={{ fontSize: 26, marginTop: 24 }}>
          Work hard, live well. Lower costs, higher quality of life and the time to enjoy both.
        </p>
        <Folio side="r" n={26} />
      </div>
    </React.Fragment>
  );
}

/* 12, SUCCESS STORIES & INVESTOR PRIMER (27–28) --------------------------*/
function SuccessSpread() {
  const cases = [
    ["Manufacturing", "A European maker scaling through RAKEZ, because the maths worked."],
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
  { id: "timeline1", bleed: true, label: "Milestones I", render: () => <TimelineSpread eyebrow="1980 · 2019" title="Foundations of a Modern Emirate" sub="How three decades of deliberate building made Ras Al Khaimah" items={TL_PART1} cols={2} /> },
  { id: "timeline2", bleed: true, label: "Milestones II", render: () => <TimelineSpread eyebrow="2020 · 2040" title="Ascent &amp; Vision 2030" sub="The confirmed pipeline reshaping the emirate this decade" items={TL_PART2} cols={3} /> },
  { id: "powerhouse", bleed: true, label: "Industry", render: () => <PowerhouseSpread /> },
  { id: "rakez", bleed: false, label: "RAKEZ", render: () => <RakezSpread /> },
  { id: "tourism", bleed: false, label: "Tourism", render: () => <TourismSpread /> },
  { id: "infrastructure", bleed: false, label: "Infrastructure", render: () => <InfrastructureSpread /> },
  { id: "lifestyle", bleed: false, label: "Lifestyle", render: () => <LifestyleSpread /> },
  { id: "success", bleed: false, label: "Success Stories", render: () => <SuccessSpread /> },
  { id: "closing", bleed: false, label: "The Future", render: () => <ClosingSpread /> },
];

Object.assign(window, { SPREADS });
