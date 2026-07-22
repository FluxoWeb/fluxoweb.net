import Head from "next/head";
import Link from "next/link";

const SERVICIOS = [
  { n: "01", t: "Desarrollo Web a Medida", d: "Aplicaciones y sitios construidos según los procesos de tu empresa." },
  { n: "02", t: "ERPNext — Sistema ERP", d: "Gestión integral: contabilidad, inventario, RRHH y manufactura." },
  { n: "03", t: "FluxoCRM", d: "Sistema propio de gestión de clientes y pipeline comercial." },
  { n: "04", t: "Hosting & Cloud", d: "Servidores propios con despliegue, backups y soporte administrado." },
  { n: "05", t: "Automatización con IA", d: "Integración de inteligencia artificial en procesos de negocio." },
  { n: "06", t: "Soporte Técnico", d: "Asistencia, actualizaciones y mejoras incluidas en todos los planes." },
];

const EQUIPO = [
  { i: "OG", c: "#4338ca", n: "Oscar G. Ramírez González", r: "Fundador & CEO", l: "Ciudad del Este", d: "Fundador de Fluxo Web. Autodidacta con visión técnica y liderazgo, construyó la empresa desde cero en 2019." },
  { i: "AS", c: "#059669", n: "Alberto D. Servin Meira", r: "Co-fundador · Ing. en Informática", l: "Minga Guazú", d: "Ingeniero especializado en arquitectura de sistemas y desarrollo de software a escala empresarial." },
  { i: "WY", c: "#d97706", n: "Wildo Y. Valenzuela Panderi", r: "Co-fundador · Gerente Administrativo", l: "Presidente Franco", d: "Responsable de la gestión operativa y administrativa. Garantiza la eficiencia en todos los proyectos." },
  { i: "AD", c: "#0891b2", n: "Armando M. Diarte Velázquez", r: "Socio · Desarrollador Full Stack", l: "Minga Guazú", d: "Full Stack Developer con foco en sistemas empresariales: .NET, PostgreSQL y React en producción." },
];

export default function Presentacion() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <>
      <Head>
        <title>Carta de Presentación — Fluxo Web Group E.A.S.</title>
        <meta name="robots" content="noindex" />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            background: #7c83a0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          }

          /* ── Toolbar ── */
          .toolbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 999;
            height: 50px; background: #09090b; border-bottom: 1px solid #18181b;
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 24px;
          }
          .tb-left { display: flex; align-items: center; gap: 10px; }
          .tb-back { display: inline-flex; align-items: center; gap: 5px; color: #52525b; font-size: 13px; text-decoration: none; transition: color .15s; }
          .tb-back:hover { color: #d4d4d8; }
          .tb-sep { color: #27272a; font-size: 13px; }
          .tb-label { font-size: 12px; color: #3f3f46; }
          .btn-dl {
            height: 30px; padding: 0 14px; border: none; border-radius: 5px;
            background: #4338ca; color: #fff; font-size: 12px; font-weight: 600;
            font-family: inherit; cursor: pointer;
            display: inline-flex; align-items: center; gap: 5px; transition: background .15s;
          }
          .btn-dl:hover { background: #3730a3; }

          /* ── A4 ── */
          .a4 {
            width: 210mm;
            height: 297mm;
            margin: 66px auto 40px;
            box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 8px 16px -4px rgba(0,0,0,.2), 0 32px 64px -16px rgba(0,0,0,.4);
            overflow: hidden;
            display: flex;
            flex-direction: row;
          }

          /* ══════════════════ SIDEBAR ══════════════════ */
          .side {
            width: 42%;
            flex-shrink: 0;
            background: linear-gradient(170deg, #1e1b4b 0%, #13113a 100%);
            padding: 30px 24px;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
          }
          /* Decorative circles */
          .side::before {
            content: ''; position: absolute;
            top: -70px; right: -70px;
            width: 220px; height: 220px; border-radius: 50%;
            background: rgba(99,102,241,0.12);
            pointer-events: none;
          }
          .side::after {
            content: ''; position: absolute;
            bottom: -50px; left: -50px;
            width: 170px; height: 170px; border-radius: 50%;
            background: rgba(99,102,241,0.07);
            pointer-events: none;
          }
          .side-ring {
            position: absolute; top: 110px; right: -35px;
            width: 110px; height: 110px; border-radius: 50%;
            border: 1px solid rgba(99,102,241,0.18);
            pointer-events: none;
          }

          /* Logo area */
          .logo-area { display: flex; align-items: center; gap: 11px; position: relative; z-index: 1; }
          .logo-box {
            width: 38px; height: 38px; flex-shrink: 0;
            background: rgba(255,255,255,0.1);
            border: 1.5px solid rgba(255,255,255,0.18);
            border-radius: 9px;
            display: flex; align-items: center; justify-content: center;
            overflow: hidden;
          }
          .logo-box img { width: 24px; height: 24px; object-fit: contain; }
          .brand h1 {
            font-size: 11.5pt; font-weight: 800; color: #fff;
            letter-spacing: -.3px; line-height: 1.15;
          }
          .brand p {
            font-size: 6pt; color: rgba(255,255,255,.45);
            letter-spacing: 1px; text-transform: uppercase; margin-top: 2px;
          }

          /* Divider */
          .s-div {
            height: 1px; background: rgba(255,255,255,0.09);
            margin: 18px 0; position: relative; z-index: 1;
          }

          /* Stats */
          .stats { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1; }
          .stat {}
          .stat .sv {
            display: block; font-size: 30pt; font-weight: 900; color: #fff;
            line-height: 1; letter-spacing: -1px;
          }
          .stat .sl {
            display: block; font-size: 6pt; color: rgba(165,180,252,.6);
            text-transform: uppercase; letter-spacing: 1.2px; margin-top: 3px;
          }

          /* Contact */
          .side-sec-label {
            font-size: 6pt; font-weight: 800; letter-spacing: 1.5px;
            text-transform: uppercase; color: rgba(165,180,252,.55);
            margin-bottom: 9px; position: relative; z-index: 1;
          }
          .citem {
            display: flex; align-items: flex-start; gap: 7px;
            margin-bottom: 6px; position: relative; z-index: 1;
          }
          .citem svg { flex-shrink: 0; margin-top: 1px; color: rgba(99,102,241,.8); }
          .citem-text { font-size: 7.5pt; color: rgba(255,255,255,.75); line-height: 1.4; }
          .citem-text a { color: rgba(165,180,252,.85); text-decoration: none; }

          /* Avail badge */
          .avail {
            display: inline-flex; align-items: center; gap: 5px;
            margin-top: 10px;
            background: rgba(99,102,241,.15);
            border: 1px solid rgba(99,102,241,.3);
            border-radius: 20px; padding: 4px 10px;
            font-size: 6.5pt; color: rgba(165,180,252,.85); font-weight: 600;
            position: relative; z-index: 1;
          }
          .g-dot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; flex-shrink: 0; }

          /* Why */
          .why-list { display: flex; flex-direction: column; gap: 7px; position: relative; z-index: 1; }
          .why-item { display: flex; align-items: flex-start; gap: 7px; }
          .why-num {
            flex-shrink: 0; width: 16px; height: 16px;
            background: rgba(99,102,241,.25); border: 1px solid rgba(99,102,241,.4);
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            margin-top: .5px;
          }
          .why-num span { font-size: 7px; font-weight: 800; color: #a5b4fc; line-height: 1; }
          .why-item p { font-size: 7.5pt; color: rgba(255,255,255,.7); line-height: 1.45; }
          .why-item strong { color: rgba(255,255,255,.92); font-weight: 700; }

          /* ══════════════════ CONTENT ══════════════════ */
          .content {
            flex: 1;
            background: #fff;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          /* Accent top bar */
          .content-top {
            background: #f8f7ff;
            border-bottom: 1px solid #ede9fe;
            padding: 9px 24px;
            display: flex; align-items: center; justify-content: space-between;
            flex-shrink: 0;
          }
          .content-top-label { font-size: 6pt; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #4338ca; }
          .content-top-co { font-size: 6pt; color: #a5b4fc; letter-spacing: .5px; }

          /* Main */
          .content-main { flex: 1; padding: 18px 24px 14px; display: flex; flex-direction: column; gap: 16px; overflow: hidden; }

          /* Section title */
          .sec-ttl {
            display: flex; align-items: center; gap: 10px;
            font-size: 6pt; font-weight: 800; letter-spacing: 1.4px;
            text-transform: uppercase; color: #4338ca; margin-bottom: 9px;
          }
          .sec-ttl::after { content: ''; flex: 1; height: 1px; background: #ede9fe; }

          /* Intro */
          .intro-p { font-size: 8pt; color: #4b5563; line-height: 1.72; }
          .intro-p + .intro-p { margin-top: 6px; }
          .intro-p strong { color: #111827; font-weight: 700; }

          /* Services */
          .srv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
          .srv-card {
            padding: 8px 10px 8px 12px;
            background: #fafafa;
            border: 1px solid #f0f0f0;
            border-left: 2.5px solid #6366f1;
            border-radius: 0 5px 5px 0;
          }
          .srv-num { font-size: 6pt; font-weight: 900; color: #c7d2fe; letter-spacing: .5px; display: block; margin-bottom: 2px; }
          .srv-name { font-size: 7.5pt; font-weight: 700; color: #1e1b4b; display: block; margin-bottom: 2px; }
          .srv-desc { font-size: 6.5pt; color: #6b7280; line-height: 1.4; }

          /* Team */
          .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
          .team-card {
            padding: 9px 11px;
            border: 1px solid #f0f0f0;
            border-radius: 6px;
            background: #fcfcfc;
          }
          .team-top { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
          .mono {
            width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
            display: flex; align-items: center; justify-content: center;
            font-size: 8pt; font-weight: 800; color: #fff; letter-spacing: -.5px;
          }
          .team-info h4 { font-size: 7.5pt; font-weight: 700; color: #111827; line-height: 1.2; }
          .team-info p { font-size: 6.5pt; color: #4338ca; font-weight: 600; margin-top: 1px; }
          .team-loc { font-size: 6pt; color: #9ca3af; display: block; margin-bottom: 4px; }
          .team-desc { font-size: 6.5pt; color: #6b7280; line-height: 1.45; }

          /* Footer */
          .content-footer {
            background: #1e1b4b;
            padding: 10px 24px;
            display: flex; align-items: center; justify-content: space-between;
            flex-shrink: 0;
          }
          .ftr-l { font-size: 7pt; color: rgba(255,255,255,.45); }
          .ftr-l strong { color: rgba(255,255,255,.75); }
          .ftr-r { display: flex; gap: 14px; }
          .ftr-r a { font-size: 7pt; color: rgba(165,180,252,.75); text-decoration: none; }

          /* ── PRINT ── */
          @media print {
            *, *::before, *::after {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            body * { visibility: hidden !important; }
            .a4, .a4 * { visibility: visible !important; }
            html, body { margin: 0 !important; padding: 0 !important; background: white !important; }
            .a4 {
              margin: 0 !important;
              box-shadow: none !important;
              width: 210mm !important;
              height: 297mm !important;
              overflow: hidden !important;
            }
            @page { size: A4 portrait; margin: 0; }
          }
        `}</style>
      </Head>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="tb-left">
          <Link href="/" className="tb-back">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
            </svg>
            Inicio
          </Link>
          <span className="tb-sep">/</span>
          <span className="tb-label">Carta de presentación — A4</span>
        </div>
        <button className="btn-dl" onClick={handlePrint}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Descargar PDF
        </button>
      </div>

      {/* ── A4 Sheet ── */}
      <div className="a4">

        {/* ── SIDEBAR ── */}
        <aside className="side">
          <div className="side-ring" />

          {/* Brand */}
          <div className="logo-area">
            <div className="logo-box">
              <img src="/img/Brain.png" alt="Fluxo Web" />
            </div>
            <div className="brand">
              <h1>Fluxo Web<br />Group E.A.S.</h1>
              <p>Paraguay · Est. 2019</p>
            </div>
          </div>

          <div className="s-div" />

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <span className="sv">2019</span>
              <span className="sl">Año de fundación</span>
            </div>
            <div className="stat">
              <span className="sv">50+</span>
              <span className="sl">Proyectos entregados</span>
            </div>
            <div className="stat">
              <span className="sv">4</span>
              <span className="sl">Especialistas en el equipo</span>
            </div>
          </div>

          <div className="s-div" />

          {/* Contact */}
          <div className="side-sec-label">Contacto</div>
          {[
            { path: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", t: "Ciudad del Este, Paraguay" },
            { path: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", t: "fluxoweb.net", href: "https://fluxoweb.net" },
            { path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", t: "fluxo@fluxoweb.net", href: "mailto:fluxo@fluxoweb.net" },
            { path: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.7 19.79 19.79 0 0 1 1.61 5.12 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6.07 6.07l1.06-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", t: "wa.link/18ywdk", href: "https://wa.link/18ywdk" },
          ].map((item, i) => (
            <div className="citem" key={i}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.path} />
              </svg>
              <span className="citem-text">
                {item.href ? <a href={item.href}>{item.t}</a> : item.t}
              </span>
            </div>
          ))}
          <div className="avail"><span className="g-dot" />Disponibles para nuevos proyectos</div>

          <div className="s-div" />

          {/* Why */}
          <div className="side-sec-label">Por qué elegirnos</div>
          <div className="why-list">
            {[
              { t: "Equipo técnico propio.", d: "No tercerizamos. Cada proyecto es desarrollado internamente." },
              { t: "Infraestructura propia.", d: "Servidores dedicados y cloud hosting administrado por nosotros." },
              { t: "Experiencia en producción.", d: "Sistemas reales en empresas de la región desde 2019." },
              { t: "Soporte post-entrega.", d: "Asistencia técnica continua incluida en todos los proyectos." },
              { t: "Soluciones a medida.", d: "Cada sistema se construye según las necesidades reales del negocio." },
            ].map((item, i) => (
              <div className="why-item" key={i}>
                <div className="why-num"><span>✓</span></div>
                <p><strong>{item.t}</strong> {item.d}</p>
              </div>
            ))}
          </div>
        </aside>

        {/* ── CONTENT ── */}
        <div className="content">

          {/* Top accent bar */}
          <div className="content-top">
            <span className="content-top-label">Carta de Presentación</span>
            <span className="content-top-co">Fluxo Web Group E.A.S.</span>
          </div>

          <div className="content-main">

            {/* Quiénes somos */}
            <section>
              <div className="sec-ttl">Quiénes somos</div>
              <p className="intro-p">
                <strong>Fluxo Web Group E.A.S.</strong> es una empresa paraguaya especializada en desarrollo de software empresarial, fundada en 2019 en Ciudad del Este. Comenzamos como servicio técnico de hardware y evolucionamos hacia el desarrollo de sistemas a medida, implementación de ERP, CRM y soluciones cloud.
              </p>
              <p className="intro-p">
                Hoy operamos con <strong>infraestructura de servidores propia</strong>, brindando desde sitios web institucionales hasta sistemas de gestión empresarial complejos. Nuestro equipo combina sólida experiencia técnica con un enfoque orientado a resultados reales.
              </p>
            </section>

            {/* Servicios */}
            <section>
              <div className="sec-ttl">Nuestros servicios</div>
              <div className="srv-grid">
                {SERVICIOS.map((s) => (
                  <div className="srv-card" key={s.n}>
                    <span className="srv-num">{s.n}</span>
                    <span className="srv-name">{s.t}</span>
                    <span className="srv-desc">{s.d}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Equipo */}
            <section>
              <div className="sec-ttl">Nuestro equipo</div>
              <div className="team-grid">
                {EQUIPO.map((m) => (
                  <div className="team-card" key={m.i}>
                    <div className="team-top">
                      <div className="mono" style={{ background: m.c }}>{m.i}</div>
                      <div className="team-info">
                        <h4>{m.n}</h4>
                        <p>{m.r}</p>
                      </div>
                    </div>
                    <span className="team-loc">{m.l}, Paraguay</span>
                    <p className="team-desc">{m.d}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Footer */}
          <footer className="content-footer">
            <div className="ftr-l">
              <strong>Fluxo Web Group E.A.S.</strong> — Ciudad del Este, Paraguay · 2019
            </div>
            <div className="ftr-r">
              <a href="https://fluxoweb.net">fluxoweb.net</a>
              <a href="mailto:fluxo@fluxoweb.net">fluxo@fluxoweb.net</a>
              <a href="https://wa.link/18ywdk">WhatsApp</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
