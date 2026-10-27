---
name: Fluxo Web
description: Turns what a business already knows into technology, drawn as one circuit that starts in the Fluxo logo and reaches every area of the company.
colors:
  green: "#27D46B"
  green-hover: "#3BE07D"
  green-ink-light: "#0E803E"
  on-green: "#0B0B0B"
  ground: "#1D1D1D"
  panel: "#262626"
  night-raised: "#2A2A2A"
  ink: "#F4F4F1"
  muted: "#A3A39E"
  line: "#FFFFFF"
  ground-light: "#F6F6F3"
  panel-light: "#FFFFFF"
  ink-light: "#111111"
  muted-light: "#585854"
  line-light: "#111111"
typography:
  display:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.375rem, min(5.2vw, 9.5svh), 4.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  card-title:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  control:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
  wordmark:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.28em"
  data:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.55
    fontFeature: "tnum"
rounded:
  control: "10px"
  inset: "12px"
  card: "16px"
  round: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "40px"
  container-max: "1280px"
  card-pad: "28px"
  card-pad-lg: "36px"
  section: "80px"
  section-lg: "112px"
  nav-height: "72px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
  button-primary-lg:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "56px"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-outline-hover:
    textColor: "{colors.green}"
  button-dark:
    backgroundColor: "{colors.on-green}"
    textColor: "{colors.green}"
    rounded: "{rounded.control}"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.panel}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.control}"
  nav-link-active:
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad-lg}"
  card-featured:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad-lg}"
  card-night:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "40px"
  project-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12px"
  area-card:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.inset}"
    padding: "10px 16px"
  icon-circle:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.round}"
    size: "64px"
---

# Design System: Fluxo Web

## Overview

**Creative North Star: "El circuito del negocio"**

The Fluxo logo is the system. The hero renders the original logo vector, a negative square with the brain/cloud and circuit lines cut out, painted the exact black of the band so the square disappears and only the lines remain. A white layer revealed top to bottom fills those lines, a green band sweeps through them, and four connectors leave the logo toward the areas of a business (Ideas, Ventas, Operación, Tecnología), carrying green pulses that light each area's terminal. Everything after the hero extends that circuit: round terminals, hairline threads, the ñandutí web behind the dark bands.

The page is one composition, not a themed one. Full-bleed bands alternate between the logo's black and a warm off-white, edge to edge, with no inset frames and no theme switch. Type is a confident semibold grotesk set large and tight; green is solid and rare, the color of the action, the lit node and one phrase in the hero headline. Density is moderate: centered four-across rows on the light bands, generous 80–112px band padding, cards with a 16px radius and a hairline border.

The identity is black, white and green. The supplied spec's cream palette was rejected by the team and does not appear anywhere in the build.

**Key Characteristics:**
- Full-bleed alternating bands: logo black (default) and off-white (light band), same token names in both.
- The original logo vector animated as the hero's signature, never redrawn.
- Semibold (600) display and section headings with tight negative tracking.
- Rounded 10px controls with a trailing arrow; 16px cards; circles for icons, steps and terminals.
- Flat: no box-shadows anywhere; depth comes from band contrast and hairlines.

## Colors

Black, white and one circuit green; the light band swaps the same roles rather than adding colors.

### Primary
- **Circuit Green** (green): primary button fill, the "Hablemos" nav button, featured plan and product fields, lit terminals, hero pulses and scan band, the open FAQ toggle, focus ring and text selection. On dark bands it is also the ink for one emphasised phrase ("Juntos construimos") and the green relationship label.
- **Lit Green** (green-hover): hover fill of every green button. Never at rest.
- **Deep Text Green** (green-ink-light): green used as text on light bands (the "Producto propio" label, check icons, title hovers), darkened to stay legible on off-white. On dark bands the green-ink role resolves to Circuit Green.
- **Ink on Green** (on-green): every text and icon on a green field, and the fill of the dark button used on green fields.

### Neutral
- **Logo Black** (ground): the default band, the navbar once scrolled, the footer, the closing panel and the dark product card. It is the exact black of the logo square.
- **Carbon Panel** (panel): card surface inside dark bands; also the hover of the dark button.
- **Raised Carbon** (night-raised): image wells, initials avatars and the hero area cards.
- **Bone Ink / Ash Muted** (ink, muted): primary and secondary text on dark bands.
- **Hairline** (line): white on dark bands, applied only at 10–35% alpha.
- **Bone Ground / White Panel** (ground-light, panel-light): light band ground and its cards.
- **Graphite Ink / Stone Muted** (ink-light, muted-light): text on light bands.
- **Hairline (light)** (line-light): near-black, again only at 10–35% alpha.
- **Relationship labels**: "Producto propio" in the green-ink role, "Socio tecnológico" and "Cliente" in the muted role.

### Named Rules
**The Logo Black Rule.** The dark band is the logo's own black. The hero logo is a cut-out square painted in that same value; change the band black and the square reappears as a box.

**The Band Swap Rule.** Light sections are a class on the band that redefines ground, panel, ink, muted, line and green-ink. Components keep the same role classes in both bands; there are no light/dark class pairs and no theme switcher.

**The Solid Green Rule.** Green is a fill, a node or a word of ink. The single exception is native to the world: the soft-edged scan band that travels inside the logo's line holes in the hero. Nowhere else is green a glow, halo, gradient or colored shadow.

## Typography

**Display Font:** Host Grotesk (with ui-sans-serif, system-ui), self-hosted variable 300–700
**Body Font:** Host Grotesk
**Label/Mono Font:** Geist Mono (with ui-monospace), self-hosted 400–600

**Character:** A firm, plain-spoken grotesk at semibold for headings and regular for reading, with a monospaced voice kept strictly for numbers.

### Hierarchy
- **Display** (600, clamp 2.375rem–4.5rem capped by 9.5svh, 1.04, -0.03em): the one h1 per page, home hero and page heroes, max 14–18ch.
- **Title** (600, clamp 1.75rem–3rem, 1.1, -0.025em): section h2s through the section heading and the closing manifesto.
- **Card title** (500, 1.25–1.5rem, tight tracking): card, step, plan, member and project names. The home's benefit, project and step titles use 600.
- **Lead** (400, clamp 1.0625rem–1.25rem, 1.55): the muted sentence under a display or title, 42–60ch.
- **Body** (400, 15–16px, 1.625): descriptions, FAQ answers and legal text at max 62–68ch.
- **Control** (500, 14–16px): buttons, nav links and arrow links, sentence case.
- **Wordmark** (500, 15px, 0.28em, uppercase): "FLUXO WEB" beside the symbol in the nav and footer only.
- **Data** (Geist Mono 500, tabular figures, 12–18px): step numbers (01–04), years and clause numbers.

### Named Rules
**The Semibold Heading Rule.** Display and section headings are 600. Heading weight comes from the face, never from color or a label stacked above it.

**The Mono Is Data Rule.** Geist Mono sets only step numbers, years and clause numbers. Never sentences, headings, navigation or hostnames.

**The No Eyebrow Rule.** A heading stands alone with its lead below. No kicker, eyebrow or small label sits above it.

## Layout

Content sits in a 1280px container with 20px gutters, 32px from 640px and 40px from 1024px. Every section is a full-bleed band with 80px vertical padding (112px from 640px). The navbar is 72px tall and fixed, so heroes start with 112–160px of top padding.

Page sequence: a dark hero band (home Hero or PageHero), then bands that alternate light and dark, then the dark closing band and the dark footer. Legal documents put their text in one light band.

The grid is 12 columns from 1024px. The home hero is a 6/6 split, text left and the logo circuit right (max 620px, 5:4), stacking on mobile where the area cards hide below 640px. Recurring compositions: four-across centered rows on light bands, divided by vertical hairlines at 1024px and up (benefits, process steps with arrows between round numbers); three equal project cards; 5/7 splits with a heading beside a hairline list; a 4/8 split with a sticky clause index for legal text; a dark band with the ñandutí `edge` web filling its right half behind a black-to-clear veil.

### Named Rules
**The Alternating Band Rule.** Sections change by band, not by frame. A new section is a new full-bleed band; cards live inside bands, never as inset framed panels.

## Elevation & Depth

The system is flat: the build has no box-shadows. Depth comes from the contrast between black and off-white bands, from hairline borders at 10–35% alpha, and from legibility veils, which are black-to-clear gradients that fade the ñandutí canvas behind text (page heroes left to right on desktop, top to bottom on mobile; radial in the closing band; left to right on the aspiration band). The scrolled navbar (95% black with blur) and the hero area cards (90% raised carbon with light blur) are the only translucent layers.

### Named Rules
**The Flat Band Rule.** Nothing casts a shadow. A card separates from its band by a hairline border or a solid fill.

## Shapes

Three shapes: the 10px rounded rectangle of controls (buttons, menu toggle, social buttons), the 16px rounded card, and the circle of the logo's terminals. Image wells and hero area cards use 12px, nested inside 16px cards. Circles carry icons (64px benefit icons), step numbers (56–60px), avatars, FAQ toggles and terminals: 12px with a 1.5px ring, hollow at rest and solid green when lit. Hairlines are 1px. Connectors in the hero are 1.6px with round caps and 45-degree bends, the same geometry as the logo traces.

## Components

### Buttons
Square-shouldered, softly rounded, always pointing forward.
- **Shape:** gently rounded (10px).
- **Primary:** Circuit Green with Ink on Green text, 500 weight, ending in a right arrow. Sizes: 40px tall at 14px, 48px at 15px with 20px padding, 56px at 16px with 24px padding (the WhatsApp default, "Conversemos sobre tu negocio").
- **Hover / Focus:** fill steps to Lit Green over 200ms; the arrow advances 2px with out-expo over 300ms. Focus is a 2px green outline at 3px offset.
- **Outline:** a 35% hairline border in the text color; on hover the border and text turn green. Paired beside a primary ("Quiero resolver un problema", "Conocé la iniciativa").
- **Dark:** Ink on Green fill with green text, used on green fields; hover lifts to Carbon Panel.
- **Arrow link:** 15px medium text with an arrow that advances 4px and an underline at 6px offset on hover.

### Chips
- **Style:** full-round, 1px hairline at 15–30%, 13px text: skill tags on partner pages and the "Recomendado" marker on the featured plan.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** panel with a 10–15% hairline border; the featured plan and FluxoCRM field are solid Circuit Green with no border; the lead product card is Logo Black on a light band.
- **Shadow Strategy:** none (see the Flat Band Rule).
- **Internal Padding:** 28px, 36px from 640px (40px on product cards); project cards use 12px around a 12px-radius 16:10 screenshot.
- **Hover:** border warms toward green; screenshots scale to 1.03 over 700ms.

### Plans (no published price)
Name, use-based description, a hairline, the line "Inversión según tu operación", included items with check icons, and a "Pedir propuesta" control. The featured plan is a green field marked "Recomendado". No figures, currencies or periods.

### Navigation
- **Style:** full-width bar fixed to the top, 72px, transparent over the hero; after 24px of scroll it becomes 95% Logo Black with blur and a 10% bottom hairline.
- **Brand:** the logo symbol (40px) plus the uppercase wordmark.
- **Links:** Soluciones · Proyectos · Nosotros, 15px in muted, ink on hover and when active. A green "Hablemos" button (44px) closes the row.
- **Mobile:** a 44px outlined menu toggle opens a black sheet with 24px links between hairlines, a green dot on the active link and a full-width 56px green "Hablemos".

### FAQ rows
Rows between hairlines; the question at 18–20px medium; the toggle is a 32px circle with a plus that rotates 45 degrees and fills Circuit Green when open.

### Logo circuit (signature)
The home hero illustration on a 1000×800 canvas. The original logo vector, taken verbatim from the brand SVG, is painted Logo Black over a bone-white layer that scales in from the top over 1.6s, so the lines appear drawn. From 2s a green band sweeps top to bottom through the lines every 3.6s. Four 1.6px connectors at 55% white draw in, ending at terminals beside four raised cards (12px radius, lucide icon plus label: Ideas, Ventas, Operación, Tecnología). Pulses travel each connector in turn and light its terminal green. Under reduced motion the scan band and pulses are removed and the finished logo and connectors stay static.

### Ñandutí canvas
The woven web from earlier versions of the site, now a secondary texture on dark bands: `edge` on page heroes and the right half of the home aspiration band, `quiet` (centered, dimmed) behind the closing manifesto. Always behind a black veil, static under reduced motion, paused offscreen.

### Threaded lists and timelines
Steps, timelines and feature lists hang from a 1px hairline with a terminal per item; the first or last item is lit green.

## Do's and Don'ts

### Do:
- **Do** keep the dark band at the logo's black and use the light band class for every light section.
- **Do** render the logo from the original vector; animate it with layers behind and over it, never by redrawing its lines.
- **Do** set display and section headings at 600 with negative tracking, each followed by a muted lead.
- **Do** end every primary action with an arrow, on a 10px rounded green button with Ink on Green text.
- **Do** use Geist Mono with tabular figures only for step numbers, years and clause numbers.
- **Do** honor reduced motion in every animated piece: remove the scan and pulses, show the finished state.
- **Do** verify every band at 1440 and 390 wide; with no theme switcher, the light and dark bands together are the whole check.

### Don't:
- **Don't** add a theme switcher, light/dark class pairs or raw Tailwind grays; colors come from the role tokens.
- **Don't** use cream or beige grounds; the light band is Bone Ground.
- **Don't** use green as glow, halo, colored shadow or gradient outside the logo's scan band.
- **Don't** add box-shadows to cards, buttons or navigation.
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** set sentences, headings, navigation or hostnames in Geist Mono.
- **Don't** wrap sections in inset framed panels; sections are full-bleed bands.
- **Don't** show prices, currencies or popularity claims on plan cards.
