import React from "react";
import Image from "next/image";
import LogoInterBusinex from "@/images/logo.jpg";

function Footer() {
  return (
    <section className="py-10 bg-[#05052b] sm:pt-16 lg:pt-24 rounded-t-2xl">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <p className="text-white text-2xl font-bold">InterBusinex</p>

            <p className="text-base leading-relaxed text-gray-300 mt-7">
              Creemos en un mundo donde las barreras comerciales no existen.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base font-semibold text-white">Servicios</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Viabilidad de proyectos{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Desarrollo de mercados{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Asesoria en comercio exterior{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Gestión Logística{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base font-semibold text-white">Nosotros</p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Quienes somos{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Misión{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Visión{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Valores{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Contacto</p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  +54 1234 5678{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  info@interbusinex.com{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-neutral-300 transition-all duration-200 hover:text-[#05a4ff] focus:text-[#05a4ff]"
                >
                  {" "}
                  Formulario de Contacto{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2024, Todos los derechos reservados por Interbusinex.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Footer;
