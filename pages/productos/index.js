import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import { SectionHeading, WHATSAPP_URL } from "../../components/ui";
import { projects, hostOf } from "../../data/projects";

const erpModules = [
  { name: "Contabilidad", text: "Gestión financiera completa" },
  { name: "Inventario", text: "Control de stock en tiempo real" },
  { name: "Ventas", text: "Facturación y cotizaciones" },
  { name: "Compras", text: "Órdenes y proveedores" },
  { name: "Recursos humanos", text: "Nómina y empleados" },
  { name: "Manufactura", text: "Producción y listas de materiales" },
];

const support = [
  { title: "Implementación", text: "Configuramos el sistema, migramos tus datos y capacitamos a tu equipo." },
  { title: "Datos seguros", text: "Alojado en nuestra infraestructura, con copias de seguridad automáticas." },
  { title: "Soporte continuo", text: "Asistencia técnica, actualizaciones y mejoras según el plan contratado." },
];

export default function Productos() {
  return (
    <>
      <Head>
        <title>Productos — Fluxo Web</title>
        <meta
          name="description"
          content="FluxoCRM, implementación de ERPNext y sistemas en producción desarrollados por Fluxo Web para PyMEs."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Sistemas listos para usar en tu empresa."
          lead="Soluciones de gestión probadas que implementamos, configuramos y mantenemos. Tu equipo empieza a trabajar sin esperar un desarrollo desde cero."
        />

        <section className="pt-24 sm:pt-32" aria-label="Productos">
          <Container className="grid gap-3 lg:grid-cols-2">
            <article className="frame flex flex-col bg-night p-7 text-night-ink sm:p-10">
              <h2 className="text-title font-normal">FluxoCRM</h2>
              <p className="mt-3 text-[15px] text-green">Desarrollado por Fluxo Web</p>
              <p className="mt-5 max-w-[46ch] text-lead text-night-muted">
                Centraliza contactos, oportunidades de venta y comunicaciones. Automatiza tu proceso comercial y cierra más ventas
                con menos esfuerzo.
              </p>
              <ul className="mt-10 grid flex-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
                {["Contactos y empresas", "Embudo de ventas visual", "Seguimiento de oportunidades", "Automatización de tareas", "Reportes y tableros", "Integración con email"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-3 text-[15px]">
                      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-green" />
                      {f}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/productos/fluxocrm"
                className="group mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-green px-6 text-[15px] font-medium text-[#0B0B0B] transition-colors hover:bg-[#3BE07D]"
              >
                Ver planes de FluxoCRM
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
              </Link>
            </article>

            <article className="frame flex flex-col border border-line/15 bg-panel p-7 sm:p-10">
              <h2 className="text-title font-normal">ERPNext</h2>
              <p className="mt-3 text-[15px] text-muted">De Frappe Technologies, implementado por Fluxo Web</p>
              <p className="mt-5 max-w-[46ch] text-lead text-muted">
                El ERP de código abierto de Frappe Technologies, implementado y adaptado por nuestro equipo: contabilidad,
                inventario, compras, ventas, recursos humanos y más.
              </p>
              <dl className="mt-10 grid flex-1 grid-cols-2 border-t border-line/15 sm:grid-cols-3">
                {erpModules.map((m) => (
                  <div key={m.name} className="border-b border-line/10 py-5 pr-4">
                    <dt className="text-[15px] font-medium">{m.name}</dt>
                    <dd className="mt-1 text-[13px] leading-snug text-muted">{m.text}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-full border border-line/20 px-6 text-[15px] font-medium transition-colors hover:border-green hover:bg-green hover:text-[#0B0B0B]"
              >
                Solicitar una demostración
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="acompanamiento-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading title={<span id="acompanamiento-title">No solo entregamos software.</span>}>
                Desde la configuración inicial hasta el soporte posterior: cada implementación es una relación a largo plazo.
              </SectionHeading>
            </div>
            <ol className="lg:col-span-7">
              {support.map((s) => (
                <li key={s.title} className="grid gap-2 border-t border-line/15 py-8 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="max-w-[46ch] text-[16px] leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="demos" className="scroll-mt-24 pt-24 sm:pt-32" aria-labelledby="demos-title">
          <Container>
            <SectionHeading title={<span id="demos-title">Pruébalos en vivo.</span>}>
              Todos estos sistemas están en producción. Entra, recórrelos y decide con el producto real delante.
            </SectionHeading>
            <ul className="mt-14 border-t border-line/15">
              {projects.map((p) => (
                <li key={p.slug} className="border-b border-line/15">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[96px_1fr_auto] items-center gap-5 py-5 sm:grid-cols-[176px_1fr_1.2fr_auto] sm:gap-8"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden rounded-[10px] border border-line/10 bg-panel">
                      <Image src={p.image} alt="" fill sizes="176px" className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xl font-medium tracking-tight transition-colors group-hover:text-green-ink">{p.name}</span>
                      <span className="mt-1 block text-[14px] text-muted">{p.kind}</span>
                    </span>
                    <span className="hidden max-w-[44ch] text-[15px] leading-relaxed text-muted sm:block">
                      {p.description}
                      <span className="mt-1 block font-mono text-[12px]">{hostOf(p.url)}</span>
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line/15 transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-[#0B0B0B]">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <Closing title="¿Cuál encaja con tu empresa?" text="Te mostramos el sistema adecuado en una llamada corta, sin compromiso." label="Pedir una demostración" />
      </main>
      <Footer />
    </>
  );
}
