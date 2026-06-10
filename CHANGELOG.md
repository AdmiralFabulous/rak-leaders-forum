# Changelog — The Leaders Forum, Ras Al Khaimah 2026 (promosite)

Live site: https://kaikata-rakleadersforum.netlify.app
Deploys automatically from `main` via GitHub Actions → Netlify.

## v2.5 — 2026-06-10 · Content update from the design handoff

### Changed
- **Forum date is now 22 October 2026** everywhere (was 12 November): meta
  description, hero kicker + meta strip, At-a-Glance, programme header
  (Thursday 22 October 2026), footer.
- **Three WHYs in the hero panel** — gold italic Q&A strip (Why Ras Al
  Khaimah? / Why now? / Why the Leaders Forum 2026?) between the CTAs and
  the meta strip.
- **Book tag renamed** to "Dawn of the North" (matches the book's cover).
- **Programme: all four phases open by default** — the full itinerary is
  visible without clicking through each phase.
- **Membership copy rewritten** — "reserved circle… invitation and selective
  review only… privileged access" lead, plus the refined gateway paragraphs
  (elevates the quality of the conversation; intentionally selective; every
  delegate matters).
- **Venue rewritten** — InterContinental Ras Al Khaimah Mina Al Arab Resort
  & Spa (opened 2022; where the Gulf, the terracotta desert and the Hajar
  Mountains converge; 45 minutes from Dubai); the three venue image
  drop-zones removed in favour of a clean single-column layout.
- **Panel 04** comma removed ("…belongs to the world and what comes next…").
- **Footer attribution** added: RAK Leaders Club and The Leaders Forum are
  products of Kai Kata FZE.
- Form payload now also records the submitting page URL and timestamp.

### Preserved against the design baseline
- Netlify Forms registration (attributes + honeypot) and dual-channel
  delivery, which the design bundle predates.
- The keynote-time consistency fix: the sponsor "Stage" benefit references
  the **13:55** real estate keynote (the design's copy still said 15:30,
  which is the Business Zone keynote).

## v2.4 — 2026-06-10 · Dual form delivery (Netlify Forms) + CC

### Added
- **Netlify Forms as a second delivery channel.** The form is registered with
  Netlify (`data-netlify`, honeypot anti-spam); every enquiry now goes to BOTH
  the Google Apps Script (Sheet + email) and the Netlify Forms dashboard.
  Submission succeeds if either channel delivers, so a single outage can't
  lose an enquiry.
- **Email notifications on the Netlify channel** to ao@swissdragons.com and
  mather.alexj@gmail.com, provisioned automatically (idempotently) by CI on
  every deploy.
- CI smoke test now exercises both channels and reports the raw responses.

### Fixed
- The CI Apps Script test followed Google's 302 redirect while still forcing
  POST, producing a false failure (405); now downgrades to GET as browsers do.

## v2.3 — 2026-06-05 · Working enquiry form + dynamic subjects

### Added
- **Form delivery (email + spreadsheet).** The contact form now POSTs to a
  Google Apps Script endpoint that appends every enquiry as a row in a Google
  Sheet and emails it to **ao@swissdragons.com** (reply-to set to the
  enquirer). Organisation and phone are included in the message body.
  Endpoint lives in `assets/script.js` (`FORM_ENDPOINT`).
- **Submit states.** The button shows "Sending…" while delivering; on success
  the elegant confirmation panel shows as before; on failure the form is
  preserved (nothing typed is lost) with a fallback prompt to email directly.
- **Dynamic subject from every shortcut CTA** (`data-subject` on any
  `#contact` link — generic, so future shortcuts only need the attribute):
  - Request Consideration (Individual card) → *Individual Membership consideration*
  - Request Consideration (Corporate card) → *Corporate Membership consideration*
  - Request Sponsorship Prospectus → *Sponsorship or partnership enquiry*
  - Footer: Delegate enquiries → *Request to attend* · Speaker applications →
    *Speaker or panel enquiry* · Sponsorship → *Sponsorship or partnership
    enquiry* · Media accreditation → *Press accreditation*
  - (The nine partner-tier "Enquire" links already set subject + a
    personalised message naming the tier.)

## v2.2 — 2026-06-05 · Deploy hardening

- CI now resolves the Netlify site by its live name
  (`kaikata-rakleadersforum`) instead of trusting a hardcoded ID, and deploys
  `--prod --site` to it. Verified server-side that production serves the
  current content.

## v2.1 — 2026-06-05 · Programme keynote swap

- 13:55 keynote → CEO, Integrated Resort Lifestyle, Hospitality & Development
  (Master-planned communities & real estate).
- 15:30 keynote → CEO, Dual-Jurisdiction Business Zone (Free zones, industry
  & economic development).
- Both partner "Stage" zone references updated to match the new times.

## v2.0 — 2026-06-05 · Full design implementation

- **Membership reframed as invitation-only** — all pricing and
  purchase/"paying member" language removed ("By invitation" / "By
  selection"; "Request Consideration" CTAs).
- **Entity names genericized** per copy rules — Offshore Corporate Registry,
  Dual-Jurisdiction Business Zone, Emirati Bank, Integrated Resort Lifestyle,
  Emirates' Rising Aviation Gateway — with azure accent on institution names.
- **Programme** — VIP opening address (09:10) inserted with revised times;
  phases (Morning/Midday/Afternoon/Evening) are an unfolding accordion with a
  staggered entrance.
- **Partners** — 9-tier sponsorship accordion with scroll-triggered
  choreography (emblem, halo, ring, cascading tiers) and per-tier "Enquire"
  CTAs that prefill the contact form.
- **Delegate profile** single-letter gold badges; GCC market stat 62M+.
- Hero/Theme background videos lazy-load after first paint (`data-src`);
  hero plays at 0.5× for a cinematic feel.
- All em-dashes replaced with commas across HTML/CSS/JS.

## v1.x — earlier

- v2 design import: RAK Leaders Club branding (RLC shield lockup), VIP
  programme slot, "Dawn of the North" flip-through book under `book/`.
- Initial luxury single-page site (navy/gold/cream, Cormorant Garamond +
  Manrope), hero + theme videos, frosted-glass hero panel, Netlify deploy
  workflow.
