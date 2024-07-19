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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Services() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <motion.section
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={itemVariants}
        id="viabilidad"
        className="py-12 bg-white sm:py-16 lg:py-24"
      >
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
                {/* <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Evaluamos la oportunidad de tu negocio realizando un análisis
                  integral de factibilidad técnica, económica, operacional y
                  ambiental que nos permita un proceso exitoso.
                </p> */}
              </div>
              <div className="mt-6">
                <div>
                  <p className="text-base text-neutral-700">
                    ¿Quieres evaluar la posibilidad de expandir tu negocio?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Necesitas llegar a otros mercados siendo competitivo?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Te interesa encontrar oportunidades para
                    internacionalizarte?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Tienes las herramientas para hacerlo?
                  </p>
                  <hr className="my-4" />
                </div>
                <div>
                  <p className="text-base text-neutral-700">
                    Nuestro grupo de expertos te brindan todas las alternativas.
                    <a href="/contacto" className="text-sky-500">
                      {" "}
                      Contáctanos
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={itemVariants}
        id="desarrollo"
        className="pt-12 pb-24 sm:pt-0 sm:pb-0 bg-white sm:py-16 lg:py-24"
      >
        <div className="max-w-7xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#05052b]">
                  Desarrollo de mercados
                </h2>
                {/* <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Nos enfocamos en la búsqueda de nuevos mercados geográficos,
                  aumentando tus ventas con la adaptación de tu producto o
                  servicio para satisfacer las necesidades del mercado
                  internacional. Elaboramos un estudio de la competencia y
                  establecemos redes de distribución y logística para alcanzar
                  el objetivo.
                </p> */}
              </div>
              <div className="mt-6">
                <div>
                  <p className="text-base text-neutral-700">
                    ¿Quieres abrir mercados? ¿sabes cómo?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Buscas aumentar tu red de negocio?, ¿necesitas un
                    marketplace o distribuidor autorizado? (B2B / B2C)
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Conoces las tendencias de mercado y tu público objetivo?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Necesitas evaluar la competencia de tu negocio y superar
                    las barreras comerciales?
                  </p>
                  <hr className="my-4" />
                </div>
                <div>
                  <p className="text-base text-neutral-700">
                    Nuestro grupo de expertos te brindan todas las alternativas.
                    <a href="/contacto" className="text-sky-500">
                      {" "}
                      Contáctanos
                    </a>{" "}
                  </p>
                </div>
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
      </motion.section>

      <motion.section
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={itemVariants}
        id="asesoria"
        className="py-12 bg-white sm:py-16 lg:py-24"
      >
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
                {/* <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Ayudamos a tu empresa en todos los procesos del comercio
                  internacional. Brindamos conocimientos técnicos y
                  especializados a través de una gestión práctica en todas sus
                  etapas.
                </p> */}
              </div>
              <div className="mt-6">
                <div>
                  <p className="text-base text-neutral-700">
                    ¿Buscas traspasar fronteras? Importa y exporta con nosotros.
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Conoces la distribución física internacional idónea para
                    tus productos?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Necesitas las técnicas para que tu negocio supere aduanas,
                    conoces la normativa?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Te interesa encontrar ventajas arancelarias a nivel
                    internacional cumpliendo con las regulaciones del comercio
                    internacional?
                  </p>
                  <hr className="my-4" />
                </div>
                <div>
                  <p className="text-base text-neutral-700">
                    Nuestro grupo de expertos te brindan todas las alternativas.
                    <a href="/contacto" className="text-sky-500">
                      {" "}
                      Contáctanos
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={itemVariants}
        id="gestion-logistica"
        className="pt-12 pb-24 sm:pt-0 sm:pb-0 bg-white sm:py-16 lg:py-24 lg:mb-56"
      >
        <div className="max-w-7xl px-6 mx-auto lg:px-8">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#05052b]">
                  Gestión Logística
                </h2>
                {/* <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Trabajamos la eficiencia, calidad, rentabilidad de las
                  operaciones logisticas de tus negocios y la entrega oportuna
                  de tus productos y/o servicios. <br />
                  Tenemos excelentes aliados estrategicos que nos permite
                  brindar procesos multimodales minimizando costos y maximizando
                  la satifaccion de tus clientes.
                </p> */}
              </div>
              <div className="mt-6">
                <div>
                  <p className="text-base text-neutral-700">
                    ¿Identificas los retos de tu logística Internacional?
                    ¿Buscas un aliado?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Sabes cómo gestionar en tu negocio la cadena de suministro
                    internacional?
                  </p>
                  <hr className="my-4" />
                  <p className="text-base text-neutral-700">
                    ¿Conoces los tipos de logística, sabes cuál es el más
                    adecuado para tu producto?
                  </p>
                  <hr className="my-4" />
                </div>
                <div>
                  <p className="text-base text-neutral-700">
                    ¿Necesitas mejorar la eficiencia de tu logística? ¿Buscas tu
                    matriz de costo?
                    <a href="/contacto" className="text-sky-500">
                      {" "}
                      Contáctanos
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pr-0">
              <div className="block lg:hidden relative max-w-xs">
                <Image
                  className="object-bottom rounded-2xl scale-90 xl:scale-80 xl:-left-12"
                  src={Gestion3}
                  alt=""
                  width={500}
                  height={500}
                />

                <Image
                  className="absolute origin-bottom-right scale-75 xl:scale-80 rounded-2xl -bottom-12 left-6"
                  src={Gestion2}
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
      </motion.section>
    </div>
  );
}

export default Services;
