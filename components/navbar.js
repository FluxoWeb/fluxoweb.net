import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import ThemeChanger from "./DarkSwitch";
import { WHATSAPP_URL } from "./ui";

// En lenguaje de cliente. Hosting no va en el menú principal (sus precios técnicos invitan a comparar):
// vive en el footer y en /servicios.
export const navigation = [
  { title: "Soluciones", link: "/servicios" },
  { title: "Casos", link: "/#casos" },
  { title: "Productos", link: "/productos" },
  { title: "Nosotros", link: "/empresa" },
];

// Navbar píldora flotante: vive dentro del marco del hero y se vuelve sólida al hacer scroll.
const Navbar = () => {
  const { pathname } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (link) => pathname === link || pathname.startsWith(`${link}/`);
  const pill = `border transition-colors duration-500 ${
    scrolled ? "border-white/10 bg-night/85 backdrop-blur-xl" : "border-white/[0.08] bg-white/[0.04] backdrop-blur-md"
  }`;

  return (
    <Disclosure as="header" className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
      {({ open, close }) => (
        <>
          <nav className="mx-auto flex items-center justify-between gap-3 px-3 pt-3 sm:px-5 sm:pt-4" aria-label="Principal">
            <Link
              href="/"
              className={`flex h-12 items-center gap-2.5 rounded-full pl-1.5 pr-4 text-night-ink ${pill}`}
              onClick={() => close()}
            >
              <Image src="/img/Brain.png" alt="" width={36} height={36} className="h-9 w-9 rounded-full" priority />
              <span className="text-[15px] font-medium tracking-tight">Fluxo Web</span>
            </Link>

            <div className={`hidden h-12 items-center gap-1 rounded-full pl-2 pr-1.5 lg:flex ${pill}`}>
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  aria-current={isActive(item.link) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                    isActive(item.link) ? "bg-white/10 text-night-ink" : "text-night-muted hover:text-night-ink"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <span className="mx-1 h-5 w-px bg-white/10" aria-hidden="true" />
              <Link
                href="/presentacion"
                className="grid h-9 w-9 place-items-center rounded-full text-night-muted transition-colors hover:bg-white/10 hover:text-night-ink"
                aria-label="Carta de presentación"
                title="Carta de presentación"
              >
                <FileText className="h-4 w-4" strokeWidth={1.8} />
              </Link>
              <ThemeChanger />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex h-9 items-center gap-1.5 rounded-full bg-green px-4 text-[14px] font-medium text-[#0B0B0B] transition-colors hover:bg-[#3BE07D]"
              >
                Hablemos
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>

            <div className={`flex h-12 items-center gap-1 rounded-full px-1.5 lg:hidden ${pill}`}>
              <ThemeChanger />
              <Disclosure.Button className="grid h-9 w-9 place-items-center rounded-full text-night-ink transition-colors hover:bg-white/10">
                <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
                {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
              </Disclosure.Button>
            </div>
          </nav>

          <Transition
            enter="transition duration-300 ease-out-expo"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="mx-3 mt-2 rounded-[24px] border border-white/10 bg-night/95 p-3 text-night-ink backdrop-blur-xl sm:mx-5 lg:hidden">
              <ul className="divide-y divide-white/10">
                {navigation.map((item) => (
                  <li key={item.title}>
                    <Disclosure.Button
                      as={Link}
                      href={item.link}
                      aria-current={isActive(item.link) ? "page" : undefined}
                      className="flex items-center justify-between px-3 py-4 text-2xl font-medium tracking-tight"
                    >
                      {item.title}
                      {isActive(item.link) && <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />}
                    </Disclosure.Button>
                  </li>
                ))}
                <li>
                  <Disclosure.Button
                    as={Link}
                    href="/presentacion"
                    className="flex items-center gap-2 px-3 py-4 text-[15px] text-night-muted"
                  >
                    <FileText className="h-4 w-4" />
                    Carta de presentación
                  </Disclosure.Button>
                </li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex h-14 items-center justify-center gap-2 rounded-full bg-green text-[15px] font-medium text-[#0B0B0B]"
              >
                Pedir un diagnóstico
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
