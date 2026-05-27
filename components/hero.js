import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";

const puntos = [
  "Software 100% personalizado",
  "Soporte técnico incluido",
  "Tecnologías modernas y escalables",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950 -z-10" />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/3 -z-10" />

      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex">
              <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Desarrollo de software a medida · Paraguay
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Sistemas que{" "}
              <span className="relative">
                <span className="relative z-10 text-indigo-600 dark:text-indigo-400">hacen crecer</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-indigo-100 dark:bg-indigo-900/60 -z-10 rounded" />
              </span>{" "}
              tu empresa
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Desarrollamos software personalizado, apps móviles y soluciones con inteligencia artificial para pequeñas y medianas empresas en Paraguay y la región.
            </p>

            <ul className="space-y-2">
              {puntos.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="https://wa.link/18ywdk"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar con el equipo
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-950/10 blur-xl scale-95 -z-10" />
              <Image
                src="/img/hero.svg"
                width={560}
                height={480}
                className="w-full drop-shadow-xl"
                alt="Ilustración de soluciones de software"
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
