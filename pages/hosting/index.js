import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import { Disclosure, Transition } from "@headlessui/react";
import {
  Cloud, Check, Server, Shield, Zap, Clock, HardDrive,
  MessageCircle, ArrowRight, ChevronDown,
} from "lucide-react";

const planes = [
  {
    nombre: "Hobby",
    descripcion: "Proyectos personales y pruebas de concepto.",
    precio: "15",
    moneda: "USD",
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
    descripcion: "Para startups y proyectos en crecimiento.",
    precio: "45",
    moneda: "USD",
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
    descripcion: "Empresas con alta demanda y SLA garantizado.",
    precio: "120",
    moneda: "USD",
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
  { icono: Zap, titulo: "Alto rendimiento", descripcion: "Servidores SSD NVMe para máxima velocidad de respuesta." },
  { icono: Shield, titulo: "Seguridad avanzada", descripcion: "Firewall, DDoS protection y SSL incluidos en todos los planes." },
  { icono: Clock, titulo: "99.9% Uptime", descripcion: "Infraestructura redundante con disponibilidad garantizada." },
  { icono: HardDrive, titulo: "Backups automáticos", descripcion: "Copias de seguridad con restauración en un clic." },
];

const faqHosting = [
  { pregunta: "¿Puedo migrar mi sitio existente?", respuesta: "Sí, ofrecemos migración gratuita para todos los planes. Nuestro equipo se encarga del proceso sin tiempo de inactividad." },
  { pregunta: "¿Qué tecnologías soportan?", respuesta: "Soportamos Node.js, PHP, Python, Ruby, MySQL, PostgreSQL, MongoDB y más. Evaluamos cada caso para la mejor configuración." },
  { pregunta: "¿Puedo escalar mi plan?", respuesta: "Sí, podés actualizar en cualquier momento sin inactividad. Los cambios se aplican de inmediato." },
  { pregunta: "¿Qué pasa si supero el límite de transferencia?", respuesta: "Te notificamos antes de llegar al límite. Podés upgradar o contratar transferencia adicional sin interrupciones." },
];

const Hosting = () => {
  return (
    <>
      <Head>
        <title>Hosting Cloud — Fluxo Web Group E.A.S.</title>
        <meta name="description" content="Hosting cloud seguro y escalable para tus aplicaciones. Planes desde $15/mes con SSL gratuito, backups y soporte técnico." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 -z-10" />
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              <Cloud className="h-3 w-3" />
              Hosting Cloud
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl leading-tight">
              Tu app en la nube, sin preocupaciones
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Infraestructura de alto rendimiento con seguridad empresarial, backups automáticos y soporte técnico real. Vos te enfocás en tu producto, nosotros en el servidor.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              {["SSL gratuito", "99.9% uptime", "Backups diarios", "Migración incluida"].map((f) => (
                <div key={f} className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <Check className="h-4 w-4 text-green-500" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Planes y precios
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Sin contratos de permanencia. Cancelá cuando quieras.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto items-stretch">
            {planes.map((plan) => (
              <div
                key={plan.nombre}
                className={`relative flex flex-col rounded-2xl border transition-all ${
                  plan.destacado
                    ? "border-indigo-500 dark:border-indigo-500 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-500/5 scale-[1.02]"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                }`}
              >
                {plan.destacado && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-50/80 to-white dark:from-indigo-950/40 dark:to-gray-900 -z-10" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
                        Más popular
                      </span>
                    </div>
                  </>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.nombre}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.descripcion}</p>
                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">{plan.moneda}</span>
                      <span className="text-4xl font-bold text-gray-900 dark:text-white leading-none">{plan.precio}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">{plan.periodo}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-2.5 mb-8">
                    {plan.caracteristicas.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                        <Check className={`h-4 w-4 flex-shrink-0 ${plan.destacado ? "text-indigo-500" : "text-green-500"}`} />
                        {c}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="https://wa.link/18ywdk"
                    className={`w-full inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-lg transition-colors ${
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

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                Por qué elegirnos
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl mb-4">
                Infraestructura diseñada para el trabajo real
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                No revendemos hosting genérico. Cada servidor está configurado y monitoreado por nuestro equipo, con foco en performance y disponibilidad.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {beneficios.map((b) => {
                const Icon = b.icono;
                return (
                  <div key={b.titulo} className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                      <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{b.titulo}</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{b.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Preguntas frecuentes</h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              {faqHosting.map((item) => (
                <Disclosure key={item.pregunta}>
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                        <span>{item.pregunta}</span>
                        <ChevronDown className={`${open ? "rotate-180" : ""} h-4 w-4 text-gray-500 flex-shrink-0 ml-4 transition-transform duration-200`} />
                      </Disclosure.Button>
                      <Transition enter="transition duration-100 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="transition duration-75 ease-out" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Disclosure.Panel className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.respuesta}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-8 py-12 md:px-14 md:py-16">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <Server className="h-9 w-9 text-indigo-300 mb-4" />
                <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Necesitás un plan a medida?</h2>
                <p className="mt-2 text-indigo-100 max-w-lg">
                  Si tus necesidades no encajan en los planes estándar, diseñamos una solución de infraestructura personalizada para tu empresa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link href="https://wa.link/18ywdk" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors whitespace-nowrap">
                  <MessageCircle className="h-4 w-4" />
                  Hablar con el equipo
                </Link>
                <Link href="/servicios" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap">
                  Ver todos los servicios
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
    </>
  );
};

export default Hosting;
