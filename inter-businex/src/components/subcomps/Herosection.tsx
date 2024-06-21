import React from "react";
import Image from "next/image";
import HeroImage from "@/images/Hero3.jpg";
import HeroMobile from "@/images/HeroMobile.jpg";
import {ArrowUpRight01Icon} from "@/components/Icons";

const Herosection = () => {
  return (
    <div className="h-[80vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[100vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-opacity-30 bg-black">
      <div className="h-full w-full object-cover absolute inset-0">
        <Image src={HeroMobile} alt="" width={1080} height={1920} className="block xl:hidden h-full w-full object-cover absolute inset-0 rounded-b-2xl"/>
        <Image src={HeroImage} alt="" width={1920} height={1040} className="hidden xl:block h-full w-full object-cover absolute inset-0 rounded-b-2xl"/>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col text-left xl:ml-12">
        <div className="py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col text-center xl:text-left">
            <h1 className="mt-12 sm:mt-0 text-5xl font-semibold tracking-tight text-neutral-100 sm:text-8xl">
              Tu Conexión <br /> al Mundo
            </h1>
            <p className="px-6 sm:px-0 mt-6 text-base xl:text-xl xl:leading-8 text-white">
              Creemos en un mundo donde las barreras comerciales no <br className="hidden xl:block"/>{" "}
              existen. Por eso trabajamos para hacer que el comercio <br className="hidden xl:block"/>{" "}
              internacional sea un proceso accesible y eficiente para tu
              negocio.
            </p>
            <div className="mt-10 flex flex-col xl:flex-row items-center justify-left gap-x-6">
              <a href="/servicios" className="flex flex-row items-center text-white text-xl">
                Descubre Nuestros Servicios{" "}
                <span className="ml-1">
                  <ArrowUpRight01Icon />
                </span>
              </a>
              <a href="/nosotros" className="flex flex-row items-center text-white text-xl">
                Conocenos
                <span className="ml-1">
                  <ArrowUpRight01Icon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
