import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fluxo Web</title>
        <meta
          name="description"
          content="Fluxo Web - desarrollo y gestion de sistemas para pequeñas y medianas empresas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Fluxo Web Cloud"
        title=" Porque elegirnos para desarrollo de sistemas?">
        Nos enfocamos 100% en comprender tus necesidades particulares 
        para diseñar e implementar sistemas que se adapten perfectamente 
        a los procesos y objetivos de tu organización. Además, utilizamos 
        las tecnologías más innovadoras y mejores prácticas de desarrollo 
        para crear sistemas escalables, flexibles y con alta performance.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/*<SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />*/}

      {/*<SectionTitle
        pretitle="Testimonios"
        title="Experiencias que dan vida a la tecnología">
        Historias de clientes que crecieron con nuestros sistemas y sitios web.
        Un poco de las experiencias de nuestros clientes con nuestros productos y servicios.
      </SectionTitle>
      <Testimonials />*/}
      
      <SectionTitle pretitle="FAQ" title="Preguntas frecuentes">
        Un poco de las pregustas mas frecuentes que nos hacen los clientes respectos a nuestros servicios y productos.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;