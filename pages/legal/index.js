import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import SectionTitle from "../../components/sectionTitle";

const Legal = () =>{
    return(
        <>
            <Head>
                <title>Fluxo Web - Legal</title>
                <meta
                    name="description"
                    content="Fluxo Web - desarrollo y gestión de sistemas para pequeñas y medianas empresas"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <SectionTitle
                pretitle="Términos Legales"
                title="Términos y Condiciones de Uso:"
            >
                <ul>
                    <li>Descripción de los servicios ofrecidos.</li>
                    <li>Condiciones de uso del sitio web y/o plataformas.</li>
                    <li>Limitaciones de responsabilidad.</li>
                    <li>Política de privacidad.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Contrato de Licencia de Software:"
            >
                <ul>
                    <li>Condiciones de licencia para el uso del software desarrollado.</li>
                    <li>Limitaciones de garantía.</li>
                    <li>Derechos de propiedad intelectual.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Acuerdo de Confidencialidad (NDA):"
            >
                <ul>
                    <li>Protección de información confidencial.</li>
                    <li>Restricciones sobre el uso y divulgación de la información.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Contrato de Desarrollo de Software:"
            >
                <ul>
                    <li>Descripción detallada del proyecto.</li>
                    <li>Plazos de entrega.</li>
                    <li>Honorarios y condiciones de pago.</li>
                    <li>Propiedad intelectual del software desarrollado.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Política de Reembolso y Cancelación:"
            >
                <ul>
                    <li>Condiciones para solicitar reembolsos.</li>
                    <li>Procedimientos de cancelación de servicios.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Acuerdo de Nivel de Servicio (SLA):"
            >
                <ul>
                    <li>Compromisos de rendimiento y disponibilidad.</li>
                    <li>Procedimientos de notificación y resolución de problemas.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Política de Cookies:"
            >
                <ul>
                    <li>Información sobre el uso de cookies en el sitio web.</li>
                    <li>Opciones de gestión de cookies por parte del usuario.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Política de Derechos de Autor y DMCA:"
            >
                <ul>
                    <li>Procedimientos para reportar infracciones de derechos de autor.</li>
                    <li>Política de respuesta a notificaciones DMCA.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Acuerdo de Mantenimiento y Soporte:"
            >
                <ul>
                    <li>Detalles sobre servicios de mantenimiento y soporte.</li>
                    <li>Plazos de respuesta a problemas reportados.</li>
                </ul>
                
            </SectionTitle>

            <SectionTitle
                title="Limitación de Responsabilidad:"
            >
                <ul>
                    <li>Cláusulas que limitan la responsabilidad en ciertas circunstancias.</li>
                </ul>
                
            </SectionTitle>

            <Footer />
            <PopupWidget />
        </>
    );
};

export default Legal;