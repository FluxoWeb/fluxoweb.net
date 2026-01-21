import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import { Cloud, Check, Server, Shield, Zap, Clock, HardDrive, Users, MessageCircle, ArrowRight } from "lucide-react";

const planes = [
  {
    nombre: "Hobby",
    descripcion: "Ideal para proyectos personales y pruebas de concepto.",
    precio: "15",
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      "1 vCPU",
      "1 GB RAM",
      "10 GB SSD",
      "100 GB transferencia",
      "SSL gratuito",
      "1 dominio",
      "Soporte por email",
    ],
  },
  {
    nombre: "Project",
    descripcion: "Perfecto para startups y proyectos en crecimiento.",
    precio: "45",
    periodo: "/mes",
    destacado: true,
    caracteristicas: [
      "2 vCPU",
      "4 GB RAM",
      "50 GB SSD",
      "500 GB transferencia",
      "SSL gratuito",
      "5 dominios",
      "Backups diarios",
      "Soporte prioritario",
    ],
  },
  {
    nombre: "Enterprise",
    descripcion: "Para empresas con alta demanda y necesidades críticas.",
    precio: "120",
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      "4 vCPU",
      "16 GB RAM",
      "200 GB SSD",
      "Transferencia ilimitada",
      "SSL gratuito",
      "Dominios ilimitados",
      "Backups en tiempo real",
      "Soporte 24/7",
      "SLA 99.9%",
    ],
  },
];

const beneficios = [
  {
    icono: Zap,
    titulo: "Alto rendimiento",
    descripcion: "Servidores optimizados con SSD NVMe para máxima velocidad.",
  },
  {
    icono: Shield,
    titulo: "Seguridad avanzada",
    descripcion: "Firewall, DDoS protection y certificados SSL incluidos.",
  },
  {
    icono: Clock,
    titulo: "99.9% Uptime",
    descripcion: "Garantizamos disponibilidad con infraestructura redundante.",
  },
  {
    icono: HardDrive,
    titulo: "Backups automáticos",
    descripcion: "Copias de seguridad diarias con restauración en un clic.",
  },
];

const Hosting = () => {
  return (
    <>
      <Head>
        <title>Hosting en la Nube - Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="Hosting cloud seguro y escalable para tus aplicaciones. Planes desde $15/mes con SSL gratuito y soporte técnico."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              <Cloud className="h-3 w-3 mr-1" />
              Hosting Cloud
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Infraestructura cloud para tu negocio
            </h1>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Despliega tus aplicaciones en servidores de alto rendimiento con seguridad empresarial, backups automáticos y soporte técnico especializado.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
            {planes.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 md:p-8 rounded-xl border ${
                  plan.destacado
                    ? "border-indigo-500 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                }`}
              >
                {plan.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                    Más popular
                  </span>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.nombre}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{plan.descripcion}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.precio}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{plan.periodo}</span>
                  </div>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="https://wa.link/18ywdk"
                    className={`w-full inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-md transition-colors ${
                      plan.destacado
                        ? "text-white bg-indigo-600 hover:bg-indigo-700"
                        : "text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contratar plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Beneficios
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              ¿Por qué elegir nuestro hosting?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {beneficios.map((beneficio, index) => {
              const IconComponent = beneficio.icono;
              return (
                <div key={index} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 mb-4">
                    <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{beneficio.titulo}</h3>
                  <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{beneficio.descripcion}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">¿Puedo migrar mi sitio existente?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sí, ofrecemos migración gratuita para todos los planes. Nuestro equipo se encarga de todo el proceso.</p>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">¿Qué tecnologías soportan?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Soportamos Node.js, PHP, Python, Ruby, bases de datos MySQL, PostgreSQL, MongoDB y más.</p>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">¿Puedo escalar mi plan?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sí, puedes actualizar o cambiar tu plan en cualquier momento sin tiempo de inactividad.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-6 py-12 md:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Server className="h-10 w-10 text-indigo-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                ¿Necesitas un plan personalizado?
              </h2>
              <p className="mt-4 text-base text-indigo-100">
                Contáctanos para diseñar una solución de hosting a medida para tu empresa.
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
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
                >
                  Ver todos los servicios
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
      <PopupWidget />
    </>
  );
};

export default Hosting;