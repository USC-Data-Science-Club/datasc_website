# Handoff: Socials (Photo Gallery) Section

## Overview
A new "Socials" section for the DataSC website — a photo gallery showcasing club workshops, meetups, and hangouts. Sits between the existing **Eboard** and **FAQ** sections in the one-page scroll layout, and gets its own navbar/footer link ("Socials").

## About the Design Files
The bundled HTML file (`socials-mockup.dc.html`) is a **design reference**, not production code — a static prototype built with inline styles and a Tailwind-less HTML approach to preview the layout in isolation. Recreate it as a real component in the existing Next.js + Tailwind codebase, following the same conventions as the other section components (`CurriculumSection.tsx`, `ProjectsSection.tsx`, etc.) — Tailwind utility classes, not inline styles.

## Fidelity
**High-fidelity.** Colors, spacing, typography, and layout below are final — implement pixel-for-pixel, not just directionally.

## Screen: Socials Section

**Purpose:** Give visitors a quick, visual sense of club culture — not just projects and curriculum, but people hanging out. Doubles as a lightweight way for eboard/marketing to drop in new event photos each semester.

**Section shell** (match sibling sections):
```tsx
<section id="socials" className="min-h-screen px-6 pt-24 pb-28 flex flex-col">
  <div className="max-w-6xl mx-auto w-full">
    ...
  </div>
</section>
```

### Header block
- Eyebrow label: `Socials` uppercase, tracking-[0.2em], text-sm, text-white/70 — matches the "What we've been up to" eyebrow pattern in ProjectsSection.
- Heading: `Socials` — text-4xl font-semibold (36px), white.
- Subhead paragraph (text-lg, text-white/70, max-w-2xl):
  "Photos from workshops, meetups, and hangouts. Drop your own in any tile — click "+ add photo" for more."

### Gallery grid
**Desktop (≥1024px):** 3-column CSS grid, `grid-auto-rows: 150px`, `gap: 16px` (Tailwind: `grid grid-cols-3 auto-rows-[150px] gap-4`).
- Tiles 1 and 4 (0-indexed 0 and 3) span 2 rows (`row-span-2`) for a masonry/asymmetric feel — everything else spans 1 row.
- 7 tiles total: 6 photo tiles + 1 "add photo" tile (see below).

**Mobile (<640px):** 2-column grid, `grid-auto-rows: 130px`, `gap: 12px` (Tailwind: `grid grid-cols-2 auto-rows-[130px] gap-3`).
- Tile 1 and tile 5 span 2 rows.
- The "add photo" tile spans both columns (`col-span-2`) and is shorter (~80px).

**Photo tile:**
- `rounded-xl` (12px radius), `object-cover`, fills its grid cell.
- No border/frame on filled photos — let the image read edge-to-edge within the rounded corners.

**"Add photo" tile** (last grid item):
- Dashed border, `border border-dashed border-[#FFC72C]/40`, `bg-[#FFC72C]/[0.04]`, `rounded-xl`, centered content.
- Label: `+ add photo`, small caps or plain, `text-[#FFC72C]/70`.
- Behavior: clicking opens a file picker / upload flow (see State Management below) — this is the mechanism for eboard members to add new event photos without a code change.

## Interactions & Behavior
- **Add photo tile** → opens an upload dialog (file picker or drag-and-drop). On successful upload, prepend or append the new photo as a new grid tile, keeping the "add photo" tile last.
- No lightbox/zoom in this version — clicking a filled photo tile does nothing (optional future enhancement: open a lightbox modal on click).
- No hover states specified — a subtle `hover:brightness-110` or `hover:scale-[1.02] transition` on photo tiles is a reasonable default if the codebase wants a hover affordance, but not required for parity.
- Responsive: grid reflows from 3 → 2 columns at the `lg`/`sm` breakpoint already used elsewhere in the site (Tailwind `sm:`/`lg:` prefixes, consistent with EboardMembers.tsx's grid breakpoints).

## State Management
- `photos: { id: string; url: string }[]` — ordered list of gallery images, likely backed by a folder of static assets initially (see Assets below) and later a simple CMS/DB table if uploads need to persist for other visitors, not just the uploader's browser.
- Upload flow needs a real backend target (S3 bucket, Cloudinary, or a Next.js API route writing to `/public`) — the prototype's drag-and-drop placeholder is a design stand-in only; there is no actual persistence layer to copy.

## Design Tokens
- Background: `#000` (page bg, unchanged from rest of site)
- Card/tile border: `border-white/10`
- Accent gradient (used elsewhere on hover unions/dividers): `from-[#990000] to-[#FFC72C]`
- Cardinal: `#990000`
- Gold: `#FFC72C`
- Eyebrow/label text: `text-white/70`, uppercase, `tracking-[0.2em]`
- Body/paragraph text: `text-white/70`
- Heading: `text-4xl font-semibold` (36px)
- Radius: `rounded-xl` (12px) for all tiles
- Grid gaps: 16px desktop / 12px mobile

## Assets
The mockup seeds the gallery with 6 real event photos already present in the repo — no new assets needed to launch:
- `public/Events/DSC07625.JPG`
- `public/Events/DSC07628.JPG`
- `public/Events/DSC07659.JPG`
- `public/Events/DSC07667.JPG`
- `public/Events/DSC07672.JPG`
- `public/Events/DSC07676.JPG`

Reference them directly from `/Events/...` (Next.js `public` folder convention) as the initial `photos` array.

## Nav / Footer wiring
- Add `<a href="/#socials" className="hover:text-white">Socials</a>` to `Navbar.tsx`'s link row, and a matching entry to `Footer.tsx`'s "Quick Links" list — same pattern as the existing About/Projects/Eboard/FAQ links.
- Insert `<SocialsSection />` into `app/page.tsx` between `<EboardMembers />` and `<FaqSection />`.

## Files
- `full-mockup-catalog.dc.html` — the full site-recreation mockup file (dark theme); scroll to the section labeled **"06 · Socials (new)"** (desktop + mobile frames) for this feature specifically. Everything else in that file is the rest of the site (unrelated to this handoff — already implemented).
- `reference-photos/` — copies of the 6 event photos used to seed the gallery in the mockup (same files as `public/Events/*.JPG` in the repo).
