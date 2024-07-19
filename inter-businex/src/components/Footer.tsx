import React from "react";
import Image from "next/image";
import LogoInterBusineX from "@/images/LOGO-512-BLANCO.png";

function Footer() {
  return (
    <section className="py-10 bg-[#05052b] sm:pt-16 lg:pt-24 rounded-t-2xl">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <div className="flex items-center">
              <Image
                src={LogoInterBusineX}
                alt="InterBusineX"
                width={40}
                height={40}
              />
              <p className="text-white text-2xl font-bold">InterBusineX</p>
            </div>

            <p className="text-base leading-relaxed text-gray-300 mt-7">
              Creemos en un mundo en el que las barreras comerciales no existen.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base font-semibold text-white">Servicios</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="/servicios#viabilidad"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Viabilidad de proyectos
                </a>
              </li>

              <li>
                <a
                  href="/servicios#desarrollo"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Desarrollo de mercados
                </a>
              </li>

              <li>
                <a
                  href="/servicios#asesoria"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Asesoría en comercio exterior
                </a>
              </li>

              <li>
                <a
                  href="/servicios#gestion-logistica"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Gestión Logística
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base font-semibold text-white">Nosotros</p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="/nosotros#about"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Quienes somos
                </a>
              </li>

              <li>
                <a
                  href="/nosotros#mision"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Misión
                </a>
              </li>

              <li>
                <a
                  href="/nosotros#vision"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Visión
                </a>
              </li>

              <li>
                <a
                  href="/nosotros#valores"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Valores
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Contacto</p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="/contacto"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  +34 603 90 24 32
                </a>
              </li>

              <li>
                <a
                  href="/contacto"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  interbusinex@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="/contacto"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  Formulario de Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2024, Todos los derechos reservados por InterBusineX.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
