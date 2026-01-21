import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import Image from "next/image";
import { Code, Globe, Smartphone, Cloud, MessageCircle, CheckCircle, ArrowRight, Brain, Bot, Sparkles, Search, FileCode, Rocket, Lightbulb } from "lucide-react";

const servicios = [
  {
    titulo: "Desarrollo con Inteligencia Artificial",
    descripcion: "Integramos soluciones de IA en tus sistemas para automatizar procesos, analizar datos y potenciar la toma de decisiones con machine learning y modelos de lenguaje.",
    icono: Brain,
    caracteristicas: ["Chatbots y asistentes virtuales", "Análisis predictivo", "Automatización inteligente", "Integración con LLMs"],
    destacado: true,
  },
  {
    titulo: "Desarrollo de Software Personalizado",
    descripcion: "Creamos soluciones de software a medida que se adaptan perfectamente a los procesos y objetivos específicos de tu organización.",
    icono: Code,
    caracteristicas: ["Análisis de requerimientos", "Arquitectura escalable", "Integración con sistemas existentes"],
  },
  {
    titulo: "Desarrollo Web",
    descripcion: "Construimos sitios web modernos, rápidos y optimizados para SEO que generan resultados para tu negocio.",
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
    descripcion: "Infraestructura cloud segura y escalable para desplegar tus aplicaciones con alta disponibilidad.",
    icono: Cloud,
    caracteristicas: ["Alta disponibilidad", "Backups automáticos", "Soporte 24/7"],
    link: "/hosting",
  },
];

const procesoTrabajo = [
  {
    paso: "01",
    titulo: "Descubrimiento",
    descripcion: "Analizamos tus necesidades y definimos los objetivos del proyecto.",
    icono: Search,
  },
  {
    paso: "02",
    titulo: "Planificación",
    descripcion: "Diseñamos la arquitectura y creamos un roadmap detallado.",
    icono: Lightbulb,
  },
  {
    paso: "03",
    titulo: "Desarrollo",
    descripcion: "Construimos tu solución con metodologías ágiles y entregas incrementales.",
    icono: FileCode,
  },
  {
    paso: "04",
    titulo: "Lanzamiento",
    descripcion: "Desplegamos, capacitamos y brindamos soporte continuo.",
    icono: Rocket,
  },
];

const Servicios = () => {
  return (
    <>
      <Head>
        <title>Servicios - Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="Servicios de desarrollo de software, aplicaciones web y móviles para pequeñas y medianas empresas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Nuestros Servicios
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Soluciones tecnológicas para hacer crecer tu negocio
            </h1>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Ofrecemos servicios integrales de desarrollo de software, desde la conceptualización hasta el despliegue y mantenimiento continuo.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio, index) => {
              const IconComponent = servicio.icono;
              return (
                <div
                  key={index}
                  className={`group relative p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    servicio.destacado
                      ? "border-indigo-400 dark:border-indigo-600 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/50 dark:to-gray-900/50 md:col-span-2"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-indigo-300 dark:hover:border-indigo-700"
                  }`}
                >
                  {servicio.destacado && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                      <Sparkles className="h-3 w-3" />
                      Nuevo
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl border-2 transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-500 ${
                      servicio.destacado
                        ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 dark:border-indigo-700"
                        : "bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800"
                    }`}>
                      <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {servicio.titulo}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {servicio.descripcion}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {servicio.caracteristicas.map((caracteristica, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                      {servicio.link && (
                        <Link
                          href={servicio.link}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          Ver planes
                          <ArrowRight className="h-4 w-4" />
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

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Metodología
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Nuestro proceso de trabajo
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados de calidad en cada proyecto.
            </p>
          </div>

          <div className="relative">
            {/* Línea conectora horizontal (solo desktop) */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 dark:from-indigo-900 dark:via-indigo-600 dark:to-indigo-900" />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {procesoTrabajo.map((item, index) => {
                const IconComponent = item.icono;
                return (
                  <div 
                    key={index} 
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icono circular con animación */}
                    <div className="relative z-10 mx-auto mb-6 flex items-center justify-center h-14 w-14 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-200 dark:border-indigo-800 group-hover:border-indigo-500 dark:group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Card con contenido */}
                    <div className="relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      {/* Número del paso */}
                      <span className="absolute -top-3 -right-2 flex items-center justify-center h-7 w-7 rounded-full bg-indigo-600 text-xs font-bold text-white shadow-md">
                        {item.paso}
                      </span>
                      
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.titulo}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-6 py-12 md:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="mt-4 text-base text-indigo-100">
                Contáctanos hoy y conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="https://wa.link/18ywdk"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contáctenos
                </Link>
                <Link
                  href="/empresa"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
                >
                  Conocer más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 -z-0 opacity-30">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-800 blur-3xl" />
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
