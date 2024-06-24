import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  BanknotesIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.svg";
import benefitTwoImg from "../public/img/benefit-two.svg";

const benefitOne = {
  title: "Un poco de nuestros beneficios",
  desc: "Contamos con varios beneficios de las cuales podria optar por elegir nuestros servicios de desarrollo.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Personalización total",
      desc: "Desarrollo de sistemas 100% personalizados y a la medida de las necesidades del cliente.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Soporte integral",
      desc: "Acompañamiento durante todo el ciclo de vida del proyecto: análisis, diseño, desarrollo, testing, implementación y soporte.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Calidad y optimización",
      desc: "Seguridad, escalabilidad y optimización de los sistemas desarrollados.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Tambien ofrecemos a nuestros clientes",
  desc: "Ofrecemos valiosos beneficios diseñados para satisfacer tus necesidades y aumentar la rentabilidad de tu negocio con nuestros servicios.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Innovación y entrega continua",
      desc: "Últimas tecnologías y entrega continua para desplegar valor al cliente desde el inicio.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Compromiso y comunicación",
      desc: "Alto compromiso, comunicación directa con el equipo de desarrollo.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Costos competitivos",
      desc: "Costos competitivos y models de pago flexibles. ",
      icon: <BanknotesIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
