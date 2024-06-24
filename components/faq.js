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
    question: "¿Qué tipo de servicios vienen con los sistemas que ofrecen?",
    answer: "Ofrecemos un mes de nuestro servicio de cloud con cualquiera de nuestros sistemas.",
  },
  {
    question: "Cual es nuestra politica de garantia respecto a los servicios? ",
    answer:
      "En nuestros acuerdos se detallan claramente los alcances y exclusiones de nuestras garantías. Tomamos con seriedad nuestros compromisos y trabajamos duro para entregar servicios de calidad que cumplan las expectativas de los clientes. Con esta política de garantía buscamos dar tranquilidad y confianza en nuestros servicios.",
  },
  {
    question: "¿Ofrecen soporte técnico? ",
    answer:
    "Sí, ofrecemos soporte técnico en caso de cualquier inconveniente con respecto a nuestros sistemas integrados, además de asistencia técnica si fuera necesario."
  },
];

export default Faq;