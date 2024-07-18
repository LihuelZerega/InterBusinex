"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent1 =
    "Incluimos una amplia gama de componentes esenciales para comprender el mercado objetivo, identificar oportunidades y desarrollar estrategias eficaces, atendiendo las necesidades de tu negocio.";
  const defaultContent2 =
    "InterBusineX ofrece una variedad de servicios y soluciones para mejorar la logística de sus clientes. Estos servicios están diseñados para optimizar la cadena de suministro, reducir costos y aumentar la eficiencia operativa. ";
  const defaultContent3 =
    "Sí, ofrecemos asesoramiento continuo a todos nuestros clientes. Nuestro compromiso es el de proporcionar soluciones integrales y apoyo constante en todas las operaciones.";
  const defaultContent4 =
    "Ponemos a tu disposición todos los recursos, para que abras mercados de una forma segura y eficiente.";

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
            aria-label="¿Qué incluye el análisis de mercado de InterBusineX?"
            title="¿Qué incluye el análisis de mercado de InterBusineX?"
            className="bg-white"
          >
            <div className="text-neutral-600">{defaultContent1}</div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="¿Cómo ayuda InterBusineX en la logística?"
            title="¿Cómo ayuda InterBusineX en la logística?"
          >
            <div className="text-neutral-600">{defaultContent2}</div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="¿InterBusineX ofrece asesoramiento continuo?"
            title="¿InterBusineX ofrece asesoramiento continuo?"
          >
            <div className="text-neutral-600">{defaultContent3}</div>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="¿Qué beneficios ofrecen las estrategias de entrada de InterBusineX?"
            title="¿Qué beneficios ofrecen las estrategias de entrada de InterBusineX?"
          >
            <div className="text-neutral-600">{defaultContent4}</div>
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
