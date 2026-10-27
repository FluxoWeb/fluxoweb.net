import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import Container from "./container";
import { BrandLogo } from "./navbar";
import { WHATSAPP_URL } from "./ui";

// Productos y Hosting no están en el menú principal: el footer los mantiene accesibles.
const site = [
  { title: "Soluciones", link: "/servicios" },
  { title: "Proyectos", link: "/#proyectos" },
  { title: "Productos", link: "/productos" },
  { title: "Hosting", link: "/hosting" },
  { title: "Nosotros", link: "/empresa" },
  { title: "Carta de presentación", link: "/presentacion" },
];

const legal = [
  { title: "Privacidad", link: "/privacidad" },
  { title: "Términos", link: "/terminos" },
  { title: "Legal", link: "/legal" },
];

const social = [
  { title: "Facebook", href: "https://www.facebook.com/FluxoWeb.Py", icon: Facebook },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/oscar-ramirez-85bb71b0", icon: Linkedin },
];

const linkClass = "text-[15px] text-night-muted transition-colors hover:text-night-ink";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night text-night-ink">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Fluxo Web, inicio">
              <BrandLogo />
            </Link>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-relaxed text-night-muted">
              Transformamos tus ideas y desafíos en soluciones tecnológicas.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Sitio">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {site.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Legal y contacto">
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <ul className="flex gap-2 md:col-span-2 md:justify-end">
            {social.map(({ title, href, icon: Icon }) => (
              <li key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-control border border-white/15 text-night-muted transition-colors hover:border-green hover:text-green"
                >
                  <span className="sr-only">{title}</span>
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2019–{new Date().getFullYear()} Fluxo Web Group E.A.S.</p>
          <p>Ciudad del Este · Paraguay</p>
        </div>
      </Container>
    </footer>
  );
}
