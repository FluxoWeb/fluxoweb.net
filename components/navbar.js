import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "./container";
import { WHATSAPP_URL } from "./ui";

// Navegación del documento de diseño: tres enlaces en lenguaje de cliente y un CTA.
// Productos, Hosting y el resto viven en el footer.
export const navigation = [
  { title: "Soluciones", link: "/servicios" },
  { title: "Proyectos", link: "/#proyectos" },
  { title: "Nosotros", link: "/empresa" },
];

// Marca: el símbolo original (cerebro/nube con circuitos) + FLUXO WEB en mayúsculas espaciadas.
export function BrandLogo({ size = 40, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image src="/img/Brain.png" alt="" width={size} height={size} className="shrink-0" style={{ width: size, height: size }} />
      <span className="text-[15px] font-medium uppercase tracking-[0.28em]">Fluxo Web</span>
    </span>
  );
}

const Navbar = () => {
  const { pathname } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (link) => !link.includes("#") && (pathname === link || pathname.startsWith(`${link}/`));

  return (
    <Disclosure
      as="header"
      className={`fixed inset-x-0 top-0 z-50 border-b text-night-ink transition-colors duration-300 ${
        scrolled ? "border-white/10 bg-night/95 backdrop-blur-md" : "border-transparent bg-night/0"
      }`}
    >
      {({ open, close }) => (
        <>
          <Container as="nav" className="flex h-[72px] items-center justify-between gap-6" aria-label="Principal">
            <Link href="/" onClick={() => close()} aria-label="Fluxo Web, inicio">
              <BrandLogo />
            </Link>

            <div className="hidden items-center gap-10 lg:flex">
              <ul className="flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      aria-current={isActive(item.link) ? "page" : undefined}
                      className={`text-[15px] transition-colors ${
                        isActive(item.link) ? "text-night-ink" : "text-night-muted hover:text-night-ink"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-control bg-green px-5 text-[15px] font-medium text-[#0B0B0B] transition-colors hover:bg-[#3BE07D]"
              >
                Hablemos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
            </div>

            <Disclosure.Button className="grid h-11 w-11 place-items-center rounded-control border border-white/15 transition-colors hover:bg-white/10 lg:hidden">
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Disclosure.Button>
          </Container>

          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="border-t border-white/10 bg-night lg:hidden">
              <Container className="py-4">
                <ul className="divide-y divide-white/10">
                  {navigation.map((item) => (
                    <li key={item.title}>
                      <Disclosure.Button
                        as={Link}
                        href={item.link}
                        aria-current={isActive(item.link) ? "page" : undefined}
                        className="flex items-center justify-between py-4 text-2xl font-medium tracking-tight"
                      >
                        {item.title}
                        {isActive(item.link) && <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />}
                      </Disclosure.Button>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex h-14 items-center justify-center gap-2 rounded-control bg-green text-[16px] font-medium text-[#0B0B0B]"
                >
                  Hablemos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Container>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
