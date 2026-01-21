import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                Desarrollo de software a medida
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Soluciones en la nube para impulsar tu negocio
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Desarrollo de software personalizado que se adapta perfectamente a las necesidades únicas de cada negocio. Tecnología moderna, escalable y segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="https://wa.link/18ywdk"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Contáctenos
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative lg:ml-auto">
            <div className="relative">
              <Image
                src="/img/hero.svg"
                width={540}
                height={540}
                className="w-full max-w-lg mx-auto"
                alt="Ilustración de soluciones en la nube"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;