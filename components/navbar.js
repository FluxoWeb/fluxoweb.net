import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { MessageCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigation = [
    { title: "Servicios", link: "/servicios" },
    { title: "Productos", link: "/productos" },
    { title: "Hosting", link: "/hosting" },
    { title: "Empresa", link: "/empresa" },
  ];

  return (
    <Disclosure as="header" className="sticky top-0 z-50 w-full border-b border-gray-200/60 dark:border-gray-800/60 bg-white/95 dark:bg-[#1D1D1D] backdrop-blur-md">
      {({ open }) => (
        <>
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <Image
                  src="/img/Brain.png"
                  alt="Fluxo Web"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <span className="text-lg">Fluxo Web</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex lg:items-center lg:gap-3">
                <Link
                  href="https://wa.link/18ywdk"
                  className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contáctenos
                </Link>
                <ThemeChanger />
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-3 lg:hidden">
                <ThemeChanger />
                <Disclosure.Button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="sr-only">Abrir menú</span>
                  {open ? (
                    <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Menu className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Panel */}
          <Transition
            show={open}
            enter="transition duration-150 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-100 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <Disclosure.Panel static className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1D1D1D]">
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.title}
                    as={Link}
                    href={item.link}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
                <div className="pt-4">
                  <Link
                    href="https://wa.link/18ywdk"
                    className="flex items-center justify-center gap-2 h-10 w-full text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contáctenos
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
