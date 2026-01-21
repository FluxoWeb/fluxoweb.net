import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const navigation = [
    { title: "Servicios", link: "/servicios" },
    { title: "Empresa", link: "/empresa" },
  ];
  const legal = [
    { title: "Términos", link: "/terminos" },
    { title: "Privacidad", link: "/privacidad" },
    { title: "Legal", link: "/legal" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1D1D1D]">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
              <Image
                src="/img/Brain.png"
                alt="Fluxo Web"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>Fluxo Web Group E.A.S.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Utilizamos las tecnologías más innovadoras para construir sitios responsivos, rápidos y seguros.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Navegación</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/FluxoWeb.Py"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/oscar-ramirez-85bb71b0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            © 2019 - {new Date().getFullYear()} Fluxo Web Group E.A.S. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

