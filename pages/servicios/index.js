import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";
import Image from "next/image";

// Datos de ejemplo que representan los servicios
const datosDeServicios = [
  {
    titulo: "Desarrollo de Software Personalizado",
    descripcion: "Creamos soluciones de software a medida para satisfacer las necesidades de tu negocio.",
    icono: "/img/software.png", // Ruta al archivo PNG
  },
  {
    titulo: "Desarrollo Web",
    descripcion: "Construimos sitios web modernos y receptivos para tu negocio.",
    icono: "/img/web.png", // Ruta al archivo PNG
  },
  {
    titulo: "Desarrollo de Aplicaciones Móviles",
    descripcion: "Desarrollamos aplicaciones móviles para plataformas iOS y Android.",
    icono: "/img/movil.png", // Ruta al archivo PNG
  },
  {
    titulo: "Hosting en la nube",
    descripcion: "Despliegue de servicios, aplicaciones web y sistemas en la nube con nuestros servidores",
    icono: "/img/nube.png", // Ruta al archivo PNG
  },
];

const Servicios = () => {
  return (
    <>
      <Head>
        <title>Fluxo Web - Servicios</title>
        <meta
          name="description"
          content="Fluxo Web - desarrollo y gestión de sistemas para pequeñas y medianas empresas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SectionTitle
        pretitle="Servicios"
        title="En Fluxo Web contamos con una cantidad de servicios para el desarrollo y automatizacion de tu empresa o negocio"
      >
        Estas son las mas destacadas entre nuesto servicios 
      </SectionTitle>
      <Container>
        <h1 className="text-center text-4xl font-bold leading-snug text-gray-800 xl:leading-tight dark:text-white">Nuestros servicios</h1>
      </Container>
      <Container>
        <div className="container mx-auto p-4">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {datosDeServicios.map((servicio, index) => (
              <div key={index} className="flex flex-col items-center justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-white">
                  <Image src={servicio.icono} alt={servicio.titulo} width={80} height={80} />
                </div>
                <div className="mt-1 text-center">
                  <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{servicio.titulo}</div>
                  <p className="text-black dark:text-white text-base">{servicio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Servicios;
