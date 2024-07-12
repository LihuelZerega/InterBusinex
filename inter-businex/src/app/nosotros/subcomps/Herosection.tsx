import React from "react";
import Image from "next/image";
import HeroImage from "@/images/NosotrosHeroDesktop.png";
import HeroMobile from "@/images/NosotrosHeroMobile.png";
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
            <h1 className="mt-12 sm:mt-0 text-5xl font-semibold tracking-tight text-neutral-100 sm:text-8xl">
              Sobre <br /> InterBusineX
            </h1>
            <p className="px-6 sm:px-0 mt-6 text-sm md:text-base xl:text-xl xl:leading-8 text-white">
              En InterBusineX, transformamos la logística en un plan integral
              <br className="hidden lg:block" />
              que impulsa la apertura de nuevos mercados. Con un enfoque en el
              <br className="hidden lg:block" />
              compromiso, la seriedad y la responsabilidad, trabajamos
              incansablemente
              <br className="hidden lg:block" />
              para convertirnos en líderes en el área y asegurar el éxito de
              nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
