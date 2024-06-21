"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div>
        <h2 className="text-[#05052b] text-center font-semibold text-3xl">
          Preguntas Frecuentes
        </h2>
      </div>
      <div className="max-w-3xl mx-auto my-6 lg:my-12">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="¿Qué incluye el análisis de mercado de Interbusinex?"
            title="¿Qué incluye el análisis de mercado de Interbusinex?"
            className="bg-white"
          >
            <div className="text-neutral-600">{defaultContent}</div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="¿Cómo ayuda Interbusinex en la logística?"
            title="¿Cómo ayuda Interbusinex en la logística?"
          >
            <div className="text-neutral-600">{defaultContent}</div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="¿Interbusinex ofrece asesoramiento continuo?"
            title="¿Interbusinex ofrece asesoramiento continuo?"
          >
            <div className="text-neutral-600">{defaultContent}</div>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="¿Qué beneficios ofrecen las estrategias de entrada de Interbusinex?"
            title="¿Qué beneficios ofrecen las estrategias de entrada de Interbusinex?"
          >
            <div className="text-neutral-600">{defaultContent}</div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="text-center mt-6">
        <p className="text-neutral-600 text-sm sm:text-base">
          ¿No encontraste la respuesta que buscabas?{" "}
          <br className="sm:hidden" />
          <a href="/contacto" className="text-[#05a4ff] hover:text-sky-400">
            Contactá con nuestro soporte.
          </a>
        </p>
      </div>
    </div>
  );
}
