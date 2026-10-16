import LegalDocument, { ContactLinks } from "../../components/legalDocument";

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
    texto: (
      <>
        Para consultas, solicitudes de acceso o cualquier inquietud relacionada con esta política de privacidad, puedes comunicarte
        con nosotros a través de <ContactLinks />.
      </>
    ),
  },
];

export default function Privacidad() {
  return (
    <LegalDocument
      title="Política de privacidad"
      description="Política de privacidad de Fluxo Web Group E.A.S.: qué información recopilamos, cómo la usamos y cómo la protegemos."
      subtitle="Fluxo Web Group E.A.S."
      updated="enero de 2025"
      intro="En Fluxo Web Group E.A.S. nos tomamos muy en serio la privacidad de nuestros clientes y usuarios. Esta política describe qué información recopilamos, cómo la usamos y qué derechos tienes sobre tus datos."
      sections={secciones}
    />
  );
}
