# Book Spreads — Kai Kata UI kit

Hi-fidelity recreation of **coffee-table book interior spreads** for the title
**_RAK Rising: 30 Years of Visionary Growth_**. This is the one product surface
in the Kai Kata system: large-format, image-driven pages with concise narrative,
hero statistics, and gold flourishes.

## Run it
Open `index.html`. It's a flip-through prototype of the book — arrow buttons,
keyboard ←/→, and the dot rail navigate the seven spreads. The current spread is
remembered across reloads (`localStorage`).

## Photography
The five supplied RAK photographs are baked into the spreads via the `src` prop
on the `Photo` primitive (rendered as a plain `<img>` with `object-fit:cover`),
so the book ships fully illustrated. They live in `photos/`:
`cover-marjan.jpg` (cover · Al Marjan + tower), `jebel-jais-viewpoint.jpg`
(welcome), `fort-towers.jpg` (RAK Today + RAKEZ — fort meets modern towers),
`industry-port.jpg` (Industrial Powerhouse), `future-construction.jpg` (closing).
To swap a photo, drop a new file in `photos/` and update the matching `src=` in
`spreads.jsx`. A `Photo` with **no** `src` falls back to a drag-and-drop
`<image-slot>` placeholder (see `image-slot.js`) for slots you haven't filled yet.

> Note: `fort-towers.jpg` is reused on two spreads (RAK Today + RAKEZ) because
> five photos cover six image regions — supply a dedicated business-park / factory
> shot to give each spread a unique image.

## Spreads (archetypes)
1. **Cover** — full-bleed photo, gold display title, kicker + subtitle.
2. **Welcome** — portrait page + editorial standfirst on sand.
3. **RAK Today** — data spread: title + lead + 2×2 stat grid · facing photo.
4. **Heritage** — Roots of Resilience: photo + Julfar prose, quote, stats.
5. **Milestones** — full-width pearl timeline, two rows of four.
6. **Industrial Powerhouse** — full-bleed feature with overlaid caption + stats.
7. **RAKEZ** — photo + benefits list (100% / 0% / days) + the RAKEZ proposition.
8. **Tourism** — photo + lead, 2×2 tourism stats, pull quote.
9. **Infrastructure** — text + stats page · facing port/airport photo.
10. **Lifestyle** — "A Place to Belong": photo + quote on sand.
11. **Success Stories** — dark case-study page · "why newcomers choose RAK" list.
12. **The Future** — forward render + dark CTA page with QR, contact, wave mark.

Spreads **4, 8, 9, 10, 11** ship with art-directed placeholder regions (the
intended-photo brief on a deep-Gulf panel with a gold frame) — they await
photography. Drop a file in `photos/` and add `src=` to the matching `Photo` to
fill them.

## Files
- `index.html` — the viewer/prototype (loads everything below).
- `primitives.jsx` — shared parts: `Mark`, `Eyebrow`, `PearlRule`, `WaveDivider`,
  `Folio`, `Stat`, `Photo`, `Plate`. Exported to `window`.
- `spreads.jsx` — the seven spread compositions + the `SPREADS` array.
- `book.css` — stage/scaling, page, photo, stat, timeline, viewer-chrome styles.
- `image-slot.js` — the drag-and-drop image placeholder web component.

## Building new spreads
Compose primitives inside a `.book` grid. A normal spread returns two `.page`
columns; a `bleed:true` spread returns one `.bleed` element spanning both. Use
`page--dark` for Gulf-blue pages, `page--sand` for the deeper pearl tint, and
`page--pad-0` when a page is pure photography. Pull copy and stats from the
manuscript; keep one hero idea per spread and lean on white space.
