import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import SectionTitle from "../../components/sectionTitle";

const Terminos = () => {
    return (
        <>
            <Head>
                <title>Fluxo Web - Términos</title>
                <meta
                    name="description"
                    content="Fluxo Web - desarrollo y gestión de sistemas para pequeñas y medianas empresas"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />


            <SectionTitle
                pretitle="Términos y Condiciones"
                title="Servicio de Desarrollo de Software y Web"
            >
                Aquí se encuentran los términos y condiciones detallados de los servicios ofrecidos por Fluxo Web en el desarrollo de software y web.
            </SectionTitle>

            <SectionTitle
                pretitle="1. Definiciones"
                title=""
            >
                <p>
                    <strong>1.1 Cliente:</strong> La entidad o individuo que contrata los servicios de desarrollo de software y desarrollo web proporcionados por Fluxo Web.
                </p>
                <p>
                    <strong>1.2 Proyecto:</strong> El trabajo específico acordado entre el Cliente y Fluxo Web para el desarrollo de software o web.
                </p>
                <p>
                    <strong>1.3 Entregables:</strong> Los productos y resultados finales del Proyecto, que pueden incluir, pero no se limitan a, código fuente, aplicaciones, sitios web y documentación.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="2. Alcance del Proyecto"
                title=""
            >
                <p>
                    <strong>2.1 Descripción del Proyecto:</strong> Fluxo Web se compromete a realizar los servicios acordados según la descripción del Proyecto proporcionada al Cliente.
                </p>
                <p>
                    <strong>2.2 Cambios en el Alcance:</strong> Cualquier cambio en el alcance del Proyecto debe ser acordado por escrito y puede resultar en ajustes en el costo y el cronograma del proyecto.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="3. Propiedad Intelectual"
                title=""
            >
                <p>
                    <strong>3.1 Derechos de Autor:</strong> Todos los derechos de autor y propiedad intelectual relacionados con los entregables pertenecen a Fluxo Web hasta que se realice el pago completo por parte del Cliente.
                </p>
                <p>
                    <strong>3.2 Licencia de Uso:</strong> Una vez que se haya completado el pago, el Cliente recibirá una licencia no exclusiva para utilizar los entregables para el propósito previsto.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="4. Pago y Facturación"
                title=""
            >
                <p>
                    <strong>4.1 Tarifas:</strong> El Cliente pagará a Fluxo Web las tarifas acordadas según los términos establecidos en la propuesta o acuerdo de servicios.
                </p>
                <p>
                    <strong>4.2 Facturación:</strong> Fluxo Web facturará al Cliente de acuerdo con los hitos establecidos en el cronograma del Proyecto.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="5. Confidencialidad"
                title=""
            >
                <p>
                    <strong>5.1 Información Confidencial:</strong> Ambas partes acuerdan mantener la confidencialidad de la información proporcionada por la otra parte y no divulgarla a terceros sin consentimiento previo por escrito.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="6. Garantías y Soporte"
                title=""
            >
                <p>
                    <strong>6.1 Garantías:</strong> Fluxo Web garantiza que los entregables cumplirán con las especificaciones acordadas. Se proporcionará soporte para la resolución de errores durante un período de [número de días/meses] después de la entrega.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="7. Responsabilidad"
                title=""
            >
                <p>
                    <strong>7.1 Limitación de Responsabilidad:</strong> Fluxo Web no será responsable de daños indirectos, consecuentes o incidentales que surjan del Proyecto.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="8. Terminación"
                title=""
            >
                <p>
                    <strong>8.1 Terminación por Incumplimiento:</strong> Cualquiera de las partes puede terminar el acuerdo si la otra parte incumple materialmente sus obligaciones y no remedia el incumplimiento dentro de los [número de días] días posteriores a la notificación por escrito.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="9. Ley Aplicable y Jurisdicción"
                title=""
            >
                <p>
                    <strong>9.1 Ley Aplicable:</strong> Este acuerdo se regirá e interpretará de acuerdo con las leyes del [país/estado] sin tener en cuenta sus conflictos de disposiciones legales.
                </p>
                <p>
                    <strong>9.2 Jurisdicción:</strong> Cualquier disputa que surja de este acuerdo se resolverá en los tribunales del [ciudad/país] y ambas partes aceptan la jurisdicción exclusiva de dichos tribunales.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="10. Disposiciones Generales"
                title=""
            >
                <p>
                    <strong>10.1 Modificaciones:</strong> Estos términos y condiciones pueden ser modificados solo por escrito y mediante el consentimiento mutuo de ambas partes.
                </p>
                <p>
                    <strong>10.2 Divisibilidad:</strong> Si alguna disposición de este acuerdo se considera inválida o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.
                </p>
            </SectionTitle>



            <Footer />
            <PopupWidget />
        </>
    );
};

export default Terminos;
