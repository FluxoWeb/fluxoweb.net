import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import Container from "./container";
import PageHero from "./pageHero";

// `tone` cambia el color sobre superficies siempre oscuras (hero) frente al fondo del tema.
export function ContactLinks({ tone = "text-green-ink" }) {
  return (
    <>
      <a href="mailto:fluxo@fluxoweb.net" className={`${tone} underline underline-offset-4`}>
        fluxo@fluxoweb.net
      </a>{" "}
      o por{" "}
      <a href="https://wa.link/18ywdk" target="_blank" rel="noopener noreferrer" className={`${tone} underline underline-offset-4`}>
        WhatsApp
      </a>
    </>
  );
}

// Documento legal (modo lectura): índice fijo de cláusulas y texto a 68ch.
export default function LegalDocument({ title, description, subtitle, updated, intro, sections }) {
  return (
    <>
      <Head>
        <title>{`${title} — Fluxo Web`}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <main>
        <PageHero web={false} back={{ href: "/legal", label: "Legal" }} title={title} lead={subtitle}>
          <p className="text-[14px] text-night-muted">Última actualización: {updated}</p>
        </PageHero>

        <div className="band-light py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <nav className="hidden lg:col-span-4 lg:block" aria-label="Cláusulas">
            <ol className="sticky top-32 space-y-2.5 border-l border-line/15 pl-5">
              {sections.map((s) => (
                <li key={s.numero}>
                  <a href={`#seccion-${s.numero}`} className="flex gap-3 text-[14px] text-muted transition-colors hover:text-ink">
                    <span className="tabular w-5 font-mono text-[12px] leading-[1.6]">{s.numero}</span>
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="lg:col-span-8">
            <p className="max-w-[68ch] text-lead text-muted">{intro}</p>
            <div className="mt-14">
              {sections.map((s) => (
                <section key={s.numero} id={`seccion-${s.numero}`} className="scroll-mt-28 border-t border-line/15 py-10">
                  <h2 className="flex gap-4 text-2xl font-medium tracking-tight">
                    <span className="tabular pt-1.5 font-mono text-[13px] text-muted">{s.numero}</span>
                    {s.titulo}
                  </h2>
                  <div className="mt-5 max-w-[68ch] space-y-5 text-[16px] leading-relaxed text-muted sm:pl-9">
                    {s.texto && <p>{s.texto}</p>}
                    {s.contenido?.map((item) => (
                      <div key={item.subtitulo}>
                        <h3 className="font-medium text-ink">{item.subtitulo}</h3>
                        <p className="mt-1.5">{item.texto}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
