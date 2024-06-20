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
  const ViabilidadResponse1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const ViabilidadResponse2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const ViabilidadResponse3 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const ViabilidadResponse4 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const ViabilidadResponse5 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";

  const DesarrolloResponse1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const DesarrolloResponse2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const DesarrolloResponse3 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const DesarrolloResponse4 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";

  const AsesoriaResponse1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const AsesoriaResponse2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const AsesoriaResponse3 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const AsesoriaResponse4 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const AsesoriaResponse5 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";

  const GestionResponse1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const GestionResponse2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const GestionResponse3 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const GestionResponse4 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";
  const GestionResponse5 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl lacinia nisl, sit amet.";

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
                      {ViabilidadResponse1}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué barreras de entrada existen en el mercado objetivo?"
                    title="¿Qué barreras de entrada existen en el mercado objetivo?"
                  >
                    {ViabilidadResponse2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                    title="¿Cuál es el costo estimado de llevar a cabo el proyecto de exportación/importación?"
                  >
                    {ViabilidadResponse3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                    title="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                  >
                    {ViabilidadResponse4}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                    title="¿Qué estrategias de entrada al mercado recomienda para maximizar el éxito?"
                  >
                    {ViabilidadResponse5}
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
                  Desarrollo de mercados
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Nos enfocamos en la búsqueda de nuevos mercados geográficos,
                  aumentando tus ventas con la adaptación de tu producto o
                  servicio para satisfacer las necesidad del mercado
                  internacional. elaboramos un estudio de la competencia y
                  establecemos redes de distribución y logística para alcanzar
                  el objetivo.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuáles son las tendencias actuales en el mercado internacional para mi sector?"
                    title="¿Cuáles son las tendencias actuales en el mercado internacional para mi sector?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {DesarrolloResponse1}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Cómo están evolucionando las regulaciones comerciales en los mercados internacionales clave?"
                    title="¿Cómo están evolucionando las regulaciones comerciales en los mercados internacionales clave?"
                  >
                    {DesarrolloResponse2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cuáles son las mejores prácticas de marketing y ventas en el mercado internacional?"
                    title="¿Cuáles son las mejores prácticas de marketing y ventas en el mercado internacional?"
                  >
                    {DesarrolloResponse3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                    title="¿Cuáles son los riesgos asociados con este proyecto y cómo puedo mitigarlos?"
                  >
                    {DesarrolloResponse4}
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
                  Asesoría en comercio exterior
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Ayudamos a tu empresa en el ambito del comercio internacional
                  brindadndo conocimientos especializados y apoyo practico en
                  todas las etapas del proces de internacionalizacion. <br />
                  Optimizamos y expandimos tus actividaddes comerciales,
                  minimizando los riesgos y maximizando oportunidad de exito en
                  los mercados internacionales.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuáles son los requisitos para exportar/importar productos a un país?"
                    title="¿Cuáles son los requisitos para exportar/importar productos a un país?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {AsesoriaResponse1}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué aranceles e impuestos se aplican a mis productos?"
                    title="¿Qué aranceles e impuestos se aplican a mis productos?"
                  >
                    {AsesoriaResponse2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cómo puedo asegurarme de que mis envíos cumplan con las regulaciones de comercio internacional?"
                    title="¿Cómo puedo asegurarme de que mis envíos cumplan con las regulaciones de comercio internacional?"
                  >
                    {AsesoriaResponse3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Cuál es el proceso para clasificar arancelariamente mis productos?"
                    title="¿Cuál es el proceso para clasificar arancelariamente mis productos?"
                  >
                    {AsesoriaResponse4}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué opciones de financiamiento y seguros están disponibles para mis operaciones de comercio internacional?"
                    title="¿Qué opciones de financiamiento y seguros están disponibles para mis operaciones de comercio internacional?"
                  >
                    {AsesoriaResponse5}
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
                  Gestión Logística
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Trabajamos la eficiencia, calidad, rentabilidad de las
                  operaciones logisticas de tus negocios y la entrega oportuna
                  de tus productos y/o servicios. <br />
                  Tenemos excelentes aliados estrategicos que nos permite
                  brindar procesos multimodales minimizando costos y maximizando
                  la satifaccion de tus clientes.
                </p>
              </div>
              <div className="mt-6">
                <Accordion isCompact>
                  <AccordionItem
                    key="1"
                    aria-label="¿Cuál es el costo y tiempo estimado de envío para mis productos?"
                    title="¿Cuál es el costo y tiempo estimado de envío para mis productos?"
                  >
                    <div className="text-base leading-relaxed text-gray-600">
                      {GestionResponse1}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="¿Qué opciones de transporte están disponibles para mis productos?"
                    title="¿Qué opciones de transporte están disponibles para mis productos?"
                  >
                    {GestionResponse2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="¿Cómo puedo optimizar mi cadena de suministro internacional?"
                    title="¿Cómo puedo optimizar mi cadena de suministro internacional?"
                  >
                    {GestionResponse3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="¿Qué documentación es necesaria para el despacho aduanero?"
                    title="¿Qué documentación es necesaria para el despacho aduanero?"
                  >
                    {GestionResponse4}
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="¿Qué debo hacer en caso de retrasos o problemas en el envío?"
                    title="¿Qué debo hacer en caso de retrasos o problemas en el envío?"
                  >
                    {GestionResponse5}
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
