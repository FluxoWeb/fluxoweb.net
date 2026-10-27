// Sistemas en producción. Fuente única para la home, el carrusel y /productos.
// `own: true` = producto propio de Fluxo. `partner: true` = desarrollado por Fluxo para un cliente,
// que es dueño del producto; Fluxo sigue asociado como socio tecnológico. `client: true` = desarrollado
// para un cliente, sin sociedad. (Confirmado por el equipo.)
// `featured: true` = una de las 3 tarjetas de la home ("Ideas que se convierten en proyectos").
// `image` es una captura estática en /public/img/proyectos (generada con playwright-cli).

export const projects = [
  {
    slug: "quiro-ai",
    name: "Quiro",
    kind: "IA generativa",
    description: "Autoconocimiento con IA generativa y biometría proyectiva.",
    url: "https://quiro-ai.com/",
    image: "/img/proyectos/quiro-ai.jpg",
    featured: true,
    partner: true,
  },
  {
    slug: "millonai",
    name: "MillonAI",
    kind: "IA + WhatsApp",
    description: "Finanzas personales desde WhatsApp: registrás gastos con un texto, un audio o una foto.",
    url: "https://millonai.com.py/",
    image: "/img/proyectos/millonai.jpg",
    featured: true,
    partner: true,
  },
  {
    slug: "redfin",
    name: "Redfin",
    kind: "Financiamiento para empresas",
    description: "Descuento de facturas y créditos revolventes para empresas, con solicitud 100 % en línea.",
    url: "https://redfin.com.py/",
    image: "/img/proyectos/redfin.jpg",
    partner: true,
  },
  {
    slug: "zap-pulse",
    name: "Zap Pulse",
    kind: "Asistente de ventas con IA",
    description: "Contesta a tus clientes por WhatsApp en segundos: responde precios, toma pedidos y agenda turnos, incluso de noche.",
    url: "https://zap-pulse.fluxoweb.app/",
    image: "/img/proyectos/zap-pulse.jpg",
    own: true,
  },
  {
    slug: "ogady",
    name: "Ogady",
    kind: "Directorio de locales",
    description: "Encontrá restaurantes, bares, cafés y más negocios de Paraguay, por categoría y por ciudad.",
    url: "https://ogady.app/",
    image: "/img/proyectos/ogady.jpg",
    own: true,
  },
  {
    slug: "nova-erp",
    name: "Nova",
    kind: "Gestión comercial",
    description: "Ventas, inventario, caja y presupuestos para comercios y PyMEs.",
    url: "https://nova.fluxoweb.app/",
    image: "/img/proyectos/nova-erp.jpg",
    own: true,
  },
  {
    slug: "pro-aqua",
    name: "Pro-Aqua",
    kind: "Comercio electrónico",
    description: "Tienda en línea de sistemas de limpieza con filtro de agua.",
    url: "https://pro-aqua.com.py/",
    image: "/img/proyectos/pro-aqua.jpg",
    featured: true,
    client: true,
  },
  {
    slug: "ventaflow",
    name: "VentaFlow",
    kind: "Ventas por WhatsApp",
    description: "Convierte el chat de WhatsApp en un sistema de ventas con catálogo propio.",
    url: "https://ventaflow.fluxoweb.net/",
    image: "/img/proyectos/ventaflow.jpg",
    own: true,
  },
  {
    slug: "bruno-info-sorteos",
    name: "BrunoInfo Sorteos",
    kind: "Tiempo real",
    description: "Sorteos en vivo con cuenta regresiva y participación en línea.",
    url: "https://brunoinfosorteos.fluxoweb.app/",
    image: "/img/proyectos/bruno-info-sorteos.jpg",
    partner: true,
  },
  {
    slug: "mase-pasteleria",
    name: "Masé",
    kind: "Gestión de pedidos",
    description: "Pedidos, fechas y avisos por WhatsApp para pastelerías.",
    url: "https://masepasteleria.fluxoweb.net/",
    image: "/img/proyectos/mase-pasteleria.jpg",
    own: true,
  },
  {
    slug: "esmalt",
    name: "Esmalté",
    kind: "Reservas y pagos",
    description: "Reservas y pagos automáticos para nail artists.",
    url: "https://esmalt.fluxoweb.net/",
    image: "/img/proyectos/esmalt.jpg",
    own: true,
  },
];

export const relationLabel = (p) =>
  p.own ? "Producto propio" : p.partner ? "Socio tecnológico" : p.client ? "Cliente" : null;

export const hostOf = (url) => new URL(url).hostname.replace(/^www\./, "");
