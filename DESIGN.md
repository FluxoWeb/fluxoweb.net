---
name: Fluxo Web
description: Software, IA e infraestructura para PyMEs, woven as one network from code to server.
colors:
  green: "#27D46B"
  green-hover: "#3BE07D"
  green-ink-light: "#0E803E"
  green-ink-dark: "#27D46B"
  on-green: "#0B0B0B"
  night: "#1D1D1D"
  night-raised: "#2A2A2A"
  night-ink: "#F4F4F1"
  night-muted: "#A3A39E"
  ground-light: "#F6F6F3"
  panel-light: "#FFFFFF"
  ink-light: "#111111"
  muted-light: "#585854"
  ground-dark: "#121212"
  panel-dark: "#1D1D1D"
  ink-dark: "#F4F4F1"
  muted-dark: "#A3A39E"
typography:
  display:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, min(6.6vw, 11svh), 6rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.25
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
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.08em"
  data:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontFeature: "tnum"
rounded:
  frame: "28px"
  tile: "20px"
  pill: "9999px"
spacing:
  frame-inset-sm: "8px"
  frame-inset: "12px"
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  card-pad: "28px"
  card-pad-lg: "36px"
  section-sm: "96px"
  section: "128px"
  container-max: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 24px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
  button-primary-on-green:
    backgroundColor: "{colors.on-green}"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    height: "48px"
  button-outline:
    textColor: "{colors.ink-light}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
  nav-link:
    textColor: "{colors.night-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link-active:
    textColor: "{colors.night-ink}"
  panel-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.frame}"
  panel-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.frame}"
  card:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.frame}"
    padding: "{spacing.card-pad-lg}"
  icon-button:
    textColor: "{colors.night-muted}"
    rounded: "{rounded.pill}"
    size: "36px"
---

# Design System: Fluxo Web

## Overview

**Creative North Star: "Ñandutí de circuitos"**

Fluxo Web is drawn as a literal web: the Guaraní ñandutí lace woven from the circuit traces of the Fluxo logo. Every service, product and partner is a node on one network that the company runs end to end. The visual language is black, white and green, the brand colors the company owns, applied with discipline: near-black framed panels carry hairline white threads, and green appears only where something is solid, actionable or alive.

The page reads as a sequence of framed rooms on a quiet ground. A dark framed panel opens every page (the hero, with the woven canvas behind the text), open sections of type and threads follow on the theme ground, a single solid green field states the end-to-end promise, and a single dark framed panel closes each marketing page with one WhatsApp action. Density is low; type is large, light and tightly tracked; proof (live projects, partners, dates) carries the persuasion instead of decoration.

It rejects the indigo SaaS template (badge pill, blob gradient, three equal cards) and its neon-dark opposite: no glow, no gradient accents, no eyebrow labels.

**Key Characteristics:**
- Rounded framed panels (28px) inset 8–12px from the viewport edge, the border language of every page.
- A dark `night` surface that stays dark in both themes, carrying the ñandutí canvas.
- Hairline threads (1px, ink at 10–15% alpha) as dividers, timelines and connectors between round terminal nodes.
- Green as solid committed fields, primary pills and live nodes; never as glow.
- Light display type (300) with tight negative tracking; Geist Mono reserved for data.

## Colors

A three-voice palette: near-black, warm off-white, and one saturated circuit green, with light and dark themes sharing the same role names.

### Primary
- **Circuit Green** (green): the brand's live color. Solid fills only: the primary WhatsApp pill, the featured pricing card, the end-to-end section field, lit terminals, the canvas core and travelling pulses, the carousel progress bar, selection background and the focus ring.
- **Lit Green** (green-hover): the hover state of green pills, one step brighter. Never used at rest.
- **Deep Text Green** (green-ink-light / green-ink-dark): green as ink on the theme ground, for text links, hover states of titles and the final timeline year. In light mode it darkens to stay legible on off-white; in dark mode it equals Circuit Green.
- **Ink on Green** (on-green): the near-black used for every text, icon and terminal sitting on a green field, and for the dark arrow terminal inside the primary pill.

### Neutral
- **Night** (night): the fixed dark surface of the hero, page heroes, closing panel and the dark product card. Dark in both themes.
- **Night Raised** (night-raised): image wells and initials avatars inside Night.
- **Night Ink / Night Muted** (night-ink, night-muted): primary and secondary text on Night.
- **Bone Ground / White Panel** (ground-light, panel-light): light theme page ground and card surface.
- **Carbon Ground / Carbon Panel** (ground-dark, panel-dark): dark theme page ground and card surface; Carbon Panel equals Night.
- **Ink / Muted** (ink-*, muted-*): body text and secondary text per theme. The `line` role is Ink (light) or white (dark), always applied at 10–20% alpha, never at full strength.

### Named Rules
**The Solid Green Rule.** Green is a fill, a node or a word of ink; it is never a glow, gradient, blur halo or colored shadow. If green needs to feel brighter, it becomes a bigger solid field.

**The Night Holds Rule.** Night panels stay dark in both themes. Theme switching changes the ground and the cards around them, never the framed panels that carry the web.

## Typography

**Display Font:** Host Grotesk (with ui-sans-serif, system-ui), self-hosted variable 300–700
**Body Font:** Host Grotesk
**Label/Mono Font:** Geist Mono (with ui-monospace), self-hosted 400–600

**Character:** A light, wide-open grotesk set large and tight against a precise monospaced data voice: the engineer's numbers beside the company's plain-spoken sentences.

### Hierarchy
- **Display** (300, clamp 2.75rem–6rem capped by 11svh, line-height 1, -0.035em): the one h1 per page, in the hero and page heroes, max 11–16ch.
- **Headline** (400, clamp 2rem–3.75rem, 1.02, -0.035em): section h2s via the section heading and the closing panel.
- **Title** (500, 1.25–2.25rem, tight leading, -0.025em): card, service, member and plan names.
- **Lead** (400, clamp 1.0625rem–1.25rem, 1.55): the sentence under every display or headline, muted, 46–60ch.
- **Body** (400, 15–16px, 1.625): descriptions, FAQ answers and legal text at max 62–68ch.
- **Label** (Geist Mono 400–500, 11–12px, 0.08em, uppercase): navigation links, the nav contact pill and carousel hostnames only.
- **Data** (Geist Mono 500, tabular figures, 1.875rem–3.75rem): hero stats, prices, step numbers, years, clause numbers, hostnames and the carousel counter.

### Named Rules
**The Light Display Rule.** Page h1s are weight 300; headlines are 400; nothing above 500 appears anywhere in the system.

**The Mono Is Data Rule.** Geist Mono sets only numbers, hostnames, clause numbers and the nav labels. It never sets sentences, headings or labels above headings.

**The No Eyebrow Rule.** Headings stand alone: a title and its lead, stacked. No kicker, eyebrow or small-caps label sits above a heading.

## Layout

Content sits in a container of max 1360px with gutters of 20px, 32px from 640px and 48px from 1024px, aligned with the content inside the hero frame. Framed panels break the container and run near full-bleed, inset 8px (12px from 640px) from the viewport. Sections are separated by 96px of top space (128px from 640px); the footer follows after the same gap behind a hairline.

The grid is 12 columns from 1024px. Recurring compositions: a 5/7 split with a sticky heading beside a threaded list (services), a 4/8 split with a sticky index (FAQ, legal clauses), and four-across timelines joined by a single horizontal thread at 1024px and up. Project tiles run 2 large then 3-up on a 6-column grid. The hero fills the viewport height minus its inset; on mobile its text stacks at the bottom and the web becomes the background of the whole panel.

## Elevation & Depth

The system is flat. Depth comes from the contrast between Night panels and the theme ground, from hairline borders at 10–20% alpha, and from legibility veils: Night-colored linear or radial gradients that fade the canvas behind text (hero and page heroes left to right on desktop, top to bottom on mobile; closing panel radial). The floating project carousel and the floating nav pill are the only layered elements; they use translucent Night with backdrop blur, and the carousel alone carries a shadow.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 24px 60px -20px rgba(0,0,0,0.7)`): the hero project carousel, floating over the canvas. Not for cards on the ground.

### Named Rules
**The Flat Ground Rule.** Nothing on the theme ground casts a shadow. Cards separate by a hairline border or a solid fill.

## Shapes

Two geometries: the rounded rectangle of the frame and the circle of the logo's circuit terminals. Framed panels and cards use the 28px frame radius with overflow clipped; project image tiles use 20px. Every interactive control (buttons, nav links, icon buttons, chips, avatars, FAQ toggles) is a full pill or circle. Terminal nodes are 12px circles with a 1.5px ring, hollow at rest and filled green when lit. Lines are hairlines at 1px; the canvas draws spokes and scalloped rings at 0.9–1.4px with round caps.

## Components

### Buttons
Confident, round, and always pointing somewhere.
- **Shape:** full pill (9999px).
- **Primary (WhatsApp):** Circuit Green, 56px tall, 24px left / 8px right padding, 15px medium text in Ink on Green, ending in a 40px Ink on Green circle holding a green up-right arrow (the logo terminal).
- **Hover / Focus:** fill steps to Lit Green over 300ms; the arrow terminal rotates 45 degrees with out-expo over 500ms. Focus is a 2px green outline at 3px offset.
- **On a green field:** inverts to an Ink on Green pill with green text, 48px tall.
- **Outline:** 48px pill with a 20% line border; on hover it fills Circuit Green with Ink on Green text.
- **Arrow link:** 15px medium text plus an arrow that advances 4px on hover; underline at 6px offset on hover.

### Cards / Containers
- **Corner Style:** 28px frame radius.
- **Background:** White/Carbon Panel with a 15% line border; the featured plan and the end-to-end section are solid Circuit Green with no border; the lead product card is Night.
- **Shadow Strategy:** none (see Flat Ground Rule).
- **Internal Padding:** 28px, 36px from 640px (40px on product cards).

### Navigation
- **Style:** a floating pill bar fixed inside the top of the hero frame: logo pill on the left, link pill on the right, both 48px tall, translucent white at 4% with an 8% white border and blur over the canvas, turning to 85% Night with heavy blur after 24px of scroll.
- **Links:** Geist Mono 12px uppercase at 0.08em in Night Muted; hover and active go to Night Ink, active adds a 10% white pill.
- **Actions:** a hairline divider, circular icon buttons for the cover letter and theme toggle (system, light, dark), and a green mono "Contacto" pill.
- **Mobile:** a 24px-radius Night sheet with links at 24px medium separated by hairlines, the active link marked by a green dot, and a full-width 56px green WhatsApp pill.

### FAQ rows
Rows separated by hairlines; the question is 18–20px medium, the toggle a 32px circle with a plus that rotates 45 degrees and fills Circuit Green when open.

### Ñandutí canvas (signature)
A canvas drawn behind every Night panel: 32 spokes and 9 rings with alternating straight, outward and inward scallops, circuit extensions bending at 45 degrees into ring terminals, and a green core. It weaves thread by thread over about 2.8 seconds, then green pulses travel from the core along a spoke and light the terminals they reach; threads within 150px of the pointer pull toward it and spring back. Three variants: `hero` (web right of center), `edge` (web emerging from the right edge on page heroes), `quiet` (centered and dimmed at 85% in the closing panel). On desktop, elements marked as text zones push every trace and terminal at least 24px away from the copy. Under reduced motion it renders the finished web statically; it pauses offscreen.

### Project carousel
A 22px-radius translucent Night card with the Float shadow: 16:10 screenshot, project name, mono hostname, round prev/next buttons, a mono `01/08` counter and segmented 2px progress bars filled in green over 4.8 seconds. Pauses on hover and focus.

### Threaded lists and timelines
Services, process steps, partner portraits and the company timeline hang from one hairline thread with a terminal node per item; the first or current item is lit green.

## Do's and Don'ts

### Do:
- **Do** open every page with a Night framed panel (28px radius, 8–12px inset); marketing pages end with exactly one closing panel holding one WhatsApp action, while legal documents end on the document itself.
- **Do** keep Night panels dark in both themes and verify every other surface in light and dark.
- **Do** use Circuit Green as a solid field, a pill fill or a lit node, with Ink on Green on top.
- **Do** set page h1s at weight 300 with -0.035em tracking, and pair every heading with a muted lead.
- **Do** use Geist Mono with tabular figures for numbers, hostnames, years, prices and clause numbers.
- **Do** join related items with a hairline thread and round terminal nodes.
- **Do** keep copy in neutral Latin American Spanish (tú: "Escríbenos", "Cuéntanos") and show only verifiable figures: founding year, number of partners, projects actually listed.

### Don't:
- **Don't** use green as glow, gradient, blur halo or colored shadow.
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** set sentences or headings in Geist Mono.
- **Don't** add shadows to cards on the ground; only the floating carousel casts one.
- **Don't** use voseo ("Contanos", "Tenés") or invented stats, testimonials or client logos.
- **Don't** use weights above 500 or square corners on interactive controls.
