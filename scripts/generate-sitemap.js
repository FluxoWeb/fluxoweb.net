// Genera public/sitemap.xml a partir de las páginas reales del sitio.
// Corre solo antes de cada build (script "prebuild" en package.json), así que una página
// o un socio nuevo entran al sitemap sin editar el XML a mano.
//
// - Rutas estáticas: cada archivo .js dentro de pages/.
// - /empresa/[slug]: un perfil por cada archivo de data/members/ (menos index.js).
// - Se excluyen las páginas internas de Next, la API, la 404 y toda página marcada con "noindex".

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://fluxoweb.net";
const ROOT = path.join(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "pages");
const MEMBERS_DIR = path.join(ROOT, "data", "members");
const OUTPUT = path.join(ROOT, "public", "sitemap.xml");

const EXCLUDED = new Set(["/_app", "/_document", "/_error", "/404", "/500"]);

function listPages(dir, base = "") {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return entry.name === "api" ? [] : listPages(full, `${base}/${entry.name}`);
    }
    if (!entry.name.endsWith(".js")) return [];
    const name = entry.name.replace(/\.js$/, "");
    const route = name === "index" ? base || "/" : `${base}/${name}`;
    return [{ route, file: full }];
  });
}

function memberRoutes() {
  return fs
    .readdirSync(MEMBERS_DIR)
    .filter((f) => f.endsWith(".js") && f !== "index.js")
    .map((f) => `/empresa/${f.replace(/\.js$/, "")}`);
}

const routes = listPages(PAGES_DIR).flatMap(({ route, file }) => {
  if (EXCLUDED.has(route)) return [];
  if (fs.readFileSync(file, "utf8").includes("noindex")) return [];
  if (route === "/empresa/[slug]") return memberRoutes();
  if (route.includes("[")) {
    throw new Error(`Ruta dinámica sin regla en el sitemap: ${route}. Agrega cómo listar sus páginas.`);
  }
  return [route];
});

// La portada primero; el resto en orden alfabético para que el archivo sea estable entre builds.
const sorted = [...new Set(routes)].sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sorted.map((route) => `  <url>\n    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>\n  </url>`),
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(OUTPUT, xml);
console.log(`sitemap.xml: ${sorted.length} páginas`);
