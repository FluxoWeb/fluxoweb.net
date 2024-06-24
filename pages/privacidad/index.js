import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import SectionTitle from "../../components/sectionTitle";

const Privacidad = () => {
    return (
        <>
            <Head>
                <title>Fluxo Web - Privacidad</title>
                <meta
                    name="description"
                    content="Fluxo Web - desarrollo y gestión de sistemas para pequeñas y medianas empresas"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <SectionTitle
                pretitle="Privacidad"
                title="Servicio de Desarrollo de Software y Web"
            />

            <SectionTitle
                pretitle="1. Información que Recopilamos"
                title=""
            >
                <p>
                    Fluxo Web recopila información personal y no personal de sus usuarios con el fin de mejorar 
                    y personalizar la experiencia del usuario. La información recopilada puede incluir, entre otros, 
                    nombres, direcciones de correo electrónico, información de contacto, datos de ubicación y preferencias
                    del usuario.
                </p>
                
            </SectionTitle>

            <SectionTitle
                pretitle="2. Uso de la Información Recopilada"
                title=""
            >
                <p>
                    La información recopilada se utiliza para proporcionar servicios personalizados, mejorar nuestros 
                    productos, enviar comunicaciones relevantes y cumplir con los requisitos legales aplicables. Fluxo Web 
                    se compromete a no vender, alquilar ni compartir la información personal de los usuarios con terceros 
                    sin su consentimiento expreso.
                </p>
                
            </SectionTitle>

            <SectionTitle
                pretitle="3. Cookies y Tecnologías Similares"
                title=""
            >
                <p>
                    Fluxo Web utiliza cookies y tecnologías similares para recopilar información sobre las preferencias y 
                    el comportamiento del usuario. Estas tecnologías se utilizan para mejorar la funcionalidad del sitio web y 
                    personalizar la experiencia del usuario.
                </p>
                
            </SectionTitle>

            <SectionTitle
                pretitle="4. Seguridad de la Información"
                title=""
            >
                <p>
                    Fluxo Web implementa medidas de seguridad para proteger la información personal de los usuarios. Sin embargo, 
                    no se puede garantizar la seguridad completa de la información transmitida por Internet, y los usuarios deben 
                    tener precaución al compartir información en línea.
                </p>
                
            </SectionTitle>

            <SectionTitle
                pretitle="5. Enlaces a Terceros"
                title=""
            >
                <p>
                    Nuestro sitio web puede contener enlaces a sitios web de terceros. Fluxo Web no se hace responsable de las 
                    prácticas de privacidad de estos sitios y se alienta a los usuarios a revisar las políticas de privacidad de terceros.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="6. Cambios en la Política de Privacidad"
                title=""
            >
                <p>
                    Fluxo Web se reserva el derecho de actualizar y modificar esta política de privacidad en cualquier momento. Se notificarán 
                    los cambios significativos a los usuarios a través de medios apropiados.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="7. Consentimiento del Usuario"
                title=""
            >
                <p>
                    Al utilizar nuestros servicios, los usuarios aceptan los términos de esta política de privacidad.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="8. Contacto"
                title=""
            >
                <p>
                    Si tienes preguntas o inquietudes sobre esta política de privacidad, puedes contactarnos en fluxo@fluxoweb.net
                </p>
            </SectionTitle>
            <Footer />
            <PopupWidget />
        </>
    );
};

export default Privacidad;
