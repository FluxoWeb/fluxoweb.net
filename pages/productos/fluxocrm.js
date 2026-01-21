import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import { Users, Check, MessageCircle, ArrowRight, Zap, Shield, Clock, BarChart3, Mail, Phone, Calendar, Target, TrendingUp, Database } from "lucide-react";

const planes = [
  {
    nombre: "Starter",
    descripcion: "Ideal para emprendedores y pequeños equipos de ventas.",
    precio: "25",
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      "Hasta 500 contactos",
      "2 usuarios",
      "Pipeline de ventas básico",
      "Gestión de tareas",
      "Historial de actividades",
      "Soporte por email",
    ],
  },
  {
    nombre: "Professional",
    descripcion: "Para equipos en crecimiento que necesitan más potencia.",
    precio: "65",
    periodo: "/mes",
    destacado: true,
    caracteristicas: [
      "Hasta 5,000 contactos",
      "10 usuarios",
      "Múltiples pipelines",
      "Automatización de tareas",
      "Reportes avanzados",
      "Integración con email",
      "API de acceso",
      "Soporte prioritario",
    ],
  },
  {
    nombre: "Enterprise",
    descripcion: "Solución completa para empresas con alta demanda.",
    precio: "150",
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      "Contactos ilimitados",
      "Usuarios ilimitados",
      "Pipelines ilimitados",
      "Automatización avanzada",
      "Dashboards personalizados",
      "Integraciones premium",
      "API sin límites",
      "Soporte 24/7",
      "Capacitación incluida",
    ],
  },
];

const funcionalidades = [
  {
    icono: Users,
    titulo: "Gestión de Contactos",
    descripcion: "Centraliza toda la información de tus clientes y prospectos en un solo lugar.",
  },
  {
    icono: Target,
    titulo: "Pipeline de Ventas",
    descripcion: "Visualiza y gestiona tu embudo de ventas con tableros Kanban intuitivos.",
  },
  {
    icono: Calendar,
    titulo: "Seguimiento de Actividades",
    descripcion: "Programa llamadas, reuniones y tareas con recordatorios automáticos.",
  },
  {
    icono: Mail,
    titulo: "Integración de Email",
    descripcion: "Conecta tu correo y registra automáticamente las comunicaciones.",
  },
  {
    icono: BarChart3,
    titulo: "Reportes y Analytics",
    descripcion: "Dashboards en tiempo real para medir el rendimiento de tu equipo.",
  },
  {
    icono: TrendingUp,
    titulo: "Automatización",
    descripcion: "Automatiza tareas repetitivas y enfócate en cerrar más ventas.",
  },
];

const beneficios = [
  {
    icono: Zap,
    titulo: "Implementación en 24h",
    descripcion: "Tu CRM listo para usar en menos de un día.",
  },
  {
    icono: Shield,
    titulo: "Datos seguros",
    descripcion: "Encriptación y backups automáticos diarios.",
  },
  {
    icono: Clock,
    titulo: "Soporte local",
    descripcion: "Equipo de soporte en tu zona horaria.",
  },
];

const FluxoCRM = () => {
  return (
    <>
      <Head>
        <title>FluxoCRM - Sistema de Gestión de Clientes | Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="FluxoCRM: Sistema de gestión de clientes desarrollado por Fluxo Web. Gestiona contactos, oportunidades y automatiza tu proceso comercial."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              <Users className="h-3 w-3 mr-1" />
              FluxoCRM
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Gestiona tus clientes de forma inteligente
            </h1>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              FluxoCRM es nuestra solución de gestión de relaciones con clientes, diseñada para ayudarte a organizar contactos, hacer seguimiento de oportunidades y cerrar más ventas.
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
                      <Check className="h-4 w-4 text-indigo-500 flex-shrink-0" />
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
                    Solicitar demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Funcionalidades
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Todo lo que necesitas para gestionar tus ventas
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {funcionalidades.map((func, index) => {
              const IconComponent = func.icono;
              return (
                <div key={index} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 mb-4">
                    <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{func.titulo}</h3>
                  <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{func.descripcion}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              ¿Por qué elegir FluxoCRM?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
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
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">¿Puedo importar mis contactos existentes?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sí, puedes importar contactos desde Excel, CSV o migrar desde otro CRM. Nuestro equipo te ayuda con el proceso.</p>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">¿Hay período de prueba?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Ofrecemos una demo personalizada y 14 días de prueba gratuita para que evalúes si FluxoCRM es ideal para tu negocio.</p>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">¿Puedo cambiar de plan?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplican de inmediato.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-6 py-12 md:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Users className="h-10 w-10 text-indigo-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                ¿Listo para mejorar tu gestión de clientes?
              </h2>
              <p className="mt-4 text-base text-indigo-100">
                Agenda una demo gratuita y descubre cómo FluxoCRM puede ayudarte a cerrar más ventas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="https://wa.link/18ywdk"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar demo
                </Link>
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
                >
                  Ver otros productos
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

export default FluxoCRM;
