import React from "react";
import Container from "./container";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  return (
    <Container className="pb-16">
      <div className="w-full max-w-2xl mx-auto">
        <div className="divide-y divide-gray-200 dark:divide-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg">
          {faqdata.map((item, index) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`${
                        open ? "rotate-180" : ""
                      } h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Disclosure.Panel className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </Container>
  );
};

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