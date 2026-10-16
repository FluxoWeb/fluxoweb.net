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
import { SectionHeading, Terminal } from "../components/ui";
import { projects, hostOf } from "../data/projects";
import { getAllMembers } from "../data/members";

const services = [
  {
    name: "Software a medida",
    description: "Sistemas de gestión diseñados sobre los procesos reales de tu empresa: ventas, stock, caja, reportes.",
    href: "/servicios",
  },
  {
    name: "Inteligencia artificial",
    description: "Asistentes, automatizaciones y modelos de lenguaje integrados en los sistemas que ya usas.",
    href: "/servicios",
  },
  {
    name: "Desarrollo web",
    description: "Sitios y aplicaciones web rápidas, administrables y preparadas para aparecer en Google.",
    href: "/servicios",
  },
  {
    name: "Aplicaciones móviles",
    description: "Apps para Android e iOS conectadas a tu sistema, con notificaciones y pagos.",
    href: "/servicios",
  },
  {
    name: "Hosting en la nube",
    description: "Tus sistemas alojados en nuestros servidores, con copias de seguridad y monitoreo.",
    href: "/hosting",
  },
];

const endToEnd = [
  {
    title: "Infraestructura propia",
    text: "No solo programamos: alojamos tus sistemas en nuestros propios servidores. Un solo proveedor hasta producción.",
  },
  {
    title: "Productos propios",
    text: "FluxoCRM y Nova son una base probada que adaptamos a tu empresa, en lugar de empezar de cero.",
  },
  {
    title: "IA aplicada",
    text: "Integramos inteligencia artificial en sistemas reales que hoy están en línea, como Quiro y MillonAI.",
  },
  {
    title: "Trato con los socios",
    text: "Hablas directamente con los dueños de la empresa, no con intermediarios ni vendedores.",
  },
];

export default function Home({ members }) {
  const [featured, ...rest] = projects;
  const second = rest.shift();

  return (
    <>
      <Head>
        <title>Fluxo Web — Software, IA e infraestructura para PyMEs</title>
        <meta
          name="description"
          content="Desarrollamos, alojamos y mantenemos el software de PyMEs en Paraguay y la región: sistemas a medida, inteligencia artificial, apps y hosting propio."
        />
        <meta property="og:title" content="Fluxo Web — Software que conecta toda tu empresa" />
        <meta property="og:description" content="Desarrollo, infraestructura y soporte de software para PyMEs en Paraguay y la región." />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <main>
        <Hero />

        {/* Servicios: la red */}
        <section className="pt-24 sm:pt-32" aria-labelledby="servicios-title">
          <Container className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeading title={<span id="servicios-title">Todo lo que tu empresa necesita, en una sola red.</span>}>
                  Cada servicio es un nodo conectado al resto: lo que programamos, lo alojamos y lo mantenemos nosotros.
                </SectionHeading>
              </div>
            </div>

            <ol className="relative lg:col-span-7">
              <span aria-hidden="true" className="absolute bottom-10 left-[5px] top-10 w-px bg-line/15" />
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="group relative grid grid-cols-[12px_1fr_auto] items-start gap-x-6 border-b border-line/10 py-8 first:pt-2"
                  >
                    <Terminal className="relative mt-3 bg-ground text-line/40 transition-colors duration-300 group-hover:border-green group-hover:bg-green" />
                    <div>
                      <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-tight tracking-tight transition-colors duration-300 group-hover:text-green-ink">
                        {s.name}
                      </h3>
                      <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-muted">{s.description}</p>
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

        {/* De punta a punta: campo verde */}
        <section className="px-2 pt-24 sm:px-3 sm:pt-32" aria-labelledby="punta-title">
          <div className="frame bg-green text-[#0B0B0B]">
            <Container className="py-16 sm:py-24">
              <h2 id="punta-title" className="max-w-[18ch] text-title font-normal">
                Un solo proveedor. Del código al servidor.
              </h2>
              <p className="mt-6 max-w-[56ch] text-lead text-[#0B0B0B]/75">
                La mayoría de las empresas termina coordinando a un programador, a un hosting y a un soporte distintos. Con
                Fluxo es una sola conversación.
              </p>

              <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
                <span aria-hidden="true" className="absolute left-0 right-0 top-[6px] hidden h-px bg-[#0B0B0B]/30 lg:block" />
                {endToEnd.map((item, i) => (
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

        {/* Proyectos en producción */}
        <section id="proyectos" className="scroll-mt-24 pt-24 sm:pt-32" aria-labelledby="proyectos-title">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading title={<span id="proyectos-title">Sistemas que hoy están en línea.</span>}>
                Plataformas con inteligencia artificial, ventas por WhatsApp, gestión comercial y comercio electrónico
                desarrolladas por Fluxo Web. Todas se pueden visitar.
              </SectionHeading>
            </div>

            <ul className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-6">
              {[featured, second].map((p) => (
                <ProjectTile key={p.slug} project={p} className="md:col-span-3" large />
              ))}
              {rest.map((p) => (
                <ProjectTile key={p.slug} project={p} className="md:col-span-3 lg:col-span-2" />
              ))}
            </ul>
          </Container>
        </section>

        {/* Equipo */}
        <section className="pt-24 sm:pt-32" aria-labelledby="equipo-title">
          <Container>
            <SectionHeading title={<span id="equipo-title">Hablas directo con los socios.</span>}>
              Cuatro socios, cuatro anclajes de la misma red. Cada proyecto lo acompaña alguien que decide en la empresa.
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
              <Faq />
            </div>
          </Container>
        </section>

        <Closing />
      </main>
      <Footer />
    </>
  );
}

function ProjectTile({ project, className = "", large = false }) {
  return (
    <li className={className}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
        <span className="relative block aspect-[16/10] overflow-hidden rounded-[20px] border border-line/10 bg-panel">
          <Image
            src={project.image}
            alt={`Captura de ${project.name}`}
            fill
            sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
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
        <span className="mt-4 flex items-center gap-3 text-[13px] text-muted">
          <span>{project.kind}</span>
          <span aria-hidden="true" className="h-px w-4 bg-line/25" />
          <span className="font-mono text-[12px]">{hostOf(project.url)}</span>
        </span>
      </a>
    </li>
  );
}

export function getStaticProps() {
  return { props: { members: getAllMembers().map(pickMember) } };
}
