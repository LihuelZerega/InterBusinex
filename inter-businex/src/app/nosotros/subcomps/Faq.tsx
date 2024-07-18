"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const Response1 =
    "Nuestra Visión es transformar la logística en un plan integral que desarrolle la apertura de nuevos mercados a través del análisis, investigación y aplicación de estrategias desde los primeros pasos hasta la incursión en nuevos territorios convirtiéndose en líder del área.";
  const Response2 =
    "Nuestros valores son: Compromiso, seriedad, responsabilidad, fidelización, transparencia, confianza, integridad y calidad.";
  const Response3 =
    "La principal diferencia entre InterBusineX y otras empresas del mercado es que nosotros ofrecemos una solución integral que abarca diversos aspectos. Nos enfocamos no sólo en la gestión logística, sino también en el desarrollo de mercado, la viabilidad del proyecto y la asesoría en comercio exterior.";
  const Response4 =
    "En InterBusineX, asumimos diversas responsabilidades sociales: sostenibilidad ambiental, ética empresarial, desarrollo comunitario, diversidad e inclusión y responsabilidad laboral.";

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
            aria-label="¿Cuál es la visión de InterBusineX?"
            title="¿Cuál es la visión de InterBusineX?"
          >
            <div className="text-neutral-600">{Response1}</div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="¿Cuáles son los valores fundamentales de InterBusineX?"
            title="¿Cuáles son los valores fundamentales de InterBusineX?"
          >
            <div className="text-neutral-600">{Response2}</div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="¿Cómo demuestra InterBusineX su responsabilidad social?"
            title="¿Cómo demuestra InterBusineX su responsabilidad social?"
          >
            <div className="text-neutral-600">{Response3}</div>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="¿Qué diferencia a InterBusineX de otras empresas del sector?"
            title="¿Qué diferencia a InterBusineX de otras empresas del sector?"
          >
            <div className="text-neutral-600">{Response4}</div>
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
