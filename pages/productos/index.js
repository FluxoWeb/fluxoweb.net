import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import { Users, Building2, BarChart3, FileText, ShoppingCart, Warehouse, MessageCircle, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";

const productos = [
  {
    nombre: "FluxoCRM",
    subtitulo: "Sistema de Gestión de Clientes",
    descripcion: "Gestiona tus relaciones con clientes de manera eficiente. Centraliza contactos, oportunidades de venta, seguimiento de leads y automatiza tu proceso comercial.",
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
    destacado: true,
    link: "/productos/fluxocrm",
  },
  {
    nombre: "ERPNext",
    subtitulo: "Sistema ERP by Frappe",
    descripcion: "Solución empresarial completa para gestionar todos los procesos de tu negocio: contabilidad, inventario, compras, ventas, recursos humanos y más.",
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
    destacado: false,
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
  {
    icono: Zap,
    titulo: "Implementación rápida",
    descripcion: "Configuramos tu sistema en días, no meses.",
  },
  {
    icono: Shield,
    titulo: "Datos seguros",
    descripcion: "Hosting en la nube con backups automáticos.",
  },
  {
    icono: Clock,
    titulo: "Soporte continuo",
    descripcion: "Asistencia técnica y actualizaciones incluidas.",
  },
];

const Productos = () => {
  return (
    <>
      <Head>
        <title>Productos - Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="Sistemas de gestión empresarial: FluxoCRM para gestión de clientes y ERPNext para administración completa de tu negocio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Nuestros Productos
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Sistemas de gestión para tu empresa
            </h1>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Soluciones de software probadas y escalables para optimizar los procesos de tu negocio, desde la gestión de clientes hasta la administración empresarial completa.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {productos.map((producto, index) => {
              const IconComponent = producto.icono;
              const colorClasses = producto.color === "indigo" 
                ? "bg-indigo-50 dark:bg-indigo-950 border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400"
                : "bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-900 text-green-600 dark:text-green-400";
              const badgeColor = producto.color === "indigo"
                ? "bg-indigo-600"
                : "bg-green-600";
              
              return (
                <div
                  key={index}
                  className={`relative p-6 md:p-8 rounded-xl border ${
                    producto.destacado
                      ? "border-indigo-300 dark:border-indigo-700"
                      : "border-gray-200 dark:border-gray-800"
                  } bg-white dark:bg-gray-900/50`}
                >
                  {producto.destacado && (
                    <span className={`absolute -top-3 left-6 inline-flex items-center rounded-full ${badgeColor} px-3 py-1 text-xs font-medium text-white`}>
                      Desarrollado por Fluxo Web
                    </span>
                  )}
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl border ${colorClasses}`}>
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{producto.nombre}</h2>
                      <p className={`text-sm font-medium ${producto.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" : "text-green-600 dark:text-green-400"}`}>
                        {producto.subtitulo}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {producto.descripcion}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {producto.caracteristicas.map((caracteristica, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className={`h-4 w-4 flex-shrink-0 ${producto.color === "indigo" ? "text-indigo-500" : "text-green-500"}`} />
                        <span>{caracteristica}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {producto.link && (
                      <Link
                        href={producto.link}
                        className={`inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-md transition-colors ${
                          producto.color === "indigo"
                            ? "text-white bg-indigo-600 hover:bg-indigo-700"
                            : "text-white bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        Ver planes
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    <Link
                      href="https://wa.link/18ywdk"
                      className={`inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-md transition-colors ${
                        producto.link
                          ? "text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                          : producto.color === "indigo"
                            ? "text-white bg-indigo-600 hover:bg-indigo-700"
                            : "text-white bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Solicitar demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ERPNext Modules */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 mb-4">
              ERPNext
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Módulos incluidos en ERPNext
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Una suite completa de herramientas empresariales integradas en una sola plataforma.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {modulosERP.map((modulo, index) => {
              const IconComponent = modulo.icono;
              return (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-900">
                    <IconComponent className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{modulo.nombre}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{modulo.descripcion}</p>
                  </div>
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
              ¿Por qué elegirnos?
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-6 py-12 md:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                ¿Necesitas una solución personalizada?
              </h2>
              <p className="mt-4 text-base text-indigo-100">
                Podemos adaptar nuestros productos a las necesidades específicas de tu empresa o desarrollar un sistema completamente nuevo.
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
                  Ver servicios
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

export default Productos;