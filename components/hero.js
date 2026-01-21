import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-12 md:py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Content - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex">
              <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Desarrollo de software a medida
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
              Soluciones en la nube para impulsar tu negocio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Desarrollo de software personalizado que se adapta perfectamente a las necesidades únicas de cada negocio. Tecnología moderna, escalable y segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="https://wa.link/18ywdk"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Contáctenos
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Image - 7 columns */}
          <div className="lg:col-span-7 relative">
            <div className="relative flex items-center justify-center lg:justify-end">
              <Image
                src="/img/hero.svg"
                width={500}
                height={500}
                className="w-full max-w-md lg:max-w-lg"
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