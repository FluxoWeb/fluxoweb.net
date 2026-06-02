import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Container from "../components/container";
import Link from "next/link";
import { Code, Globe, Smartphone, Cloud, Brain, ArrowRight, MessageCircle, CheckCircle } from "lucide-react";

const stats = [
  { valor: "2019", etiqueta: "Año de fundación" },
  { valor: "50+", etiqueta: "Proyectos entregados" },
  { valor: "4", etiqueta: "Especialistas en el equipo" },
  { valor: "24/7", etiqueta: "Soporte técnico" },
];

const serviciosDestacados = [
  {
    icono: Brain,
    titulo: "Inteligencia Artificial",
    descripcion: "Chatbots, automatizaciones y modelos de lenguaje integrados en tus sistemas.",
    link: "/servicios",
  },
  {
    icono: Code,
    titulo: "Software a medida",
    descripcion: "Sistemas personalizados que se adaptan exactamente a tus procesos de negocio.",
    link: "/servicios",
  },
  {
    icono: Globe,
    titulo: "Desarrollo Web",
    descripcion: "Sitios y aplicaciones web modernas, rápidas y optimizadas para SEO.",
    link: "/servicios",
  },
  {
    icono: Smartphone,
    titulo: "Apps Móviles",
    descripcion: "Aplicaciones nativas e híbridas para iOS y Android con UX excepcional.",
    link: "/servicios",
  },
  {
    icono: Cloud,
    titulo: "Hosting Cloud",
    descripcion: "Infraestructura segura y escalable con backups y soporte incluido.",
    link: "/hosting",
  },
];

const porQueElegirnos = [
  {
    titulo: "100% personalizado",
    descripcion: "Cada sistema se diseña desde cero para adaptarse a los procesos únicos de tu negocio.",
  },
  {
    titulo: "Ciclo completo",
    descripcion: "Análisis, diseño, desarrollo, testing, implementación y soporte post-entrega.",
  },
  {
    titulo: "Tecnología actual",
    descripcion: "Stack moderno con enfoque en escalabilidad, seguridad y performance desde el día uno.",
  },
  {
    titulo: "Comunicación directa",
    descripcion: "Acceso al equipo de desarrollo sin intermediarios. Siempre sabés el estado de tu proyecto.",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Fluxo Web Group E.A.S. — Desarrollo de Software a Medida</title>
        <meta
          name="description"
          content="Fluxo Web — desarrollo y gestión de sistemas para pequeñas y medianas empresas en Paraguay. Software personalizado, apps móviles, hosting cloud e inteligencia artificial."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />

      {/* Stats bar */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.etiqueta} className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">{stat.valor}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{stat.etiqueta}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Servicios overview */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Qué hacemos
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Soluciones tecnológicas para tu empresa
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Desde aplicaciones web hasta sistemas empresariales complejos. Construimos la tecnología que tu negocio necesita para crecer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviciosDestacados.map((servicio) => {
              const Icon = servicio.icono;
              return (
                <Link
                  key={servicio.titulo}
                  href={servicio.link}
                  className="group flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {servicio.titulo}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* Ver todos */}
            <Link
              href="/servicios"
              className="group flex items-center justify-center gap-3 p-5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
            >
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Ver todos los servicios
              </span>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                Por qué elegirnos
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl leading-snug">
                Nos enfocamos en entender tu negocio antes de escribir código
              </h2>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                No somos una fábrica de software. Analizamos cada caso, proponemos la mejor solución y trabajamos codo a codo con vos durante todo el proyecto.
              </p>
              <div className="mt-8">
                <Link
                  href="https://wa.link/18ywdk"
                  className="inline-flex items-center gap-2 h-10 px-5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar gratis
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {porQueElegirnos.map((item) => (
                <div
                  key={item.titulo}
                  className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{item.titulo}</h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-6">
                    {item.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              FAQ
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Algunas de las preguntas más comunes que nos hacen sobre nuestros servicios y forma de trabajo.
            </p>
          </div>
          <Faq />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-6 py-12 md:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="mt-4 text-base text-indigo-100">
                Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta sin compromiso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="https://wa.link/18ywdk"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contactar por WhatsApp
                </Link>
                <Link
                  href="/empresa"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
                >
                  Conocer el equipo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 -z-0 opacity-30">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-800 blur-3xl" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
