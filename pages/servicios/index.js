import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import { WhatsAppButton, ArrowLink, SectionHeading } from "../../components/ui";

// Cada área contada por el resultado para el negocio; la tecnología va después.
const services = [
  {
    id: "operacion",
    name: "Ordenar tu operación",
    description:
      "Un sistema hecho sobre cómo trabaja tu empresa: ventas, stock, caja y reportes en un solo lugar, sin planillas sueltas ni información que depende de una persona.",
    capabilities: ["Partimos de cómo trabajás hoy", "Se conecta con lo que ya usás", "Crece junto con tu negocio"],
  },
  {
    id: "automatizacion",
    name: "Que tu equipo haga más con menos",
    description:
      "Asistentes y automatizaciones con inteligencia artificial que responden consultas, ordenan la información y se encargan de las tareas que se repiten todos los días.",
    capabilities: ["Asistentes que atienden por WhatsApp", "Tareas que se hacen solas", "Información ordenada para decidir"],
    proof: { label: "Ver Quiro y MillonAI", href: "/#casos" },
  },
  {
    id: "vender",
    name: "Vender por internet",
    description: "Un sitio o una tienda en línea que vos mismo podés administrar, que aparece en Google y que lleva a tus clientes hasta la compra.",
    capabilities: ["Se administra fácilmente", "Aparece en las búsquedas", "Funciona en cualquier pantalla"],
  },
  {
    id: "celular",
    name: "Tu negocio en el celular de tus clientes",
    description: "Una aplicación para Android e iOS conectada a tu sistema, para que tus clientes compren, reserven o consulten desde donde estén.",
    capabilities: ["Android e iOS", "Avisos y notificaciones", "Conectada a tu sistema"],
  },
  {
    id: "disponible",
    name: "Tus sistemas siempre disponibles",
    description: "Alojamos lo que construimos en nuestros propios servidores, con copias de seguridad y el soporte del mismo equipo que lo desarrolló.",
    capabilities: ["Servidores propios", "Copias de seguridad automáticas", "Un solo equipo ante cualquier problema"],
    proof: { label: "Ver planes de hosting", href: "/hosting" },
  },
];

const steps = [
  { title: "Te escuchamos", text: "Conocemos tu negocio, tus ideas y tus desafíos. Sin tecnicismos." },
  { title: "Definimos el camino", text: "Damos forma a la solución juntos y te pasamos una propuesta por escrito." },
  { title: "Construimos con vos", text: "Desarrollamos y validamos en cada etapa, con avances que podés ver." },
  { title: "Lo ponemos en marcha", text: "Te acompañamos en la implementación y después del lanzamiento." },
];

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Soluciones — Fluxo Web</title>
        <meta
          name="description"
          content="Soluciones tecnológicas para ordenar tu operación, vender más y automatizar tareas. Primero entendemos tu negocio, después elegimos la tecnología."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Soluciones para lo que tu negocio necesita."
          lead="Primero entendemos qué te frena o qué querés lograr. Después elegimos la tecnología. Estas son las soluciones que más construimos."
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <WhatsAppButton />
            <ArrowLink href="#proceso" className="text-night-ink">
              Cómo trabajamos
            </ArrowLink>
          </div>
        </PageHero>

        <section className="band-light py-20 sm:py-28" aria-label="Soluciones">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <nav className="hidden lg:col-span-3 lg:block" aria-label="Índice de soluciones">
              <ul className="sticky top-32 space-y-3 border-l border-line/15 pl-5">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-[15px] text-muted transition-colors hover:text-ink">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-9">
              {services.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28 border-t border-line/15 py-14 first:border-t-0 first:pt-0 sm:py-20">
                  <h2 className="text-title font-semibold">{s.name}</h2>
                  <p className="mt-6 max-w-[58ch] text-lead text-muted">{s.description}</p>
                  <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-[16px]">
                        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-green" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {s.proof && (
                    <Link
                      href={s.proof.href}
                      className="group mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-green-ink underline-offset-[6px] hover:underline"
                    >
                      {s.proof.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="proceso" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="proceso-title">
          <Container>
            <SectionHeading title={<span id="proceso-title">Cómo trabajamos.</span>}>
              Conocés la inversión antes de empezar y ves avances reales en cada etapa.
            </SectionHeading>
            <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <span aria-hidden="true" className="absolute left-0 right-0 top-[30px] hidden h-px bg-line/15 lg:block" />
              {steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="relative inline-grid h-[60px] min-w-[60px] place-items-center rounded-full border border-line/20 bg-ground px-4 font-mono text-lg tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <Closing title="¿No sabés cuál necesitás?" text="Es normal. Contanos qué pasa en tu negocio y te ayudamos a encontrar la solución que tiene sentido." />
      </main>
      <Footer />
    </>
  );
}
