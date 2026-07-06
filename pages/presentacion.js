import Head from "next/head";
import Link from "next/link";

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
            background: #94a3b8;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          }

          /* ── Toolbar ── */
          .toolbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 999;
            height: 52px; background: #0f172a; border-bottom: 1px solid #1e293b;
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 24px;
          }
          .tb-left { display: flex; align-items: center; gap: 12px; }
          .tb-back {
            display: inline-flex; align-items: center; gap: 6px;
            color: #64748b; font-size: 13px; text-decoration: none; transition: color .15s;
          }
          .tb-back:hover { color: #e2e8f0; }
          .tb-sep { color: #334155; font-size: 13px; }
          .tb-label { font-size: 12px; color: #475569; }
          .btn-dl {
            height: 32px; padding: 0 16px; border: none; border-radius: 6px;
            background: #4338ca; color: #fff; font-size: 12px; font-weight: 600;
            font-family: inherit; cursor: pointer;
            display: inline-flex; align-items: center; gap: 6px; transition: background .15s;
          }
          .btn-dl:hover { background: #3730a3; }

          /* ── A4 Sheet ── */
          .a4 {
            width: 210mm;
            height: 297mm;
            background: #fff;
            margin: 68px auto 40px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 20px 60px -10px rgba(0,0,0,.35);
            overflow: hidden;
            font-size: 10pt;
            color: #1e293b;
            display: flex;
            flex-direction: column;
          }

          /* ── Header ── */
          .hdr {
            background: #3730a3;
            padding: 20px 28px;
            display: flex; align-items: center; justify-content: space-between;
            position: relative; overflow: hidden; flex-shrink: 0;
          }
          .hdr::before {
            content: ''; position: absolute; right: -40px; top: -40px;
            width: 150px; height: 150px; border-radius: 50%;
            background: rgba(255,255,255,0.06);
          }
          .hdr::after {
            content: ''; position: absolute; right: 80px; bottom: -70px;
            width: 120px; height: 120px; border-radius: 50%;
            background: rgba(255,255,255,0.04);
          }
          .hdr-brand { display: flex; align-items: center; gap: 12px; z-index: 1; position: relative; }
          .logo-wrap {
            width: 40px; height: 40px; flex-shrink: 0;
            background: rgba(255,255,255,0.12);
            border: 1.5px solid rgba(255,255,255,0.22);
            border-radius: 9px;
            display: flex; align-items: center; justify-content: center;
            overflow: hidden;
          }
          .logo-wrap img { width: 26px; height: 26px; object-fit: contain; }
          .hdr-brand h1 { font-size: 14pt; font-weight: 800; color: #fff; letter-spacing: -.3px; line-height: 1.1; }
          .hdr-brand p { font-size: 6.5pt; color: rgba(255,255,255,.6); margin-top: 3px; letter-spacing: .8px; text-transform: uppercase; }
          .hdr-stats { display: flex; align-items: center; z-index: 1; position: relative; }
          .hdr-stat { text-align: center; padding: 0 16px; }
          .hdr-stat + .hdr-stat { border-left: 1px solid rgba(255,255,255,.18); }
          .hdr-stat .v { display: block; font-size: 18pt; font-weight: 900; color: #fff; line-height: 1; }
          .hdr-stat .l { display: block; margin-top: 2px; font-size: 6pt; color: rgba(255,255,255,.55); text-transform: uppercase; letter-spacing: .8px; }

          /* ── Body ── */
          .body { display: grid; grid-template-columns: 37% 63%; flex: 1; overflow: hidden; }

          /* ── Sidebar ── */
          .side {
            background: #312e81;
            padding: 20px 18px;
            display: flex; flex-direction: column; gap: 18px; overflow: hidden;
          }
          .side-sec h3 {
            font-size: 6pt; font-weight: 800; letter-spacing: 1.3px;
            text-transform: uppercase; color: rgba(165,180,252,.75);
            padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,.1);
            margin-bottom: 9px;
          }
          .citem { display: flex; align-items: flex-start; gap: 7px; margin-bottom: 6px; }
          .citem svg { flex-shrink: 0; margin-top: 1px; color: rgba(165,180,252,.65); }
          .citem-text { font-size: 7.5pt; color: rgba(255,255,255,.8); line-height: 1.45; }
          .citem-text a { color: rgba(165,180,252,.9); text-decoration: none; }
          .avail {
            display: inline-flex; align-items: center; gap: 6px;
            background: rgba(99,102,241,.18); border: 1px solid rgba(99,102,241,.35);
            border-radius: 20px; padding: 4px 9px;
            font-size: 6.5pt; color: rgba(165,180,252,.9); font-weight: 600; margin-top: 5px;
          }
          .green-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; flex-shrink: 0; }
          .why-item { display: flex; align-items: flex-start; gap: 7px; margin-bottom: 7px; }
          .why-chk {
            width: 16px; height: 16px; flex-shrink: 0;
            background: rgba(99,102,241,.3); border: 1px solid rgba(99,102,241,.45);
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            margin-top: .5px;
          }
          .why-chk span { color: #a5b4fc; font-size: 7px; font-weight: 800; line-height: 1; }
          .why-item p { font-size: 7.5pt; color: rgba(255,255,255,.76); line-height: 1.45; }
          .why-item strong { color: rgba(255,255,255,.95); font-weight: 600; }

          /* ── Main ── */
          .main { padding: 20px 24px; display: flex; flex-direction: column; gap: 16px; overflow: hidden; }
          .sec-ttl {
            font-size: 6pt; font-weight: 800; letter-spacing: 1.3px;
            text-transform: uppercase; color: #4338ca;
            display: flex; align-items: center; gap: 9px; margin-bottom: 8px;
          }
          .sec-ttl::after { content: ''; flex: 1; height: 1px; background: #e0e7ff; }
          .intro-p { font-size: 8pt; color: #475569; line-height: 1.72; }
          .intro-p + .intro-p { margin-top: 6px; }
          .intro-p strong { color: #1e293b; font-weight: 700; }
          .srv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
          .srv-card {
            padding: 8px 10px; background: #f8fafc;
            border: 1px solid #e2e8f0; border-left: 3px solid #6366f1;
            border-radius: 0 5px 5px 0;
          }
          .srv-card h4 { font-size: 7.5pt; font-weight: 700; color: #1e293b; margin-bottom: 2px; }
          .srv-card p { font-size: 6.5pt; color: #64748b; line-height: 1.4; }
          .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
          .team-card {
            padding: 9px 11px; background: #f8fafc;
            border: 1px solid #e2e8f0; border-radius: 5px;
          }
          .team-card h4 { font-size: 7.5pt; font-weight: 700; color: #1e293b; margin-bottom: 1px; }
          .team-card .tc-role { font-size: 6.5pt; color: #4338ca; font-weight: 600; }
          .team-card .tc-loc { font-size: 6pt; color: #94a3b8; display: block; margin-top: 1px; }
          .team-card .tc-desc { font-size: 6.5pt; color: #64748b; margin-top: 4px; line-height: 1.45; }

          /* ── Footer ── */
          .ftr {
            background: #1e1b4b;
            padding: 11px 28px;
            display: flex; align-items: center; justify-content: space-between;
            flex-shrink: 0;
          }
          .ftr-l { font-size: 7pt; color: rgba(255,255,255,.5); }
          .ftr-l strong { color: rgba(255,255,255,.82); }
          .ftr-r { display: flex; gap: 14px; }
          .ftr-r a { font-size: 7pt; color: rgba(165,180,252,.8); text-decoration: none; }

          /* ── PRINT ── */
          @media print {
            /* 1. Force background colors — must come before everything */
            *, *::before, *::after {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            /* 2. Visibility trick — oculta TODO (toolbar, popup, widgets globales)
                  sin sacar elementos del flujo, para que el body mantenga altura */
            body * { visibility: hidden !important; }
            .a4, .a4 * { visibility: visible !important; }
            /* 3. Reset estilos de pantalla — SIN position: fixed/absolute
                  (fixed duplica el sheet; absolute puede salir del flujo y cortar contenido) */
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              background: white !important;
            }
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
            </svg>
            Inicio
          </Link>
          <span className="tb-sep">/</span>
          <span className="tb-label">Carta de presentación — A4</span>
        </div>
        <button className="btn-dl" onClick={handlePrint}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Descargar PDF
        </button>
      </div>

      {/* A4 Sheet */}
      <div className="a4">

        {/* Header */}
        <header className="hdr">
          <div className="hdr-brand">
            <div className="logo-wrap">
              <img src="/img/Brain.png" alt="Fluxo Web" />
            </div>
            <div>
              <h1>Fluxo Web Group E.A.S.</h1>
              <p>Desarrollo de software empresarial · Paraguay</p>
            </div>
          </div>
          <div className="hdr-stats">
            <div className="hdr-stat"><span className="v">2019</span><span className="l">Fundación</span></div>
            <div className="hdr-stat"><span className="v">50+</span><span className="l">Proyectos</span></div>
            <div className="hdr-stat"><span className="v">4</span><span className="l">Especialistas</span></div>
          </div>
        </header>

        {/* Body */}
        <div className="body">

          {/* Sidebar */}
          <aside className="side">
            <div className="side-sec">
              <h3>La empresa</h3>
              {[
                { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", t: "Ciudad del Este, Paraguay" },
                { d: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", t: "fluxoweb.net", href: "https://fluxoweb.net" },
                { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", t: "fluxo@fluxoweb.net", href: "mailto:fluxo@fluxoweb.net" },
                { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.7 19.79 19.79 0 0 1 1.61 5.12 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6.07 6.07l1.06-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", t: "wa.link/18ywdk", href: "https://wa.link/18ywdk" },
              ].map((item, i) => (
                <div className="citem" key={i}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.d} />
                  </svg>
                  <span className="citem-text">
                    {item.href ? <a href={item.href}>{item.t}</a> : item.t}
                  </span>
                </div>
              ))}
              <div className="avail">
                <span className="green-dot" />
                Disponibles para nuevos proyectos
              </div>
            </div>

            <div className="side-sec">
              <h3>Por qué elegirnos</h3>
              {[
                { t: "Equipo técnico propio.", d: "No tercerizamos. Cada proyecto es desarrollado internamente." },
                { t: "Infraestructura propia.", d: "Servidores dedicados y cloud hosting administrado por nosotros." },
                { t: "Experiencia en producción.", d: "Sistemas reales funcionando en empresas de la región desde 2019." },
                { t: "Soporte post-entrega.", d: "Acompañamos cada proyecto con asistencia técnica continua." },
                { t: "Soluciones a medida.", d: "Sin plantillas genéricas: cada sistema se construye según tu negocio." },
              ].map((item) => (
                <div className="why-item" key={item.t}>
                  <div className="why-chk"><span>✓</span></div>
                  <p><strong>{item.t}</strong> {item.d}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <main className="main">

            <section>
              <div className="sec-ttl">Quiénes somos</div>
              <p className="intro-p">
                <strong>Fluxo Web Group E.A.S.</strong> es una empresa paraguaya especializada en desarrollo de software empresarial, fundada en 2019 en Ciudad del Este. Comenzamos como servicio técnico de hardware y evolucionamos hacia el desarrollo de sistemas a medida, implementación de ERP, CRM y soluciones de infraestructura cloud.
              </p>
              <p className="intro-p">
                Hoy operamos con <strong>infraestructura de servidores propia</strong>, brindando desde sitios web institucionales hasta sistemas complejos de gestión empresarial. Nuestro equipo combina experiencia técnica sólida con una visión orientada a resultados reales para cada cliente.
              </p>
            </section>

            <section>
              <div className="sec-ttl">Nuestros servicios</div>
              <div className="srv-grid">
                {[
                  { t: "Desarrollo Web a Medida", d: "Aplicaciones y sitios construidos según los procesos de tu empresa." },
                  { t: "ERPNext — Sistema ERP", d: "Contabilidad, inventario, RRHH, manufactura y más." },
                  { t: "FluxoCRM", d: "Sistema propio de gestión de clientes y pipeline comercial." },
                  { t: "Hosting & Cloud", d: "Servidores propios con despliegue, backups y soporte administrado." },
                  { t: "Automatización con IA", d: "Integración de inteligencia artificial en procesos de negocio." },
                  { t: "Soporte Técnico Continuo", d: "Asistencia y actualizaciones incluidas en todos los planes." },
                ].map((s) => (
                  <div className="srv-card" key={s.t}>
                    <h4>{s.t}</h4>
                    <p>{s.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="sec-ttl">Nuestro equipo</div>
              <div className="team-grid">
                {[
                  {
                    n: "Oscar G. Ramírez González",
                    r: "Fundador & CEO",
                    l: "Ciudad del Este, Paraguay",
                    d: "Fundador de Fluxo Web y líder del equipo de desarrollo. Autodidacta con visión técnica y orientación al cliente, construyó la empresa desde cero.",
                  },
                  {
                    n: "Alberto D. Servin Meira",
                    r: "Co-fundador · Ing. en Informática",
                    l: "Minga Guazú, Paraguay",
                    d: "Ingeniero en Informática especializado en arquitectura de sistemas y desarrollo de software escalable para entornos empresariales.",
                  },
                  {
                    n: "Wildo Y. Valenzuela Panderi",
                    r: "Co-fundador · Gerente Administrativo",
                    l: "Presidente Franco, Paraguay",
                    d: "Responsable de la gestión operativa y administrativa. Garantiza que cada proyecto se ejecute con eficiencia y en tiempo.",
                  },
                  {
                    n: "Armando M. Diarte Velázquez",
                    r: "Socio · Desarrollador Full Stack",
                    l: "Minga Guazú, Paraguay",
                    d: "Desarrollador Full Stack con foco en sistemas empresariales: .NET, PostgreSQL, React. Especializado en integrar lógica de negocio con interfaces funcionales.",
                  },
                ].map((m) => (
                  <div className="team-card" key={m.n}>
                    <h4>{m.n}</h4>
                    <p className="tc-role">{m.r}</p>
                    <span className="tc-loc">{m.l}</span>
                    <p className="tc-desc">{m.d}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>

        {/* Footer */}
        <footer className="ftr">
          <div className="ftr-l">
            <strong>Fluxo Web Group E.A.S.</strong> — Ciudad del Este, Paraguay · Fundada en 2019
          </div>
          <div className="ftr-r">
            <a href="https://fluxoweb.net">fluxoweb.net</a>
            <a href="mailto:fluxo@fluxoweb.net">fluxo@fluxoweb.net</a>
            <a href="https://wa.link/18ywdk">WhatsApp</a>
          </div>
        </footer>

      </div>
    </>
  );
}
