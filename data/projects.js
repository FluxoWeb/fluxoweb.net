// Proyectos reales en producción. Fuente única para la home y /productos.
// `image` es una captura estática en /public/img/proyectos (generada con playwright-cli).

export const projects = [
  {
    slug: "quiro-ai",
    name: "Quiro",
    kind: "IA generativa",
    description: "Autoconocimiento con IA generativa y biometría proyectiva.",
    url: "https://quiro-ai.com/",
    image: "/img/proyectos/quiro-ai.jpg",
  },
  {
    slug: "millonai",
    name: "MillonAI",
    kind: "IA + WhatsApp",
    description: "Finanzas personales desde WhatsApp: registra gastos con un texto, un audio o una foto.",
    url: "https://millonai.com.py/",
    image: "/img/proyectos/millonai.jpg",
  },
  {
    slug: "nova-erp",
    name: "Nova",
    kind: "Gestión comercial",
    description: "Ventas, inventario, caja y presupuestos para comercios y PyMEs.",
    url: "https://nova.fluxoweb.app/",
    image: "/img/proyectos/nova-erp.jpg",
  },
  {
    slug: "pro-aqua",
    name: "Pro-Aqua",
    kind: "Comercio electrónico",
    description: "Tienda en línea de sistemas de limpieza con filtro de agua.",
    url: "https://pro-aqua.com.py/",
    image: "/img/proyectos/pro-aqua.jpg",
  },
  {
    slug: "ventaflow",
    name: "VentaFlow",
    kind: "Ventas por WhatsApp",
    description: "Convierte el chat de WhatsApp en un sistema de ventas con catálogo propio.",
    url: "https://ventaflow.fluxoweb.net/",
    image: "/img/proyectos/ventaflow.jpg",
  },
  {
    slug: "bruno-info-sorteos",
    name: "BrunoInfo Sorteos",
    kind: "Tiempo real",
    description: "Sorteos en vivo con cuenta regresiva y participación en línea.",
    url: "https://brunoinfosorteos.fluxoweb.app/",
    image: "/img/proyectos/bruno-info-sorteos.jpg",
  },
  {
    slug: "mase-pasteleria",
    name: "Masé",
    kind: "Gestión de pedidos",
    description: "Pedidos, fechas y avisos por WhatsApp para pastelerías.",
    url: "https://masepasteleria.fluxoweb.net/",
    image: "/img/proyectos/mase-pasteleria.jpg",
  },
  {
    slug: "esmalt",
    name: "Esmalté",
    kind: "Reservas y pagos",
    description: "Reservas y pagos automáticos para nail artists.",
    url: "https://esmalt.fluxoweb.net/",
    image: "/img/proyectos/esmalt.jpg",
  },
];

export const hostOf = (url) => new URL(url).hostname.replace(/^www\./, "");
