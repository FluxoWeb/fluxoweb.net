import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import { FileText, Lock, Code2, RefreshCw, Headphones, Scale, ArrowRight } from "lucide-react";

const documentos = [
  {
    icono: FileText,
    titulo: "Términos y Condiciones",
    descripcion: "Condiciones de uso, alcance del servicio, propiedad intelectual, pagos y política de cancelación.",
    link: "/terminos",
  },
  {
    icono: Lock,
    titulo: "Política de Privacidad",
    descripcion: "Cómo recopilamos, usamos y protegemos la información personal de nuestros clientes y usuarios.",
    link: "/privacidad",
  },
];

const politicas = [
  {
    icono: Code2,
    titulo: "Licencia de Software",
    puntos: [
      "Los derechos de autor pertenecen a Fluxo Web hasta el pago completo.",
      "Una vez saldado el proyecto, el cliente recibe licencia de uso completa.",
      "El código fuente se entrega si así se acuerda en el contrato.",
    ],
  },
  {
    icono: Lock,
    titulo: "Confidencialidad (NDA)",
    puntos: [
      "Ambas partes se comprometen a proteger la información confidencial del otro.",
      "Prohibida la divulgación a terceros sin consentimiento por escrito.",
      "El acuerdo permanece vigente después de finalizado el proyecto.",
    ],
  },
  {
    icono: RefreshCw,
    titulo: "Política de Reembolso",
    puntos: [
      "Los reembolsos aplican solo sobre montos no ejecutados al momento de la solicitud.",
      "El procedimiento de cancelación debe iniciarse por escrito.",
      "Los servicios de hosting se cancelan al vencimiento del período contratado.",
    ],
  },
  {
    icono: Headphones,
    titulo: "Acuerdo de Soporte (SLA)",
    puntos: [
      "Tiempo de respuesta para incidencias críticas: máximo 4 horas hábiles.",
      "Resolución de errores funcionales cubierta durante el período de garantía.",
      "El nivel de soporte depende del plan contratado.",
    ],
  },
  {
    icono: Scale,
    titulo: "Limitación de Responsabilidad",
    puntos: [
      "Fluxo Web no se responsabiliza por daños indirectos o consecuentes.",
      "La responsabilidad máxima no excede el monto total del contrato.",
      "El cliente es responsable de la veracidad de la información provista.",
    ],
  },
];

const Legal = () => {
  return (
    <>
      <Head>
        <title>Legal — Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="Información legal de Fluxo Web Group E.A.S.: términos y condiciones, política de privacidad, licencias de software y más."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Legal
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Información Legal
            </h1>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Acá encontrás todos los documentos y políticas que regulan la relación entre Fluxo Web Group E.A.S. y sus clientes. Si tenés alguna consulta, escribinos a{" "}
              <a href="mailto:fluxo@fluxoweb.net" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                fluxo@fluxoweb.net
              </a>.
            </p>
          </div>
        </Container>
      </section>

      {/* Main documents */}
      <section className="pb-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
            {documentos.map((doc) => {
              const Icon = doc.icono;
              return (
                <Link
                  key={doc.titulo}
                  href={doc.link}
                  className="group flex gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {doc.titulo}
                      </h2>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 flex-shrink-0 transition-colors" />
                    </div>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {doc.descripcion}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Policy summaries */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Resumen de políticas</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Puntos clave de nuestras políticas internas. Para el texto completo y con validez legal, contactanos directamente.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {politicas.map((politica) => {
              const Icon = politica.icono;
              return (
                <div
                  key={politica.titulo}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
                      <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{politica.titulo}</h3>
                  </div>
                  <ul className="space-y-2">
                    {politica.puntos.map((punto, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {punto}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Legal;
