import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import Members, { pickMember } from "../../components/members";
import { SectionHeading } from "../../components/ui";
import { getAllMembers } from "../../data/members";

const values = [
  { title: "Innovación tecnológica", text: "Soluciones que aprovechan las tecnologías actuales para dar ventaja competitiva." },
  { title: "Experiencia del usuario", text: "Experiencias digitales intuitivas que las personas usan con gusto." },
  { title: "Socios de confianza", text: "Trabajamos cerca de cada cliente, entendiendo sus objetivos y desafíos." },
  { title: "Calidad y eficiencia", text: "Excelencia en cada etapa, desde el diseño hasta el soporte continuo." },
  { title: "Transformación digital", text: "Acompañamos a las empresas en un entorno cada vez más digital." },
  { title: "Aprendizaje continuo", text: "Formación constante para mantenernos al día con la tecnología." },
];

const milestones = [
  {
    year: "2019",
    title: "Los inicios",
    text: "Oscar Gabriel Ramírez González funda Fluxo Electronics en Ciudad del Este, Paraguay, reparando computadoras y equipos electrónicos desde el almacén de su casa.",
  },
  {
    year: "2020",
    title: "Expansión",
    text: "El negocio crece y empieza a ofrecer ensamblado y venta de computadoras. La reputación de calidad se extiende en la región.",
  },
  {
    year: "2020",
    title: "Transformación",
    text: "Al detectar las necesidades de software de sus clientes, Oscar decide especializarse en desarrollo web y de software, y la empresa pasa a llamarse Fluxo Web.",
  },
  {
    year: "2025",
    title: "Nuevos socios",
    text: "Se incorporan Alberto David Servin Meira (cofundador e ingeniero en Informática) y Wildo Yamil Valenzuela Panderi (cofundador y gerente administrativo), fortaleciendo el equipo directivo.",
  },
  {
    year: "2026",
    title: "Socio principal",
    text: "El ingeniero en Informática Armando Manuel Diarte Velázquez se incorpora como socio principal, conectando lógica de negocio, datos e interfaces en backend y frontend.",
  },
  {
    year: "Hoy",
    title: "Infraestructura propia",
    text: "Fluxo Web Group E.A.S. opera con servidores propios: hosting, despliegue de aplicaciones y gestión de sistemas para empresas de la región, junto al desarrollo a medida.",
  },
];

export default function Empresa({ members }) {
  return (
    <>
      <Head>
        <title>Empresa — Fluxo Web</title>
        <meta
          name="description"
          content="La historia de Fluxo Web Group E.A.S.: de reparar computadoras en Ciudad del Este a desarrollar y alojar software para PyMEs de la región."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="De Ciudad del Este al mundo digital."
          lead="Desde 2019 construimos software que cambia la manera en que operan las empresas paraguayas. Empezamos reparando computadoras; hoy diseñamos sistemas que hacen crecer negocios."
        />

        <section className="pt-24 sm:pt-32" aria-label="Visión y misión">
          <Container className="grid gap-14 lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-[15px] font-medium text-muted">Visión</h2>
              <p className="mt-5 max-w-[30ch] text-[clamp(1.5rem,2.4vw,2.125rem)] font-light leading-snug tracking-tight">
                Ser la primera elección de las empresas que buscan transformar digitalmente sus operaciones.
              </p>
            </div>
            <div>
              <h2 className="text-[15px] font-medium text-muted">Misión</h2>
              <p className="mt-5 max-w-[30ch] text-[clamp(1.5rem,2.4vw,2.125rem)] font-light leading-snug tracking-tight">
                Software y soluciones web que impulsan a nuestros clientes hacia su siguiente nivel.
              </p>
            </div>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="historia-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading title={<span id="historia-title">Nuestra historia.</span>} />
              </div>
            </div>
            <ol className="relative lg:col-span-8">
              <span aria-hidden="true" className="absolute bottom-3 left-[5px] top-3 w-px bg-line/15" />
              {milestones.map((m, i) => {
                const last = i === milestones.length - 1;
                return (
                  <li key={`${m.year}-${m.title}`} className="relative grid grid-cols-[12px_1fr] gap-x-6 pb-12 last:pb-0">
                    <span
                      aria-hidden="true"
                      className={`relative mt-1.5 h-3 w-3 rounded-full border-[1.5px] ${last ? "border-green bg-green" : "border-line/50 bg-ground"}`}
                    />
                    <div>
                      <p className={`tabular font-mono text-[13px] ${last ? "text-green-ink" : "text-muted"}`}>{m.year}</p>
                      <h3 className="mt-2 text-2xl font-medium tracking-tight">{m.title}</h3>
                      <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-muted">{m.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="valores-title">
          <Container>
            <SectionHeading title={<span id="valores-title">Lo que nos guía.</span>} />
            <dl className="mt-14 grid border-t border-line/15 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="border-b border-line/15 py-8 sm:pr-10">
                  <dt className="text-xl font-medium tracking-tight">{v.title}</dt>
                  <dd className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-muted">{v.text}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="socios-title">
          <Container>
            <SectionHeading title={<span id="socios-title">Los socios detrás de Fluxo Web.</span>}>
              Todos participan en el desarrollo: desde la arquitectura del sistema hasta la interfaz final. Cada solución es el
              resultado de un trabajo en conjunto.
            </SectionHeading>
            <div className="mt-16">
              <Members members={members} detailed />
            </div>
          </Container>
        </section>

        <Closing text="Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos." />
      </main>
      <Footer />
    </>
  );
}

export function getStaticProps() {
  return { props: { members: getAllMembers().map(pickMember) } };
}
