const member = {
  slug: "armando-diarte",
  name: "Armando Manuel Diarte Velázquez",
  initials: "AD",
  role: "Socio & Desarrollador Full Stack",
  color: "cyan",
  photo: "/armando.png",
  location: "Minga Guazú, Paraguay",
  contact: {
    whatsapp: "",
    email: "diartearmando@gmail.com",
    github: "https://github.com/Diarte10",
    linkedin: "https://www.linkedin.com/in/armando-manuel-diarte-vel%C3%A1zquez-59aa0b192/",
  },
  bio: "Desarrollador Full Stack enfocado en la construcción de sistemas empresariales, combinando backend sólido con interfaces funcionales y bien integradas. Trabajo con .NET, PostgreSQL, React y tecnologías orientadas a resolver procesos reales de negocio. Como socio en FluxoWeb, lidero el desarrollo de soluciones críticas que incluyen módulos administrativos, financieros y operativos. Mi trabajo abarca desde la arquitectura de APIs y automatización de procesos hasta la integración de servicios externos y generación de reportes avanzados. Enfoque pragmático: software mantenible, claro y con utilidad real.",
  skills: [
    {
      category: "Backend",
      items: [".NET / ASP.NET Core", "Entity Framework Core", "APIs REST", "OData", "Background Workers"],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Razor Views", "DataTables", "Chart.js", "Tailwind CSS"],
    },
    {
      category: "Bases de datos",
      items: ["PostgreSQL", "T-SQL / PL/pgSQL"],
    },
    {
      category: "Infraestructura",
      items: ["Linux / systemd", "Azure Storage", "Docker", "Integración de APIs externas"],
    },
  ],
  projects: [
    {
      title: "Motor de Inventarios Empresarial",
      description: "Sistema de alta disponibilidad para gestión de stocks en múltiples ubicaciones. Reconciliación automática de inventarios y exportaciones asíncronas de grandes volúmenes de datos para una empresa logística con necesidad de control en tiempo real.",
      url: null,
      tags: [".NET Core", "PostgreSQL", "Background Workers", "Docker"],
      year: "2024",
      featured: true,
    },
    {
      title: "Pipeline de Datos Financieros",
      description: "Módulo automatizado para el procesamiento masivo de transacciones. Integración con APIs de CRMs y Google Sheets para dashboards operativos en tiempo real, eliminando horas de trabajo manual y errores humanos.",
      url: null,
      tags: ["EF Core", "Chart.js", "PostgreSQL", "CRM API"],
      year: "2023",
      featured: true,
    },
    {
      title: "Middleware de Integración CRM",
      description: "Capa de conexión robusta entre sistemas legacy y CRMs externos. Maneja colas de mensajes y servicios gestionados por systemd en servidores Linux, resolviendo la fragmentación entre sistemas que duplicaban el trabajo.",
      url: null,
      tags: ["ASP.NET", "systemd", "Linux", "Async Queue"],
      year: "2023",
    },
    {
      title: "Portal de Inteligencia de Negocios",
      description: "Dashboard administrativo multi-tenant para gestión interna de múltiples sucursales. Optimización de consultas SQL complejas en PostgreSQL y renderizado de alto rendimiento con Razor Views y DataTables.",
      url: null,
      tags: ["Razor Views", "DataTables", "PostgreSQL", "SQL Opt."],
      year: "2022",
      featured: true,
    },
    {
      title: "Fluxo Web — Sitio Oficial",
      description: "Rediseño y desarrollo completo del sitio institucional de Fluxo Web Group E.A.S. con Next.js, Tailwind CSS, soporte de dark mode y arquitectura de páginas dinámicas.",
      url: "https://fluxoweb.net",
      tags: ["Next.js", "Tailwind CSS", "Dark Mode"],
    },
  ],
  experience: [
    {
      year: "2026",
      title: "Socio & Desarrollador Full Stack",
      company: "Fluxo Web Group E.A.S.",
      description: "Desarrollo de soluciones empresariales críticas: módulos administrativos, financieros y operativos. Arquitectura de APIs, automatización de procesos e integración de servicios externos. Trabajo en backend y frontend buscando que cada parte del sistema tenga sentido técnico y utilidad real.",
    },
  ],
  education: [
    {
      year: "En curso",
      title: "Ingeniería Informática",
      institution: "Universidad — Paraguay",
    },
  ],
};

export default member;
