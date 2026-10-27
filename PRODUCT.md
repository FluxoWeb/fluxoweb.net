# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and managers of small and medium businesses (PyMEs) in Paraguay and the wider region (Argentina, Brazil, Latin America). They arrive with an operational problem — manual processes, scattered spreadsheets, an outdated system, no web presence — and are evaluating whether Fluxo can build and run the software that fixes it. They are not technical buyers; they judge on trust, proof and how easy it is to talk to someone.

**Commercial focus (confirmed by the team):** attract owners who do not know what they want. Fluxo turns their needs, problems and ideas into solutions, and sells the diagnosis and the outcome — not hours, specs or a price comparison — so clients accept Fluxo's conditions and prices. The site must read as written for a business owner, never for a developer: no code-styled type, no technical jargon on first contact, no commodity specs (vCPU, RAM) on the home or in the main navigation. Strategic source: `docs/Arquitetura_de_Imperio_Fluxo_Web.docx` (campaign "Empresas que Piensan"; entries "Tengo un problema" / "Tengo una idea").

## Product Purpose

Marketing site for Fluxo Web Group E.A.S., a software company from Ciudad del Este, Paraguay (founded 2019). It presents services (custom software, web, mobile apps, applied AI, cloud hosting), own products (FluxoCRM, Zap Pulse, Nova, VentaFlow, Masé, Esmalté, Ogady), live systems and the founding team. Success = a qualified visitor starts a WhatsApp conversation.

## Positioning

One provider end to end, run by its owners:
- **Own infrastructure** — Fluxo builds and also hosts on its own servers; the client has a single provider from development to production.
- **Own products** — FluxoCRM, Zap Pulse, Nova, VentaFlow, Masé, Esmalté and Ogady, already used by clients, give a proven base instead of starting from zero.
- **Applied AI** — AI integrated into real business systems (Quiro AI, Millonai as proof).
- **Direct access to the partners** — clients talk to the engineers who own the company, not to salespeople.

## Operating Context

- Primary conversion: WhatsApp (`https://wa.link/18ywdk`), entered through two intents — "Tengo una idea" and "Quiero resolver un problema" — that open the same chat. Chatwoot live chat is secondary and loads globally. No contact form or CRM integration exists yet (the old email endpoint was removed as insecure); the team declined prefilled WhatsApp messages for now.
- `/presentacion` is a printable A4 cover letter sent to prospects.
- Each partner has a portfolio page (`/empresa/[slug]`) used as personal proof of expertise.

## Capabilities and Constraints

- Services: custom software, web development, mobile apps (iOS/Android), AI integrations (chatbots, automation, LLMs), cloud hosting plans.
- Own products: FluxoCRM, Zap Pulse, Nova, VentaFlow, Masé, Esmalté, Ogady. Also implements ERPNext (Frappe Technologies).
- Language: Paraguayan Spanish **with voseo** ("Vos conocés tu negocio", "Contanos"), confirmed by the team and required by `desing_2.md`. `lang="es-PY"`. No English version planned.
- Contact is WhatsApp-first; there is no contact form or booking tool.

## Brand Commitments

- Name: Fluxo Web (legal: Fluxo Web Group E.A.S.).
- Logo: line-art brain/cloud with circuit traces (`public/img/Brain.svg`, `public/img/Brain.png`).
- Brand colors stated by the user: **black, white and green** are Fluxo's identity. The cream palette proposed in `desing_2.md` was explicitly rejected; everything else in that spec (structure, copy, sections) was adopted.
- Promise (from `desing_2.md`): "Vos conocés tu negocio. Juntos construimos lo que sigue." Movement: "Empresas que Piensan" — "Tu negocio sabe más de lo que imaginás. Hacé que su inteligencia trabaje para vos."
- "Empresas que Piensan" is an initiative not yet launched: its CTA ("Conocé la iniciativa") opens WhatsApp; never present meetings, member counts or programs as existing.

## Evidence on Hand

- Founded 2019 in Ciudad del Este; 4 partners (data in `data/members/`).
- Live systems, single source in `data/projects.js`: Quiro, MillonAI, Redfin, Zap Pulse, Ogady, Nova, Pro-Aqua, VentaFlow, BrunoInfo Sorteos, Masé, Esmalté.
- **Own products already used by clients (confirmed by the user):** Zap Pulse (AI sales assistant for WhatsApp, zap-pulse.fluxoweb.app), Nova, VentaFlow, Masé, Esmalté and Ogady — flagged `own: true` in `data/projects.js`. Plus FluxoCRM (own, `/productos/fluxocrm`). Quiro, MillonAI, BrunoInfo Sorteos and Redfin (business financing platform, redfin.com.py) were developed by Fluxo and are owned by their clients; Fluxo remains associated as technology partner (`partner: true`, label "Socio tecnológico"). Pro-Aqua is a client's own e-commerce built by Fluxo, no partnership (`client: true`, label "Cliente").
- Company timeline in `pages/empresa/index.js`.
- **Absent — do not fabricate:** testimonials, client logos, ratings, project counts ("50+"), 24/7 support claims, uptime SLAs. Only verifiable numbers may appear (founding year, team size, number of projects actually shown).

## Product Principles

1. Proof over promises: every claim points to something real (a live project, a person, a date).
2. One conversation away: WhatsApp is always reachable within one action.
3. Show the people: the partners are the differentiator, not a footnote.
4. End to end: present build + host + support as one continuous offer.
5. Problem before technology: every page leads with the client's situation; services are described by the outcome they produce.
6. The conversation is the offer: every CTA starts a conversation about the client's business ("Conversemos sobre tu negocio", the two intents), never a quote request.
7. No published prices: plans (hosting, FluxoCRM) show what each level includes and end in "Pedir propuesta"; the investment is defined after understanding the client's operation (team decision). Never reintroduce price figures or popularity claims such as "Más elegido".
