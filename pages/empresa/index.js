import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import SectionTitle from "../../components/sectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


const Empresa = () => {
    return (
        <>
            <Head>
                <title>Fluxo Web - Empresa</title>
                <meta
                    name="description"
                    content="Fluxo Web - desarrollo y gestion de sistemas para pequeñas y medianas empresas"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <SectionTitle
                pretitle="Empresa"
                title="Nos dedicamos a dar soluciones de software a las pequeñas y medianas empresas">
                Desde nuestro posicionamiento en el mercado, nos dedicamos a siempre dar soluciones de software y autoatizaciones
                para mejorar el desempeño y agilidad de los procesos dentro de la empresa con nuestros software y sistemas a la medida
                de las necedidades, con un analisis minucioso de lo requerido
            </SectionTitle>

            <SectionTitle
                pretitle="Nuestra Visión y Misión"
                title="Un poco de los que tenemos en cuenta siempre"
            >
                <h1 className="font-bold text-xl mt-5 text-indigo-600">Visión</h1>
                <p>
                    Ser reconocidos como líderes en el campo del desarrollo de software y desarrollo web, destacando por nuestra excelencia en soluciones tecnológicas innovadoras y eficientes. Buscamos ser la primera elección para las empresas que buscan transformar digitalmente sus operaciones y mejorar su presencia en línea.
                </p>
                <h1 className="font-bold text-xl mt-5 text-indigo-600">Misión</h1>
                <p>
                    En Fluxo Web, nos dedicamos a proporcionar soluciones de desarrollo de software y desarrollo web que impulsan el éxito de nuestros clientes. Nuestra misión es:
                </p>
                <ul>
                    <li><strong className="text-indigo-600">Innovación Tecnológica:</strong> Desarrollamos soluciones que aprovechan las últimas tecnologías para brindar a nuestros clientes una ventaja competitiva.</li>
                    <li><strong className="text-indigo-600">Experiencia del Usuario:</strong> Nos esforzamos por crear experiencias digitales intuitivas y atractivas que deleiten a los usuarios finales y mejoren la interacción con las marcas.</li>
                    <li><strong className="text-indigo-600">Socios de Confianza:</strong> Trabajamos en estrecha colaboración con nuestros clientes, entendiendo sus objetivos y desafíos para ofrecer soluciones personalizadas y efectivas.</li>
                    <li><strong className="text-indigo-600">Calidad y Eficiencia:</strong> Buscamos la excelencia en todos los aspectos de nuestro trabajo, desde el diseño y desarrollo hasta la implementación y el soporte continuo.</li>
                    <li><strong className="text-indigo-600">Transformación Digital:</strong> Facilitamos la transformación digital de las empresas, permitiéndoles adaptarse y prosperar en un entorno empresarial cada vez más digitalizado.</li>
                    <li><strong className="text-indigo-600">Compromiso Sostenible:</strong> Contribuimos a la sostenibilidad a través de prácticas éticas, el uso eficiente de recursos y soluciones que fomentan la responsabilidad social.</li>
                    <li><strong className="text-indigo-600">Aprendizaje Continuo:</strong> Fomentamos una cultura de aprendizaje continuo y desarrollo profesional para mantenernos a la vanguardia de las tendencias tecnológicas y ofrecer soluciones innovadoras.</li>
                </ul>
                <p className="mt-5">
                    Al seguir nuestra misión, buscamos empoderar a las empresas para que alcancen nuevos niveles de éxito mediante la implementación de soluciones tecnológicas de vanguardia.
                </p>
            </SectionTitle>


            <SectionTitle
                pretitle="Nuestra Historia"
                title="Nuestros Inicios">
                <p className="my-3">
                    Era el año 2019 cuando un joven llamado Oscar Gabriel Ramírez González decidió iniciar su propio negocio
                    de reparación de computadoras y equipos electrónicos en Ciudad del Este, Paraguay. Lo llamó "Fluxo Electronics" y
                    comenzó operando desde el viejo alamcén de su casa.
                </p>
                <p className="my-3">
                    Oscar tenía conocimientos en electrónica y reparación de computadoras que había adquirido de manera
                    autodidacta. Comenzó ofreciendo sus servicios a amigos y familiares, y poco a poco fue consiguiendo
                    más clientes a través del boca a boca. Para mediados de 2019, Oscar había conseguido una modesta pero
                    creciente base de clientes locales que necesitaban reparar sus laptops, PCs de escritorio, impresoras
                    y otros dispositivos.
                </p>
                <p className="my-3">
                    El negocio operaba con pocos recursos pero Oscar le dedicaba todo su empeño. Trabajaba muchas horas
                    al día atendiendo a los clientes, diagnosticando problemas y reparando equipos. Su trabajo era de alta
                    calidad y sus clientes quedaban siempre satisfechos.
                </p>
                <p className="my-3">
                    Para principios de 2020, Fluxo Electronics ya era relativamente conocido en Ciudad del Este por su excelente
                    servicio. Oscar decidió expandir sus servicios y comenzó a ofrecer también el ensamblado y venta de
                    computadoras, tanto de escritorio como portátiles. Sus máquinas eran confiables y tenían una buena relación
                    calidad-precio.
                </p>
                <p className="my-3">
                    No pasó mucho tiempo antes de que Oscar se diera cuenta que muchos de sus clientes eran pequeñas empresas
                    locales que no solo necesitaban equipos, sino que también requerían soluciones informáticas para sus negocios.
                    Fue así como a mediados de 2020, Oscar decidió especializarse en desarrollo de software y páginas web, adaptando
                    el nombre de su empresa a "Fluxo Web".
                </p>
                <p className="my-3">
                    Desde entonces Fluxo Web ha crecido y ahora cuenta con un pequeño equipo de desarrollo. Continúan brindando
                    excelentes servicios tanto en la venta y reparación de computadoras, como en el desarrollo de soluciones
                    web y de software a la medida para pequeñas y medianas empresas de la región.
                </p>
            </SectionTitle>

            <SectionTitle
                pretitle="Nuestros Clientes"
                title="Los que nos acompañaron desde nuestros inicios">
            </SectionTitle>
            <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="img-clientes" src="/img/img01.png" alt="Slide 1"  /></SwiperSlide>
                    <SwiperSlide><img className="img-clientes" src="/img/img02.png" alt="Slide 1"  /></SwiperSlide>
                </Swiper>

            <Footer />
            <PopupWidget />
        </>
    );
}

export default Empresa;
