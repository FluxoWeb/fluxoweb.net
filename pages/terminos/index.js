import LegalDocument, { ContactLinks } from "../../components/legalDocument";

const secciones = [
  {
    numero: "1",
    titulo: "Definiciones",
    contenido: [
      { subtitulo: "1.1 Cliente", texto: "La entidad o individuo que contrata los servicios de desarrollo de software y desarrollo web proporcionados por Fluxo Web Group E.A.S." },
      { subtitulo: "1.2 Proyecto", texto: "El trabajo específico acordado entre el Cliente y Fluxo Web para el desarrollo de software o web, según se describe en la propuesta técnica aceptada." },
      { subtitulo: "1.3 Entregables", texto: "Los productos y resultados finales del Proyecto: código fuente, aplicaciones, sitios web, documentación técnica y cualquier otro artefacto acordado." },
    ],
  },
  {
    numero: "2",
    titulo: "Alcance del Proyecto",
    contenido: [
      { subtitulo: "2.1 Descripción del Proyecto", texto: "Fluxo Web se compromete a realizar los servicios acordados según la descripción del Proyecto aprobada por el Cliente en la propuesta técnica." },
      { subtitulo: "2.2 Cambios en el Alcance", texto: "Cualquier cambio en el alcance del Proyecto debe acordarse por escrito. Las modificaciones pueden implicar ajustes en el costo y el cronograma, que se comunicarán al Cliente antes de ejecutarse." },
    ],
  },
  {
    numero: "3",
    titulo: "Propiedad Intelectual",
    contenido: [
      { subtitulo: "3.1 Derechos de Autor", texto: "Todos los derechos de autor y propiedad intelectual sobre los entregables pertenecen a Fluxo Web hasta que se realice el pago completo por parte del Cliente." },
      { subtitulo: "3.2 Licencia de Uso", texto: "Una vez completado el pago, el Cliente recibe una licencia de uso completa sobre los entregables para el propósito acordado en el proyecto. Si se pactó la entrega del código fuente, este se transfiere según lo indicado en el contrato." },
    ],
  },
  {
    numero: "4",
    titulo: "Pago y Facturación",
    contenido: [
      { subtitulo: "4.1 Tarifas", texto: "El Cliente pagará a Fluxo Web las tarifas acordadas en la propuesta técnica aprobada. Las tarifas no incluyen impuestos salvo indicación expresa." },
      { subtitulo: "4.2 Facturación", texto: "La facturación se realizará según los hitos establecidos en el cronograma del Proyecto. El incumplimiento de pago puede suspender el desarrollo hasta su regularización." },
    ],
  },
  {
    numero: "5",
    titulo: "Confidencialidad",
    contenido: [
      { subtitulo: "5.1 Información Confidencial", texto: "Ambas partes se comprometen a mantener la confidencialidad de la información recibida durante el proyecto y a no divulgarla a terceros sin consentimiento previo por escrito. Esta obligación permanece vigente después de la finalización del proyecto." },
    ],
  },
  {
    numero: "6",
    titulo: "Garantías y Soporte",
    contenido: [
      { subtitulo: "6.1 Garantías", texto: "Fluxo Web garantiza que los entregables cumplirán con las especificaciones acordadas. Se proveerá soporte para la corrección de errores funcionales durante el período de garantía definido en el contrato, contado desde la fecha de entrega final." },
    ],
  },
  {
    numero: "7",
    titulo: "Responsabilidad",
    contenido: [
      { subtitulo: "7.1 Limitación de Responsabilidad", texto: "Fluxo Web no será responsable de daños indirectos, consecuentes o incidentales que surjan del uso o imposibilidad de uso de los entregables. La responsabilidad máxima de Fluxo Web no excederá el monto total pagado por el Cliente en el proyecto en cuestión." },
    ],
  },
  {
    numero: "8",
    titulo: "Terminación",
    contenido: [
      { subtitulo: "8.1 Terminación por Incumplimiento", texto: "Cualquiera de las partes puede rescindir el acuerdo si la otra parte incumple materialmente sus obligaciones y no corrige el incumplimiento dentro de los 15 días hábiles posteriores a la notificación formal por escrito." },
    ],
  },
  {
    numero: "9",
    titulo: "Ley Aplicable y Jurisdicción",
    contenido: [
      { subtitulo: "9.1 Ley Aplicable", texto: "Este acuerdo se rige por las leyes de la República del Paraguay." },
      { subtitulo: "9.2 Jurisdicción", texto: "Cualquier disputa se resolverá en los tribunales competentes de Ciudad del Este, Paraguay. Ambas partes aceptan dicha jurisdicción." },
    ],
  },
  {
    numero: "10",
    titulo: "Disposiciones Generales",
    contenido: [
      { subtitulo: "10.1 Modificaciones", texto: "Estos términos pueden modificarse solo mediante acuerdo escrito firmado por ambas partes." },
      { subtitulo: "10.2 Divisibilidad", texto: "Si alguna cláusula de este acuerdo resulta inválida o inaplicable, las demás cláusulas permanecerán en plena vigencia." },
    ],
  },
];

export default function Terminos() {
  return (
    <LegalDocument
      title="Términos y condiciones"
      description="Términos y condiciones de los servicios de desarrollo de software y web de Fluxo Web Group E.A.S."
      subtitle="Servicio de desarrollo de software y web · Fluxo Web Group E.A.S."
      updated="enero de 2025"
      intro={
        <>
          Al contratar los servicios de Fluxo Web Group E.A.S., el Cliente acepta los presentes términos y condiciones en su
          totalidad. Si tienes alguna consulta sobre este documento, contáctanos en <ContactLinks />.
        </>
      }
      sections={secciones}
    />
  );
}
