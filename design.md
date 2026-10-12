# RENOPLUS — Design

French single-page construction specialist website. Reference: Manifold Bio screenshot supplied by the user; translate its editorial typography, generous white space, pale hero, technical diagrams, and full-width dark panels to construction. Never reuse its copy.

White and navy corporate architecture aesthetic. Primary objective: explain screed and insulation expertise and open a personalized WhatsApp quotation conversation.

## Implementation direction

- Palette: deep navy #0a2637, white #ffffff, pale cool white #f3f6f5, baby blue #b9dcf2, slate #61717b. WhatsApp action: baby blue #b9dcf2 with navy text.
- Typography: Manrope display for precise, spacious, light-weight headings; Poppins body. H1 around 64px desktop / 40px mobile. Small uppercase tracked section labels.
- Layout: centered 1280px content, 64px desktop margins, 24px mobile. Hero text left and architecture photo right; thin grid rules and baby-blue accents. Services in dark editorial split panel, interactive service accordion with contextual images. Avoid generic rounded card grid.
- Header: wordmark with architectural layer symbol, anchor navigation, quote CTA; mobile disclosure menu.
- Sections: hero, trust strip, services with floor cross-section diagram, company, three provided reviews, regional coverage and quotation section, footer.
- UX: functional phone and WhatsApp links, editable project details in quotation builder (no data stored), accessible dialog for legal information and missing registration details, no invented credentials or metrics. Reviews are supplied by the customer, not externally verified.
- Motion: subtle entry animation, button hover, smooth anchor scroll; respect reduced motion.
- Files: pages/home.tsx (implementation), pages/index.tsx (composition), styles.css, index.html, public/images, public/favicon.svg. No new API or database needed. Existing analytics and runtime remain unchanged.

## Key flows

1. Visitor reads services → selects an accordion → opens a service-specific WhatsApp inquiry.
2. Visitor enters project type, surface and city → opens WhatsApp with a French message containing those details.
3. Visitor uses direct call, regional navigation, or footer legal-information dialog.

## Original template tokens (unused starter reference)

One token set, consumed per platform:

- **Web & desktop**: CSS variables in `packages/web/src/web/styles.css` (desktop loads the web UI).
- **Mobile**: `Colors.light` / `Colors.dark` in `packages/mobile/constants/theme.ts`, read via `useColors()`; `userInterfaceStyle: "automatic"` follows the system light/dark setting.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | #1F1F1F | #E5E5E5 | Buttons, active tab, accents |
| background | #FFFFFF | #0A0A0A | Page/screen background |
| card | #FFFFFF | #1A1A1A | Cards, surfaces |
| foreground | #171717 | #FAFAFA | Primary text |
| mutedForeground | #737373 | #A3A3A3 | Secondary text |
| border | #E5E5E5 | #262626 | Hairlines |
| destructive | #DC2626 | #EF4444 | Delete / errors |

## Typography

Name the display + body pairing here. Web: set font families in `styles.css` (self-hosted files go in `packages/web/public/fonts/`). Mobile: system font by default; load custom fonts with `useFonts` from `expo-font` and reference them via `Fonts` in `constants/theme.ts`.

## Pages & Screens

List each page/screen, its route file, and what it shows. Example:

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — what the user sees first.
- **Mobile — Home** (`packages/mobile/app/(tabs)/index.tsx`) — main tab.
- Add web pages under `src/web/pages/` (+ route in `app.tsx`); mobile tabs under `app/(tabs)/`, stack/modal screens under `app/`.

## Key User Flows

1. Describe the primary flow end to end (open → action → result).
2. ...

## Architecture

- **API**: typed oRPC client (`lib/api.ts` in each package) → the backend in `@template/web`. Query/mutation hooks live in `queries/` (one file per feature); pages/screens call them with `@tanstack/react-query`.
- **State/sync**: TanStack Query with optimistic updates for instant-feel interactions.
- **Auth / payments / uploads**: see `skills/app/references/` when those features are needed.

## Revision
Replace all green/sage accents with baby blue; maintain navy text on pale-blue buttons for contrast. Add live Google Maps street-address embed to the footer with an external directions link. The address has no street number, so map the supplied street, not an invented exact business pin.
