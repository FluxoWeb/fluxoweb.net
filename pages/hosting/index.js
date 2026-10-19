import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import Faq from "../../components/faq";
import Pricing from "../../components/pricing";
import { SectionHeading } from "../../components/ui";

// Planes descritos por uso, no por especificaciones técnicas. Sin precio publicado: se cotiza por propuesta.
const plans = [
  {
    name: "Para empezar",
    description: "Un sitio web, una tienda pequeña o un primer sistema.",
    features: ["Certificado de seguridad (SSL)", "1 dominio", "Espacio para tu sitio y tus archivos", "Soporte por email"],
  },
  {
    name: "Para crecer",
    description: "Sistemas con varios usuarios que tu empresa usa todos los días.",
    featured: true,
    features: [
      "Certificado de seguridad (SSL)",
      "Hasta 5 dominios",
      "Más capacidad para usuarios y datos",
      "Copias de seguridad diarias",
      "Soporte prioritario",
    ],
  },
  {
    name: "Para operación exigente",
    description: "Empresas con mucho movimiento, que no pueden detenerse.",
    features: [
      "Certificado de seguridad (SSL)",
      "Dominios ilimitados",
      "La mayor capacidad de procesamiento y almacenamiento",
      "Transferencia ilimitada",
      "Copias de seguridad en tiempo real",
    ],
  },
];

const reasons = [
  { title: "Servidores propios", text: "No revendemos hosting genérico: cada servidor lo configura y monitorea nuestro equipo." },
  { title: "Seguridad incluida", text: "Firewall y certificado SSL en todos los planes." },
  { title: "Copias de seguridad", text: "Respaldos automáticos con restauración asistida por el equipo." },
  { title: "El mismo equipo", text: "Quien aloja tu sistema es quien lo desarrolló: un solo contacto ante cualquier problema." },
];

const faqHosting = [
  {
    question: "¿Puedo migrar mi sitio existente?",
    answer: "Sí, ofrecemos migración gratuita en todos los planes. Nuestro equipo se encarga del proceso.",
  },
  {
    question: "¿Qué tecnologías soportan?",
    answer: "Node.js, PHP, Python, Ruby, MySQL, PostgreSQL, MongoDB y más. Evaluamos cada caso para elegir la mejor configuración.",
  },
  {
    question: "¿Puedo cambiar de plan?",
    answer: "Sí, puedes subir de plan en cualquier momento. Los cambios se aplican sin necesidad de migrar.",
  },
  {
    question: "¿Qué pasa si supero el límite de transferencia?",
    answer: "Te avisamos antes de llegar al límite para que subas de plan o contrates transferencia adicional.",
  },
];

export default function Hosting() {
  return (
    <>
      <Head>
        <title>Hosting en la nube — Fluxo Web</title>
        <meta
          name="description"
          content="Tus sistemas alojados en nuestros propios servidores, con copias de seguridad y el soporte del mismo equipo que los desarrolla."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Tu sistema en la nube, en nuestros servidores."
          lead="Infraestructura propia, con copias de seguridad y soporte técnico real. Tú te enfocas en tu negocio; nosotros, en el servidor."
        >
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] text-night-muted">
            {["SSL gratuito", "Copias de seguridad", "Migración incluida", "Sin permanencia"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green" />
                {f}
              </li>
            ))}
          </ul>
        </PageHero>

        <section className="pt-24 sm:pt-32" aria-labelledby="planes-title">
          <Container>
            <SectionHeading title={<span id="planes-title">Elige según tu operación.</span>}>
              Cada plan se ajusta a lo que tu empresa necesita. Te enviamos una propuesta con la inversión, sin contratos de permanencia.
            </SectionHeading>

            <div className="mt-14">
              <Pricing plans={plans} />
            </div>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="razones-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading title={<span id="razones-title">Infraestructura pensada para el trabajo real.</span>} />
            </div>
            <dl className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
              {reasons.map((r) => (
                <div key={r.title} className="border-t border-line/15 py-8">
                  <dt className="text-xl font-medium tracking-tight">{r.title}</dt>
                  <dd className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-muted">{r.text}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="faq-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <h2 id="faq-title" className="text-title font-normal lg:col-span-4">
              Preguntas sobre hosting
            </h2>
            <div className="lg:col-span-8">
              <Faq items={faqHosting} />
            </div>
          </Container>
        </section>

        <Closing
          title="¿Necesitas un plan a medida?"
          text="Si tus necesidades no encajan en los planes estándar, diseñamos la infraestructura para tu empresa."
          label="Hablar con el equipo"
        />
      </main>
      <Footer />
    </>
  );
}
