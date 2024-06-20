"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Services() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col-reverse items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-2xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-2xl -bottom-12 -right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#05052b]">
                  Viabilidad de proyectos
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Evaluamos la oportunidad de tu negocio realizando un análisis
                  integral de factibilidad técnica, económica, operacional y
                  ambiental que nos permita un proceso exitoso.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                    title="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {defaultContent}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué barreras de entrada existen en el mercado objetivo?"
                    title="¿Qué barreras de entrada existen en el mercado objetivo?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                    title="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                    title="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                    title="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#05052b]">
                  Viabilidad de proyectos
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Evaluamos la oportunidad de tu negocio realizando un análisis
                  integral de factibilidad técnica, económica, operacional y
                  ambiental que nos permita un proceso exitoso.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                    title="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {defaultContent}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué barreras de entrada existen en el mercado objetivo?"
                    title="¿Qué barreras de entrada existen en el mercado objetivo?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                    title="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                    title="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                    title="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="pr-12 lg:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-2xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-2xl -bottom-12 -right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col-reverse items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-2xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-2xl -bottom-12 -right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#05052b]">
                  Viabilidad de proyectos
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Evaluamos la oportunidad de tu negocio realizando un análisis
                  integral de factibilidad técnica, económica, operacional y
                  ambiental que nos permita un proceso exitoso.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                    title="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {defaultContent}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué barreras de entrada existen en el mercado objetivo?"
                    title="¿Qué barreras de entrada existen en el mercado objetivo?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                    title="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                    title="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                    title="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#05052b]">
                  Viabilidad de proyectos
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Evaluamos la oportunidad de tu negocio realizando un análisis
                  integral de factibilidad técnica, económica, operacional y
                  ambiental que nos permita un proceso exitoso.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                    title="¿Cuál es el análisis de mercado para mis productos en el país de destino?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {defaultContent}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué barreras de entrada existen en el mercado objetivo?"
                    title="¿Qué barreras de entrada existen en el mercado objetivo?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                    title="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                    title="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                    title="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="pr-12 lg:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-2xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-2xl -bottom-12 -right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
