import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import { ArrowLeft } from "lucide-react";

const secciones = [
  {
    numero: "1",
    titulo: "Información que Recopilamos",
    texto: "Fluxo Web recopila información personal y no personal de sus usuarios con el fin de mejorar y personalizar la experiencia del servicio. La información recopilada puede incluir nombre completo, dirección de correo electrónico, datos de contacto, información de ubicación y preferencias del usuario. Solo recopilamos la información estrictamente necesaria para prestar nuestros servicios.",
  },
  {
    numero: "2",
    titulo: "Uso de la Información",
    texto: "La información recopilada se utiliza para prestar los servicios contratados, enviar comunicaciones relacionadas con el proyecto, mejorar nuestros procesos internos y cumplir con los requisitos legales aplicables. Fluxo Web no vende, alquila ni comparte información personal de los usuarios con terceros sin su consentimiento expreso, salvo obligación legal.",
  },
  {
    numero: "3",
    titulo: "Cookies y Tecnologías Similares",
    texto: "El sitio web de Fluxo Web puede utilizar cookies y tecnologías similares para mejorar la funcionalidad de navegación y personalizar la experiencia del usuario. Las cookies no almacenan información financiera ni datos sensibles. El usuario puede desactivar las cookies desde la configuración de su navegador, aunque esto puede afectar algunas funcionalidades del sitio.",
  },
  {
    numero: "4",
    titulo: "Seguridad de la Información",
    texto: "Fluxo Web implementa medidas técnicas y organizativas para proteger la información personal de los usuarios contra acceso no autorizado, pérdida o destrucción. Sin embargo, ningún sistema de transmisión por Internet ofrece seguridad absoluta. Recomendamos a los usuarios tomar precauciones adicionales al compartir información sensible en línea.",
  },
  {
    numero: "5",
    titulo: "Almacenamiento y Retención",
    texto: "La información personal se conserva durante el tiempo necesario para cumplir con los fines para los que fue recopilada, o según lo exija la normativa vigente. Una vez finalizada la relación contractual, los datos personales se eliminan o anonimanizan salvo que exista obligación legal de conservarlos.",
  },
  {
    numero: "6",
    titulo: "Derechos del Usuario",
    texto: "Los usuarios tienen derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, el usuario puede contactar a Fluxo Web por los medios indicados en la sección de Contacto. Atenderemos cada solicitud en un plazo máximo de 15 días hábiles.",
  },
  {
    numero: "7",
    titulo: "Enlaces a Sitios de Terceros",
    texto: "Nuestro sitio puede contener enlaces a sitios web de terceros. Fluxo Web no controla ni se responsabiliza de las prácticas de privacidad de dichos sitios. Recomendamos revisar las políticas de privacidad de cualquier sitio externo que se visite.",
  },
  {
    numero: "8",
    titulo: "Cambios en esta Política",
    texto: "Fluxo Web se reserva el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios significativos serán notificados a los usuarios a través del correo electrónico registrado o mediante un aviso destacado en el sitio web. El uso continuado del servicio tras la notificación implica aceptación de los cambios.",
  },
  {
    numero: "9",
    titulo: "Consentimiento",
    texto: "Al utilizar los servicios de Fluxo Web, el usuario acepta los términos de esta política de privacidad. Si el usuario no está de acuerdo con alguno de los términos, debe abstenerse de utilizar los servicios.",
  },
  {
    numero: "10",
    titulo: "Contacto",
    texto: "Para consultas, solicitudes de acceso o cualquier inquietud relacionada con esta política de privacidad, podés comunicarte con nosotros a través de fluxo@fluxoweb.net o por WhatsApp.",
  },
];

const Privacidad = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidad — Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content="Política de privacidad de Fluxo Web Group E.A.S. Cómo recopilamos, usamos y protegemos tu información personal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/legal"
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Legal
            </Link>

            {/* Header */}
            <div className="mb-10 pb-8 border-b border-gray-200 dark:border-gray-800">
              <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                Documento Legal
              </span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Política de Privacidad
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Fluxo Web Group E.A.S.
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                Última actualización: enero de 2025
              </p>
            </div>

            {/* Intro */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              En Fluxo Web Group E.A.S. nos tomamos muy en serio la privacidad de nuestros clientes y usuarios. Esta política describe qué información recopilamos, cómo la usamos y qué derechos tenés sobre tus datos.
            </p>

            {/* Sections */}
            <div className="space-y-8">
              {secciones.map((seccion) => (
                <div key={seccion.numero} id={`seccion-${seccion.numero}`}>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center h-7 w-7 rounded-md bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      {seccion.numero}
                    </span>
                    {seccion.titulo}
                  </h2>
                  <p className="pl-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {seccion.numero === "10" ? (
                      <>
                        Para consultas, solicitudes de acceso o cualquier inquietud relacionada con esta política, podés comunicarte con nosotros a través de{" "}
                        <a href="mailto:fluxo@fluxoweb.net" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          fluxo@fluxoweb.net
                        </a>{" "}
                        o por{" "}
                        <Link href="https://wa.link/18ywdk" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          WhatsApp
                        </Link>.
                      </>
                    ) : (
                      seccion.texto
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                Esta política de privacidad está redactada en cumplimiento de los principios generales de protección de datos. Para consultas adicionales, contactanos en{" "}
                <a href="mailto:fluxo@fluxoweb.net" className="text-indigo-500 hover:underline">
                  fluxo@fluxoweb.net
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <PopupWidget />
    </>
  );
};

export default Privacidad;
