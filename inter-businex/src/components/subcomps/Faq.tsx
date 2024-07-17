"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const Response1 =
    "Somos tu partner estratégico, especialistas en oportunidades de negocio y apertura de nuevos mercados.";
  const Response2 =
    "Construir proyectos integrales para expandir tu negocio con un enfoque competitivo.";
  const Response3 =
    "Viabilidad de proyectos, desarrollo de mercados, asesoría en comercio exterior y gestión logística.";

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
      <div>
        <h2 className="text-[#05052b] text-center font-semibold text-3xl">
          Preguntas Frecuentes
        </h2>
      </div>
      <div className="max-w-3xl mx-auto my-6 lg:my-12">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="¿Que es InterBusineX?"
            title="¿Que es InterBusineX?"
            className="bg-white"
          >
            <div className="text-neutral-600">{Response1}</div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="¿Cuál es la misión de InterBusineX?"
            title="¿Cuál es la misión de InterBusineX?"
          >
            <div className="text-neutral-600">{Response2}</div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="¿Qué servicios ofrece InterBusineX?"
            title="¿Qué servicios ofrece InterBusineX?"
          >
            <div className="text-neutral-600">{Response3}</div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="text-center mt-6">
        <p className="text-neutral-600 text-sm sm:text-base">
          ¿No encontraste la respuesta que buscabas?{" "}
          <br className="sm:hidden" />
          <a href="/contacto" className="text-[#05a4ff] hover:text-sky-400">
            Contacta con nuestro soporte.
          </a>
        </p>
      </div>
    </div>
  );
}
