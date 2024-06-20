"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Viabilidad1 from "@/images/Viabilidad1.png";
import Viabilidad2 from "@/images/Viabilidad2.png";
import Desarrollo1 from "@/images/Desarrollo1.png";
import Desarrollo2 from "@/images/Desarrollo2.png";
import Desarrollo3 from "@/images/Desarrollo3.png";
import Asesoria1 from "@/images/Asesoria1.png";
import Asesoria2 from "@/images/Asesoria2.png";
import Gestion1 from "@/images/Gestion1.png";
import Gestion2 from "@/images/Gestion2.png";
import Gestion3 from "@/images/Gestion3.png";

function Services() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-24">
        <div className="max-w-7xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col-reverse items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs">
                <Image
                  className="object-bottom rounded-2xl scale-100 xl:scale-80 xl:-left-12"
                  src={Viabilidad1}
                  alt=""
                  width={500}
                  height={500}
                />

                <Image
                  className="absolute origin-bottom-right scale-75 xl:scale-80 rounded-2xl -bottom-12 -right-12 xl:-right-64"
                  src={Viabilidad2}
                  alt=""
                  width={500}
                  height={500}
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

      <section className="pt-12 pb-24 sm:pt-0 sm:pb-0 bg-white sm:py-16 lg:py-24">
        <div className="max-w-7xl px-6 mx-auto lg:px-8">
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

            <div className="lg:pr-0">
              <div className="block lg:hidden relative max-w-xs">
              <Image
                  className="object-bottom rounded-2xl scale-90 xl:scale-80 xl:-left-12"
                  src={Desarrollo3}
                  alt=""
                  width={500}
                  height={500}
                />

                <Image
                  className="absolute origin-bottom-right scale-75 xl:scale-80 rounded-2xl -bottom-12 left-6"
                  src={Desarrollo2}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="hidden lg:block relative max-w-xs">
                <Image
                  className="absolute object-bottom scale-50 lg:scale-75 -bottom-8 sm:-bottom-[280px] rounded-2xl"
                  src={Desarrollo1}
                  alt=""
                />

                <Image
                  className="absolute object-bottom scale-50 lg:scale-75 -bottom-8 sm:-bottom-[540px] rounded-2xl"
                  src={Desarrollo2}
                  alt=""
                />

                <Image
                  className="absolute origin-bottom-right scale-50 lg:scale-80 rounded-2xl sm:-bottom-[550px] xl:-bottom-[500px] md:-right-12 lg:-right-36 xl:-right-64"
                  src={Desarrollo3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sm:py-16 lg:py-24">
        <div className="max-w-7xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col-reverse items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs">
                <Image
                  className="object-bottom rounded-2xl scale-100 xl:scale-80 xl:-left-12"
                  src={Asesoria1}
                  alt=""
                  width={500}
                  height={500}
                />

                <Image
                  className="absolute origin-bottom-right scale-75 xl:scale-80 rounded-2xl -bottom-12 -right-12 xl:-right-64"
                  src={Asesoria2}
                  alt=""
                  width={500}
                  height={500}
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

      <section className="pt-12 pb-24 sm:pt-0 sm:pb-0 bg-white sm:py-16 lg:py-24">
        <div className="max-w-7xl px-6 mx-auto lg:px-8">
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

            <div className="lg:pr-0">
              <div className="block lg:hidden relative max-w-xs">
              <Image
                  className="object-bottom rounded-2xl scale-90 xl:scale-80 xl:-left-12"
                  src={Desarrollo3}
                  alt=""
                  width={500}
                  height={500}
                />

                <Image
                  className="absolute origin-bottom-right scale-75 xl:scale-80 rounded-2xl -bottom-12 left-6"
                  src={Desarrollo2}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="hidden lg:block relative max-w-xs">
                <Image
                  className="absolute object-bottom scale-50 lg:scale-75 -bottom-8 sm:-bottom-[280px] rounded-2xl"
                  src={Gestion1}
                  alt=""
                />

                <Image
                  className="absolute object-bottom scale-50 lg:scale-75 -bottom-8 sm:-bottom-[540px] rounded-2xl"
                  src={Gestion2}
                  alt=""
                />

                <Image
                  className="absolute origin-bottom-right scale-50 lg:scale-80 rounded-2xl sm:-bottom-[550px] xl:-bottom-[500px] md:-right-12 lg:-right-36 xl:-right-64"
                  src={Gestion3}
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
