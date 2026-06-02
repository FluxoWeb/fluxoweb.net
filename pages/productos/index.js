import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import {
  Users, Building2, BarChart3, FileText, ShoppingCart, Warehouse,
  MessageCircle, ArrowRight, Check, Zap, Shield, Clock,
} from "lucide-react";

const productos = [
  {
    nombre: "FluxoCRM",
    subtitulo: "Sistema de Gestión de Clientes",
    descripcion: "Centraliza contactos, oportunidades de venta y comunicaciones. Automatizá tu proceso comercial y cerrá más ventas con menos esfuerzo.",
    icono: Users,
    color: "indigo",
    caracteristicas: [
      "Gestión de contactos y empresas",
      "Pipeline de ventas visual",
      "Seguimiento de oportunidades",
      "Automatización de tareas",
      "Reportes y dashboards",
      "Integración con email",
    ],
    desarrolladoPor: "Fluxo Web",
    link: "/productos/fluxocrm",
    ctaLabel: "Ver planes",
  },
  {
    nombre: "ERPNext",
    subtitulo: "Sistema ERP empresarial",
    descripcion: "Solución completa para gestionar todos los procesos de tu empresa: contabilidad, inventario, compras, ventas, recursos humanos y más.",
    icono: Building2,
    color: "green",
    caracteristicas: [
      "Contabilidad y finanzas",
      "Gestión de inventario",
      "Compras y proveedores",
      "Ventas y facturación",
      "Recursos humanos",
      "Manufactura y producción",
    ],
    desarrolladoPor: "Frappe Technologies",
    link: null,
    ctaLabel: "Solicitar demo",
  },
];

const modulosERP = [
  { icono: BarChart3, nombre: "Contabilidad", descripcion: "Gestión financiera completa" },
  { icono: Warehouse, nombre: "Inventario", descripcion: "Control de stock en tiempo real" },
  { icono: ShoppingCart, nombre: "Ventas", descripcion: "Facturación y cotizaciones" },
  { icono: FileText, nombre: "Compras", descripcion: "Órdenes y proveedores" },
  { icono: Users, nombre: "RRHH", descripcion: "Nómina y empleados" },
  { icono: Building2, nombre: "Manufactura", descripcion: "Producción y BOM" },
];

const beneficios = [
  { icono: Zap, titulo: "Implementación rápida", descripcion: "Tu sistema listo en días, no meses. Configuramos, migramos y capacitamos a tu equipo." },
  { icono: Shield, titulo: "Datos seguros", descripcion: "Hosting en la nube con backups automáticos y encriptación de datos en todo momento." },
  { icono: Clock, titulo: "Soporte continuo", descripcion: "Asistencia técnica, actualizaciones y mejoras incluidas según el plan contratado." },
];

const Productos = () => {
  return (
    <>
      <Head>
        <title>Productos — Fluxo Web Group E.A.S.</title>
        <meta name="description" content="FluxoCRM y ERPNext: sistemas de gestión empresarial para optimizar las operaciones de tu negocio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 -z-10" />
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Productos
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl leading-tight">
              Sistemas listos para usar en tu empresa
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Soluciones de gestión probadas y escalables para optimizar tus procesos. Implementamos, configuramos y capacitamos a tu equipo.
            </p>
          </div>
        </Container>
      </section>

      {/* Productos */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-8">
            {productos.map((producto, index) => {
              const Icon = producto.icono;
              const isIndigo = producto.color === "indigo";
              return (
                <div
                  key={producto.nombre}
                  className={`relative overflow-hidden rounded-2xl border ${
                    isIndigo
                      ? "border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900/80"
                      : "border-green-200 dark:border-green-900 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900/80"
                  }`}
                >
                  {/* Decorative background circle */}
                  <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4 ${isIndigo ? "bg-indigo-300 dark:bg-indigo-700" : "bg-green-300 dark:bg-green-700"}`} />

                  <div className="relative z-10 p-8 md:p-10">
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                        isIndigo
                          ? "bg-indigo-100 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300"
                          : "bg-green-100 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
                      }`}>
                        Desarrollado por {producto.desarrolladoPor}
                      </span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                      {/* Info */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`flex items-center justify-center h-14 w-14 rounded-2xl border ${
                            isIndigo
                              ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700"
                              : "bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700"
                          }`}>
                            <Icon className={`h-7 w-7 ${isIndigo ? "text-indigo-600 dark:text-indigo-400" : "text-green-600 dark:text-green-400"}`} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{producto.nombre}</h2>
                            <p className={`text-sm font-medium ${isIndigo ? "text-indigo-600 dark:text-indigo-400" : "text-green-600 dark:text-green-400"}`}>
                              {producto.subtitulo}
                            </p>
                          </div>
                        </div>
                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                          {producto.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {producto.link ? (
                            <Link
                              href={producto.link}
                              className={`inline-flex items-center gap-2 h-10 px-5 text-sm font-medium rounded-lg transition-colors text-white ${isIndigo ? "bg-indigo-600 hover:bg-indigo-700" : "bg-green-600 hover:bg-green-700"}`}
                            >
                              {producto.ctaLabel}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          ) : null}
                          <Link
                            href="https://wa.link/18ywdk"
                            className="inline-flex items-center gap-2 h-10 px-5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Solicitar demo
                          </Link>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {producto.caracteristicas.map((c) => (
                          <div key={c} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                            <Check className={`h-4 w-4 flex-shrink-0 ${isIndigo ? "text-indigo-500" : "text-green-500"}`} />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Módulos ERPNext */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 mb-4">
              ERPNext
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Módulos incluidos
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Una suite empresarial completa en una sola plataforma. Todos los módulos están integrados y comparten los mismos datos en tiempo real.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {modulosERP.map((modulo) => {
              const Icon = modulo.icono;
              return (
                <div key={modulo.nombre} className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-900">
                    <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{modulo.nombre}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{modulo.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                ¿Por qué elegirnos?
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl mb-4">
                No solo entregamos software, acompañamos el proceso
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Desde la configuración inicial hasta la capacitación de tu equipo y el soporte post-implementación. Cada proyecto es una relación a largo plazo.
              </p>
            </div>
            <div className="space-y-4">
              {beneficios.map((b) => {
                const Icon = b.icono;
                return (
                  <div key={b.titulo} className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                      <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{b.titulo}</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{b.descripcion}</p>
                    </div>
                  </div>
                );
              })}
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
                <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Necesitás algo más específico?</h2>
                <p className="mt-2 text-indigo-100 max-w-lg">
                  Podemos adaptar estos productos o desarrollar un sistema completamente nuevo a medida de tus procesos.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link href="https://wa.link/18ywdk" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors whitespace-nowrap">
                  <MessageCircle className="h-4 w-4" />
                  Consultar ahora
                </Link>
                <Link href="/servicios" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap">
                  Ver servicios
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

export default Productos;
