import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Container from "../components/container";
import Closing from "../components/closing";
import Members, { pickMember } from "../components/members";
import { SectionHeading, Terminal, WHATSAPP_URL } from "../components/ui";
import { projects, relationLabel } from "../data/projects";
import { getAllMembers } from "../data/members";

// Tres puertas de entrada según la situación del cliente (plan comercial, fase 2).
const doors = [
  {
    title: "Tengo un problema",
    text: "Ventas que se pierden, trabajo que se repite, información que no aparece cuando la necesitas. Cuéntanos qué pasa y lo convertimos en una solución.",
  },
  {
    title: "Tengo una idea",
    text: "Conoces tu mercado y ves una oportunidad. Te ayudamos a validarla y a convertirla, paso a paso, en un producto que funcione.",
  },
  {
    title: "No sé por dónde empezar",
    text: "Sabes que algo tiene que cambiar, pero no qué. Ese es nuestro trabajo: entender tu negocio y encontrar qué vale la pena resolver primero.",
    featured: true,
  },
];

// Los servicios contados como problemas del dueño, no como tecnologías.
const problems = [
  {
    problem: "Se me pierden ventas y presupuestos",
    solution: "Seguimiento de clientes, ventas por WhatsApp y recordatorios automáticos.",
  },
  {
    problem: "Todo depende de mí",
    solution: "Procesos claros y un sistema que ordena la operación para que tu equipo avance sin ti.",
  },
  {
    problem: "No sé cuánto gano ni a dónde se va el dinero",
    solution: "Caja, inventario y reportes en un solo lugar, con los números al día.",
  },
  {
    problem: "Quiero vender en internet",
    solution: "Sitio web, tienda en línea o aplicación conectados a cómo ya trabajas.",
  },
  {
    problem: "Mi equipo repite las mismas tareas todos los días",
    solution: "Automatización e inteligencia artificial para que el tiempo vaya a lo que importa.",
  },
];

const why = [
  {
    title: "Empezamos por tu negocio",
    text: "Antes de hablar de tecnología, entendemos cómo trabajas, qué te frena y qué quieres lograr.",
  },
  {
    title: "Productos que ya funcionan",
    text: "Nova, VentaFlow, Masé, Esmalté y Ogady ya trabajan para sus clientes. Partimos de algo probado, no de cero.",
  },
  {
    title: "Un solo equipo",
    text: "Construimos, alojamos en nuestros servidores y damos soporte. Una sola conversación para todo.",
  },
  {
    title: "Trato con los socios",
    text: "Hablas con los dueños de la empresa, no con intermediarios ni vendedores.",
  },
];

const steps = [
  { title: "Conversación", text: "Nos cuentas qué pasa en tu negocio, con tus palabras. Sin tecnicismos." },
  { title: "Diagnóstico", text: "Entendemos tu operación y definimos qué conviene resolver primero." },
  { title: "Propuesta", text: "Objetivos, entregas, plazos e inversión por escrito, antes de empezar." },
  { title: "Primera entrega", text: "Ves avances reales en etapas y seguimos contigo después del lanzamiento." },
];

const homeFaq = [
  {
    question: "¿Necesito saber qué sistema quiero?",
    answer:
      "No. La mayoría de nuestros clientes llega con un problema o una idea, no con un sistema en mente. Nuestro trabajo es entender tu negocio y proponerte la solución que tiene sentido.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende de lo que tu empresa necesite resolver. Después del diagnóstico te entregamos una propuesta por escrito con alcance, plazos e inversión definidos, antes de empezar.",
  },
  {
    question: "¿Y si no entiendo de tecnología?",
    answer:
      "No hace falta. Te explicamos cada paso en lenguaje simple y construimos la solución junto con las personas que la van a usar.",
  },
];

export default function Home({ members }) {
  return (
    <>
      <Head>
        <title>Fluxo Web — Convertimos lo que sabe tu negocio en soluciones</title>
        <meta
          name="description"
          content="Transformamos el conocimiento, los problemas y las ideas de tu empresa en soluciones tecnológicas. No necesitas saber qué sistema quieres: empezamos por entender tu negocio."
        />
        <meta property="og:title" content="Fluxo Web — Tu negocio sabe más de lo que imaginas" />
        <meta
          property="og:description"
          content="Transformamos el conocimiento, los problemas y las ideas de tu empresa en soluciones tecnológicas."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <main>
        <Hero />

        {/* Tres puertas: dónde está hoy el cliente */}
        <section id="empezar" className="scroll-mt-24 pt-24 sm:pt-32" aria-labelledby="empezar-title">
          <Container>
            <SectionHeading title={<span id="empezar-title">¿Dónde está tu negocio hoy?</span>}>
              No necesitas llegar con un sistema en mente. Elige la situación que más se parece a la tuya.
            </SectionHeading>

            <ul className="mt-14 grid gap-3 lg:grid-cols-3">
              {doors.map((d) => (
                <li key={d.title}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group frame flex h-full flex-col p-7 transition-colors sm:p-9 ${
                      d.featured ? "bg-green text-[#0B0B0B]" : "border border-line/15 bg-panel hover:border-green"
                    }`}
                  >
                    <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-normal leading-tight tracking-tight">{d.title}</h3>
                    <p className={`mt-4 flex-1 text-[16px] leading-relaxed ${d.featured ? "text-[#0B0B0B]/75" : "text-muted"}`}>
                      {d.text}
                    </p>
                    <span className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium">
                      Hablar con nosotros
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Problemas que resolvemos */}
        <section className="pt-24 sm:pt-32" aria-labelledby="problemas-title">
          <Container className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeading title={<span id="problemas-title">Lo que más nos piden resolver.</span>}>
                  Si alguno te suena conocido, ya sabes por dónde empezar la conversación.
                </SectionHeading>
              </div>
            </div>

            <ol className="relative lg:col-span-7">
              <span aria-hidden="true" className="absolute bottom-10 left-[5px] top-10 w-px bg-line/15" />
              {problems.map((p) => (
                <li key={p.problem}>
                  <Link
                    href="/servicios"
                    className="group relative grid grid-cols-[12px_1fr_auto] items-start gap-x-6 border-b border-line/10 py-8 first:pt-2"
                  >
                    <Terminal className="relative mt-3 bg-ground text-line/40 transition-colors duration-300 group-hover:border-green group-hover:bg-green" />
                    <div>
                      <h3 className="text-[clamp(1.375rem,2.4vw,2rem)] font-medium leading-tight tracking-tight transition-colors duration-300 group-hover:text-green-ink">
                        “{p.problem}”
                      </h3>
                      <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-muted">{p.solution}</p>
                    </div>
                    <ArrowRight
                      className="mt-3 h-5 w-5 text-muted transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:text-green-ink"
                      strokeWidth={1.6}
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Manifiesto: Empresas que piensan */}
        <section className="px-2 pt-24 sm:px-3 sm:pt-32" aria-labelledby="manifiesto-title">
          <div className="frame bg-green text-[#0B0B0B]">
            <Container className="py-16 sm:py-24">
              <h2 id="manifiesto-title" className="max-w-[20ch] text-title font-normal">
                Tu empresa aprendió de cada cliente, de cada venta y de cada problema.
              </h2>
              <p className="mt-6 max-w-[60ch] text-lead text-[#0B0B0B]/75">
                Mucho de ese conocimiento sigue en personas, conversaciones y tareas que dependen de la memoria. Puede
                convertirse en procesos claros, información conectada y herramientas que ayuden a tu equipo. Tú conoces tu
                mercado; nosotros, la tecnología. Juntos descubrimos qué vale la pena construir.
              </p>

              <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
                <span aria-hidden="true" className="absolute left-0 right-0 top-[6px] hidden h-px bg-[#0B0B0B]/30 lg:block" />
                {why.map((item, i) => (
                  <li key={item.title} className="relative">
                    <span
                      aria-hidden="true"
                      className={`relative block h-3 w-3 rounded-full border-[1.5px] border-[#0B0B0B] ${i === 0 ? "bg-[#0B0B0B]" : "bg-green"}`}
                    />
                    <h3 className="mt-6 text-xl font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-[#0B0B0B]/75">{item.text}</p>
                  </li>
                ))}
              </ol>
            </Container>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section id="como-trabajamos" className="scroll-mt-24 pt-24 sm:pt-32" aria-labelledby="proceso-title">
          <Container>
            <SectionHeading title={<span id="proceso-title">De tu idea a la primera entrega.</span>}>
              Sabes en qué punto está tu proyecto en todo momento, y conoces la inversión antes de empezar.
            </SectionHeading>
            <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <span aria-hidden="true" className="absolute left-0 right-0 top-[30px] hidden h-px bg-line/15 lg:block" />
              {steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span
                    className={`relative inline-grid h-[60px] min-w-[60px] place-items-center rounded-full border px-4 font-mono text-lg tabular ${
                      i === 1 ? "border-green bg-green text-[#0B0B0B]" : "border-line/20 bg-ground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Casos */}
        <section id="casos" className="scroll-mt-24 pt-24 sm:pt-32" aria-labelledby="casos-title">
          <Container>
            <SectionHeading title={<span id="casos-title">Negocios que ya funcionan con Fluxo.</span>}>
              Comercios, emprendimientos y empresas de servicios que hoy venden, atienden y se organizan con lo que
              construimos. Todos se pueden visitar.
            </SectionHeading>

            <ul className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-12">
              {projects.map((p, i) => (
                <ProjectTile key={p.slug} project={p} size={tileSize(i, projects.length)} />
              ))}
            </ul>
          </Container>
        </section>

        {/* Equipo */}
        <section className="pt-24 sm:pt-32" aria-labelledby="equipo-title">
          <Container>
            <SectionHeading title={<span id="equipo-title">Hablas directo con los socios.</span>}>
              Cada proyecto lo acompaña alguien que decide en la empresa, desde la primera conversación.
            </SectionHeading>

            <div className="mt-16">
              <Members members={members} />
            </div>
          </Container>
        </section>

        {/* Preguntas frecuentes */}
        <section className="pt-24 sm:pt-32" aria-labelledby="faq-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="faq-title" className="text-title font-normal">
                Preguntas frecuentes
              </h2>
              <p className="mt-6 max-w-[34ch] text-lead text-muted">
                ¿No encuentras la tuya? Escríbenos y te responde uno de los socios.
              </p>
            </div>
            <div className="lg:col-span-8">
              <Faq lead={homeFaq} />
            </div>
          </Container>
        </section>

        <Closing />
      </main>
      <Footer />
    </>
  );
}

// Galería escalonada: 2 grandes arriba y el resto en filas de 3 (medianas) y de 4 (chicas),
// combinadas para que ninguna fila quede incompleta sin importar cuántos proyectos haya.
function tileSize(i, total) {
  if (i < 2) return "large";
  const rest = total - 2;
  const mediumRows = [1, 0, 2, 3].find((a) => rest - 3 * a >= 0 && (rest - 3 * a) % 4 === 0);
  const medium = mediumRows === undefined ? rest : mediumRows * 3;
  const size = i - 2 < medium ? "medium" : "small";
  // En tablet (2 columnas) la última ficha impar ocupa el ancho completo.
  return i === total - 1 && total % 2 === 1 ? `${size}-last` : size;
}

const tileSpan = {
  large: "lg:col-span-6",
  medium: "lg:col-span-4",
  small: "lg:col-span-3",
  "medium-last": "md:col-span-2 lg:col-span-4",
  "small-last": "md:col-span-2 lg:col-span-3",
};

function ProjectTile({ project, size }) {
  const large = size === "large";
  const className = tileSpan[size];
  return (
    <li className={className}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
        <span className="relative block aspect-[16/10] overflow-hidden rounded-[20px] border border-line/10 bg-panel">
          <Image
            src={project.image}
            alt={`Captura de ${project.name}`}
            fill
            sizes={large ? "(min-width: 768px) 50vw, 100vw" : size.startsWith("medium") ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"}
            className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        </span>
        <span className="mt-5 flex items-start justify-between gap-4">
          <span className="min-w-0">
            <span className={`block font-medium tracking-tight ${large ? "text-2xl" : "text-xl"}`}>{project.name}</span>
            <span className="mt-2 block max-w-[46ch] text-[15px] leading-relaxed text-muted">{project.description}</span>
          </span>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line/15 transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-[#0B0B0B]">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </span>
        </span>
        <span className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted">
          {relationLabel(project) && (
            <span className={`font-medium ${project.own ? "text-green-ink" : project.partner ? "text-ink" : ""}`}>{relationLabel(project)}</span>
          )}
          <span>{project.kind}</span>
        </span>
      </a>
    </li>
  );
}

export function getStaticProps() {
  return { props: { members: getAllMembers().map(pickMember) } };
}
