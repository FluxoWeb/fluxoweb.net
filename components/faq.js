import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Plus } from "lucide-react";

// Preguntas frecuentes: filas separadas por hilos, el signo + gira al abrir.
const Faq = ({ items = faqdata, lead = [] }) => {
  return (
    <div className="border-t border-line/15">
      {[...lead, ...items].map((item) => (
        <Disclosure key={item.question} as="div" className="border-b border-line/15">
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex w-full items-start justify-between gap-6 py-6 text-left">
                <span className="text-lg font-medium tracking-tight sm:text-xl">{item.question}</span>
                <span
                  className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                    open ? "border-green bg-green text-[#0B0B0B]" : "border-line/20 text-muted group-hover:border-line/40"
                  }`}
                >
                  <Plus className={`h-4 w-4 transition-transform duration-500 ease-out-expo ${open ? "rotate-45" : ""}`} />
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-out-expo"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="max-w-[62ch] pb-7 pr-14 text-[16px] leading-relaxed text-muted">
                  {item.answer}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
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


export { faqdata };
export default Faq;