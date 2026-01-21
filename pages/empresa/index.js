import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import { Target, Eye, Lightbulb, Users, Shield, Zap, BookOpen, Heart, MessageCircle, Calendar, MapPin, Rocket } from "lucide-react";

const valoresMision = [
  { icono: Lightbulb, titulo: "Innovación Tecnológica", descripcion: "Desarrollamos soluciones que aprovechan las últimas tecnologías para brindar ventaja competitiva." },
  { icono: Users, titulo: "Experiencia del Usuario", descripcion: "Creamos experiencias digitales intuitivas y atractivas que deleitan a los usuarios finales." },
  { icono: Heart, titulo: "Socios de Confianza", descripcion: "Trabajamos en estrecha colaboración entendiendo objetivos y desafíos de cada cliente." },
  { icono: Shield, titulo: "Calidad y Eficiencia", descripcion: "Buscamos la excelencia en todos los aspectos, desde el diseño hasta el soporte continuo." },
  { icono: Zap, titulo: "Transformación Digital", descripcion: "Facilitamos la adaptación de empresas en un entorno cada vez más digitalizado." },
  { icono: BookOpen, titulo: "Aprendizaje Continuo", descripcion: "Fomentamos el desarrollo profesional para mantenernos a la vanguardia tecnológica." },
];

const hitos = [
  { año: "2019", titulo: "Los inicios", descripcion: "Oscar Gabriel Ramírez González funda Fluxo Electronics en Ciudad del Este, Paraguay, dedicándose a la reparación de computadoras y equipos electrónicos desde el almacén de su casa." },
  { año: "2020", titulo: "Expansión", descripcion: "El negocio crece y comienza a ofrecer ensamblado y venta de computadoras. La reputación de calidad se expande en la región." },
  { año: "2020", titulo: "Transformación", descripcion: "Identificando las necesidades de software de sus clientes, Oscar decide especializarse en desarrollo web y software, renombrando la empresa a Fluxo Web." },
  { año: "2025", titulo: "Nuevos socios", descripcion: "Se incorporan Alberto David Servin Meira (Co-fundador e Ing. en Informática) y Wildo Yamil Valenzuela Panderi (Co-fundador y Gerente Administrativo), fortaleciendo el equipo directivo de la empresa." },
  { año: "Hoy", titulo: "Crecimiento", descripcion: "Fluxo Web Group E.A.S. cuenta con un equipo de desarrollo dedicado, brindando soluciones tecnológicas a pequeñas y medianas empresas de la región." },
];

const Empresa = () => {
  return (
    <>
      <Head>
        <title>Empresa - Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="Conoce la historia de Fluxo Web Group E.A.S. - desarrollo y gestión de sistemas para pequeñas y medianas empresas en Paraguay"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Nuestra Empresa
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Soluciones de software para impulsar tu negocio
            </h1>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Desde 2019, nos dedicamos a crear software y automatizaciones que mejoran el desempeño y agilidad de los procesos empresariales, con soluciones a medida y un análisis minucioso de cada requerimiento.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Vision */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                  <Eye className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Visión</h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Ser reconocidos como líderes en el campo del desarrollo de software y desarrollo web, destacando por nuestra excelencia en soluciones tecnológicas innovadoras y eficientes. Buscamos ser la primera elección para las empresas que buscan transformar digitalmente sus operaciones.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                  <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Misión</h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Proporcionar soluciones de desarrollo de software y web que impulsan el éxito de nuestros clientes, empoderando a las empresas para que alcancen nuevos niveles de éxito mediante la implementación de soluciones tecnológicas de vanguardia.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-8">
              Nuestros Valores
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {valoresMision.map((valor, index) => {
                const IconComponent = valor.icono;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                    <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-md bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                      <IconComponent className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{valor.titulo}</h4>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{valor.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              De un almacén a una empresa de software
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              El viaje de Fluxo Web comenzó con pasión, dedicación y el deseo de ayudar a las empresas locales.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:-translate-x-px" />

              {hitos.map((hito, index) => (
                <div key={index} className={`relative flex items-start gap-6 pb-12 last:pb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 -translate-x-1/2 mt-1.5 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{hito.año}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{hito.titulo}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{hito.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Equipo Directivo
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Los fundadores detrás de Fluxo Web Group E.A.S.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Oscar */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">OG</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Oscar Gabriel Ramirez Gonzalez</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Fundador & CEO</p>
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Autodidacta apasionado por la tecnología, comenzó reparando computadoras y hoy lidera el equipo de desarrollo.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3" />
                <span>Ciudad del Este, Paraguay</span>
              </div>
            </div>

            {/* Alberto */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Alberto David Servin Meira</h3>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Co-fundador & Ing. en Informática</p>
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Ingeniero en Informática con amplia experiencia en desarrollo de software y arquitectura de sistemas.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3" />
                <span>Ciudad del Este, Paraguay</span>
              </div>
            </div>

            {/* Wildo */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">WV</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Wildo Yamil Valenzuela Panderi</h3>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Co-fundador & Gerente Administrativo</p>
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Encargado de la gestión administrativa y operativa, asegurando la eficiencia en todos los procesos de la empresa.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3" />
                <span>Ciudad del Este, Paraguay</span>
              </div>
            </div>

            {/* Armando */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">AD</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Armando Manuel Diarte Velázquez</h3>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">Socio & Desarrollador Full Stack</p>
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Socio partícipe activo con experiencia en desarrollo Full Stack, contribuyendo al crecimiento técnico de la empresa.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3" />
                <span>Ciudad del Este, Paraguay</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 dark:bg-indigo-700 px-6 py-12 md:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Rocket className="h-10 w-10 text-indigo-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="mt-4 text-base text-indigo-100">
                Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
              </p>
              <div className="mt-8">
                <Link
                  href="https://wa.link/18ywdk"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contáctenos
                </Link>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 -z-0 opacity-30">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-800 blur-3xl" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <PopupWidget />
    </>
  );
};

export default Empresa;
