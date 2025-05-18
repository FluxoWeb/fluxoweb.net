import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Qué servicios incluye la adquisición de un sistema?",
    answer: "Al adquirir uno de nuestros sistemas, incluimos un mes gratuito de servicio en la nube (cloud hosting), además de configuración inicial, capacitación básica y documentación técnica.",
  },
  {
    question: "¿Cuál es su política de garantía respecto a los servicios?",
    answer:
      "Nuestra política de garantía cubre defectos funcionales dentro del alcance acordado en el contrato. Nos comprometemos a corregir cualquier error identificado durante el período de garantía, asegurando transparencia y respaldo técnico continuo.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí, ofrecemos soporte técnico para todos nuestros sistemas. Esto incluye resolución de incidencias, actualizaciones menores y asistencia técnica personalizada según el nivel de servicio contratado.",
  },
  {
    question: "¿Desarrollan sistemas personalizados?",
    answer:
      "Sí, desarrollamos sistemas a medida según las necesidades específicas de tu negocio. Realizamos un análisis de requerimientos para ofrecer soluciones eficientes, escalables y adaptadas a tu operación.",
  },
  {
    question: "¿Pueden desarrollar una app móvil para mi empresa?",
    answer:
      "Claro, desarrollamos aplicaciones móviles nativas e híbridas tanto para Android como iOS. Nos enfocamos en rendimiento, experiencia de usuario y compatibilidad con tus sistemas existentes.",
  },
  {
    question: "¿Realizan mantenimiento a sistemas ya existentes?",
    answer:
      "Sí, brindamos servicios de mantenimiento correctivo y evolutivo para sistemas ya desarrollados, incluso si no fueron construidos por nosotros. Evaluamos primero su estado para ofrecerte la mejor solución.",
  },
  {
    question: "¿Cómo es el proceso de trabajo desde el primer contacto?",
    answer:
      "Iniciamos con una reunión de levantamiento de requerimientos, seguido de una propuesta técnica y económica. Una vez aprobado, planificamos el desarrollo en fases, con entregas parciales y revisión continua contigo.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Trabajamos con tecnologías modernas como Node.js, Laravel, Flutter, React, PostgreSQL, MongoDB y más. Elegimos la tecnología más adecuada según el proyecto y sus necesidades específicas.",
  },
  {
    question: "¿Entregan el código fuente del sistema?",
    answer:
      "Sí, si se acuerda en el contrato, entregamos el código fuente documentado al finalizar el proyecto. También ofrecemos opciones de licenciamiento si prefieres que gestionemos el sistema por ti.",
  },
];


export default Faq;