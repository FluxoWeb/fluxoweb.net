import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import {
  Code, Globe, Smartphone, Cloud, MessageCircle, CheckCircle,
  ArrowRight, Brain, Search, FileCode, Rocket, Lightbulb, Sparkles,
} from "lucide-react";

const servicios = [
  {
    titulo: "Inteligencia Artificial",
    descripcion: "Integramos soluciones de IA en tus sistemas para automatizar procesos, analizar datos y potenciar la toma de decisiones con machine learning y modelos de lenguaje.",
    icono: Brain,
    caracteristicas: ["Chatbots y asistentes virtuales", "Análisis predictivo", "Automatización inteligente", "Integración con LLMs"],
    destacado: true,
    tag: "Nuevo",
  },
  {
    titulo: "Software Personalizado",
    descripcion: "Creamos soluciones de software a medida que se adaptan perfectamente a los procesos y objetivos específicos de tu organización.",
    icono: Code,
    caracteristicas: ["Análisis de requerimientos", "Arquitectura escalable", "Integración con sistemas existentes"],
  },
  {
    titulo: "Desarrollo Web",
    descripcion: "Construimos sitios web modernos, rápidos y optimizados para SEO que generan resultados concretos para tu negocio.",
    icono: Globe,
    caracteristicas: ["Diseño responsive", "Optimización SEO", "Panel de administración"],
  },
  {
    titulo: "Aplicaciones Móviles",
    descripcion: "Desarrollamos aplicaciones nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.",
    icono: Smartphone,
    caracteristicas: ["iOS y Android", "UI/UX moderno", "Notificaciones push"],
  },
  {
    titulo: "Hosting en la Nube",
    descripcion: "Infraestructura cloud segura y escalable para desplegar tus aplicaciones con alta disponibilidad y soporte continuo.",
    icono: Cloud,
    caracteristicas: ["Alta disponibilidad", "Backups automáticos", "Soporte 24/7"],
    link: "/hosting",
  },
];

const proceso = [
  { paso: "01", titulo: "Descubrimiento", descripcion: "Analizamos tus necesidades y definimos los objetivos del proyecto.", icono: Search },
  { paso: "02", titulo: "Planificación", descripcion: "Diseñamos la arquitectura y creamos un roadmap detallado.", icono: Lightbulb },
  { paso: "03", titulo: "Desarrollo", descripcion: "Construimos tu solución con metodologías ágiles y entregas incrementales.", icono: FileCode },
  { paso: "04", titulo: "Lanzamiento", descripcion: "Desplegamos, capacitamos y brindamos soporte continuo post-entrega.", icono: Rocket },
];

const Servicios = () => {
  return (
    <>
      <Head>
        <title>Servicios — Fluxo Web Group E.A.S.</title>
        <meta name="description" content="Servicios de desarrollo de software, aplicaciones web y móviles, inteligencia artificial y hosting cloud para empresas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950 -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 -z-10" />
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl leading-tight">
              Tecnología que hace crecer tu negocio
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Desde una app móvil hasta sistemas empresariales complejos con IA integrada. Elegimos la tecnología correcta para cada problema.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="https://wa.link/18ywdk" className="inline-flex items-center gap-2 h-11 px-6 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
                Consultar proyecto
              </Link>
              <Link href="#proceso" className="inline-flex items-center gap-2 h-11 px-6 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Ver metodología
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Card destacada — IA */}
          {servicios.filter(s => s.destacado).map((servicio) => {
            const Icon = servicio.icono;
            return (
              <div key={servicio.titulo} className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900 p-8 md:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-white md:text-2xl">{servicio.titulo}</h2>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/20 border border-white/30 px-2.5 py-0.5 text-xs font-medium text-white">
                        <Sparkles className="h-3 w-3" />
                        {servicio.tag}
                      </span>
                    </div>
                    <p className="text-indigo-100 leading-relaxed max-w-2xl">{servicio.descripcion}</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {servicio.caracteristicas.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-sm text-indigo-100">
                          <CheckCircle className="h-4 w-4 text-indigo-300 flex-shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="https://wa.link/18ywdk" className="inline-flex items-center gap-2 h-10 px-5 text-sm font-medium text-indigo-700 bg-white rounded-md hover:bg-indigo-50 transition-colors whitespace-nowrap">
                      <MessageCircle className="h-4 w-4" />
                      Consultar
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Grid de servicios */}
          <div className="grid gap-4 md:grid-cols-2">
            {servicios.filter(s => !s.destacado).map((servicio) => {
              const Icon = servicio.icono;
              return (
                <div key={servicio.titulo} className="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors">
                      <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {servicio.titulo}
                      </h3>
                      <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{servicio.descripcion}</p>
                      <ul className="mt-4 space-y-1.5">
                        {servicio.caracteristicas.map((c) => (
                          <li key={c} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                      {servicio.link && (
                        <Link href={servicio.link} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                          Ver planes
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Metodología
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Cómo trabajamos
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Un proceso probado que garantiza resultados de calidad y comunicación clara en cada etapa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {proceso.map((item, index) => {
              const Icon = item.icono;
              return (
                <div key={item.paso} className="relative group">
                  {/* Connector line (desktop only) */}
                  {index < proceso.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px+48px)] h-px bg-gradient-to-r from-indigo-200 to-transparent dark:from-indigo-800 z-0" />
                  )}
                  <div className="relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 group-hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                        <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-xs font-bold text-indigo-400 dark:text-indigo-500 tracking-widest">{item.paso}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">{item.titulo}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-8 py-12 md:px-14 md:py-16">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Listo para comenzar?</h2>
                <p className="mt-2 text-indigo-100 max-w-xl">
                  Contanos tu proyecto y te respondemos con una propuesta concreta en menos de 24 horas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link href="https://wa.link/18ywdk" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors whitespace-nowrap">
                  <MessageCircle className="h-4 w-4" />
                  Contactar ahora
                </Link>
                <Link href="/empresa" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap">
                  Conocer el equipo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 -z-0 opacity-20">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-900 blur-3xl" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <PopupWidget />
    </>
  );
};

export default Servicios;
