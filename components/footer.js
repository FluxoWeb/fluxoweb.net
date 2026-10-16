import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import Container from "./container";
import { navigation } from "./navbar";
import { WHATSAPP_URL } from "./ui";

const legal = [
  { title: "Términos", link: "/terminos" },
  { title: "Privacidad", link: "/privacidad" },
  { title: "Legal", link: "/legal" },
];

const social = [
  { title: "Facebook", href: "https://www.facebook.com/FluxoWeb.Py", icon: Facebook },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/oscar-ramirez-85bb71b0", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line/15 sm:mt-32">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/img/Brain.png" alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="text-lg font-medium tracking-tight">Fluxo Web</span>
            </Link>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-muted">
              Desarrollo, infraestructura y soporte de software para PyMEs en Paraguay y la región.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-green-ink underline-offset-[6px] hover:underline"
            >
              Escríbenos por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <nav className="md:col-span-2" aria-label="Sitio">
            <h3 className="text-[13px] font-medium text-muted">Sitio</h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="text-[15px] transition-colors hover:text-green-ink">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/presentacion" className="text-[15px] transition-colors hover:text-green-ink">
                  Carta de presentación
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Legal">
            <h3 className="text-[13px] font-medium text-muted">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="text-[15px] transition-colors hover:text-green-ink">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-[13px] font-medium text-muted">Redes</h3>
            <ul className="mt-4 flex gap-2">
              {social.map(({ title, href, icon: Icon }) => (
                <li key={title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line/15 text-muted transition-colors hover:border-green hover:text-green-ink"
                  >
                    <span className="sr-only">{title}</span>
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/15 pt-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2019–{new Date().getFullYear()} Fluxo Web Group E.A.S.</p>
          <p>Ciudad del Este, Paraguay</p>
        </div>
      </Container>
    </footer>
  );
}
