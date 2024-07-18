import React from "react";
import Image from "next/image";
import About1 from "@/images/QuienesSomos1.png";
import About2 from "@/images/QuienesSomos2.png";
import MisionVision1 from "@/images/MisionVision1.png";
import MisionVision2 from "@/images/MisionVision2.png";

function About() {
  return (
    <div>
      <section id="about" className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-start md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="hidden sm:block pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <Image
                  className="object-bottom rounded-md"
                  src={About1}
                  alt=""
                />

                <Image
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src={About2}
                  alt=""
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-[#05052b] lg:text-4xl">
                ¿Quiénes somos?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                En InterBusineX, somos una empresa dedicada a impulsar la
                expansión global de negocios a través de soluciones logísticas
                integrales y estrategias personalizadas. Nuestra misión es
                ayudar a las empresas a abrir nuevos mercados y maximizar sus
                oportunidades de crecimiento internacional. <br /> Con un equipo de
                expertos comprometidos y una sólida base de valores como el
                compromiso, la seriedad y la responsabilidad, trabajamos
                incansablemente para garantizar el éxito y la satisfacción de
                nuestros clientes en cada proyecto. <br /> Nos enorgullecemos de ser su
                conexión al mundo, ofreciendo un servicio de calidad que
                transforma sus metas en realidades.
              </p>
            </div>

            <div className="block sm:hidden pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <Image
                  className="object-bottom rounded-md"
                  src={About1}
                  alt=""
                />

                <Image
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src={About2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-start md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div>
              <h2
                id="mision"
                className="text-3xl font-bold leading-tight text-[#05052b] lg:text-4xl"
              >
                Nuestra Misión
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Nuestra misión es construir planes integrales en la apertura de
                nuevos mercados a quienes desean expandir su negocio.
              </p>

              <h2
                id="vision"
                className="text-3xl font-bold leading-tight text-[#05052b] lg:text-4xl mt-6"
              >
                Nuestra Visión
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Nuestra Visión es transformar la logística en un plan integral
                que desarrolle la apertura de nuevos mercados a través del
                análisis, investigación y aplicación de estrategias desde los
                primeros pasos hasta la incursión en nuevos territorios
                convirtiéndose en líder del área.
              </p>
            </div>

            <div className="hidden sm:block pl-12 sm:pl-24">
              <div className="relative max-w-xs mb-12">
                <Image
                  className="object-bottom rounded-md"
                  src={MisionVision1}
                  alt=""
                />

                <Image
                  className="absolute origin-bottom-left scale-75 rounded-md -bottom-12 -left-12"
                  src={MisionVision2}
                  alt=""
                />
              </div>
            </div>

            <div className="block sm:hidden pl-12 sm:pl-0">
              <div className="relative max-w-xs mb-12">
                <Image
                  className="object-bottom rounded-md"
                  src={MisionVision1}
                  alt=""
                />

                <Image
                  className="absolute origin-bottom-left scale-75 rounded-md -bottom-12 -left-12"
                  src={MisionVision2}
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

export default About;
