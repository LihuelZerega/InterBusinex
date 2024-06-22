import React from "react";
import Image from "next/image";
import HeroImage from "@/images/ServiciosHeroDesktop.png";
import HeroMobile from "@/images/ServiciosHeroMobile.png";
import { ArrowUpRight01Icon } from "@/components/Icons";

const Herosection = () => {
  return (
    <div className="h-[80vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[100vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-white">
      <div className="h-full w-full object-cover absolute inset-0">
        <Image
          src={HeroMobile}
          alt=""
          width={1080}
          height={1920}
          className="block xl:hidden h-full w-full object-cover absolute inset-0 rounded-b-2xl"
        />
        <Image
          src={HeroImage}
          alt=""
          width={1920}
          height={1040}
          className="hidden xl:block h-full w-full object-cover absolute inset-0 rounded-b-2xl"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col text-left xl:ml-12">
        <div className="py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col text-center xl:text-left">
            <h1 className="mt-12 sm:mt-0 text-4xl font-semibold tracking-tight text-neutral-100 sm:text-7xl">
              Servicios de <br /> Expansión Global
            </h1>
            <div className="mt-10 flex flex-col items-center justify-center xl:items-start xl:justify-start gap-x-6 gap-y-3">
              <div className="flex flex-col xl:flex-row gap-x-6 gap-y-4">
                <a
                  href="#viabilidad"
                  className="text-white bg-[#05a4ff] hover:bg-sky-500 px-10 xl:px-2 py-2 rounded-md text-xl"
                >
                  Viabilidad de proyectos
                </a>
                <a
                  href="#desarrollo"
                  className="text-white bg-[#05a4ff] hover:bg-sky-500 px-10 xl:px-2 py-2 rounded-md text-xl"
                >
                  Desarrollo de mercados
                </a>
              </div>
              <div className="flex flex-col xl:flex-row gap-x-6 gap-y-4">
                <a
                  href="#asesoria"
                  className="text-white bg-[#05a4ff] hover:bg-sky-500 px-2 py-2 rounded-md text-xl"
                >
                  Asesoría en comercio exterior
                </a>
                <a
                  href="#gestion-logistica"
                  className="text-white bg-[#05a4ff] hover:bg-sky-500 px-2 py-2 rounded-md text-xl"
                >
                  Gestión Logística
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
