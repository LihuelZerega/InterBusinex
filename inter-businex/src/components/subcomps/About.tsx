import React from "react";
import Image from "next/image";
import ViabilidadHome from "@/images/ViabilidadHome.png";
import DesarrolloHome from "@/images/DesarrolloHome.png";
import AsesoriaHome from "@/images/AsesoriaHome.png";
import GestionHome from "@/images/GestionHome.png";
import { ArrowUpRight01Icon } from "@/components/Icons";

function About() {
  return (
    <div className="bg-white mt-6 py-12">
      <section>
        <h2 className="text-4xl sm:text-5xl font-semibold text-[#05052b]">
          Sobre InterBusineX
        </h2>
        <p className="text-lg text-neutral-700 max-w-2xl my-4">
          Nos esforzamos por ser líderes en nuestro sector, impulsando el
          crecimiento económico global a través de soluciones innovadoras y
          personalizadas:
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
        <div>
          <div className="w-full h-56 rounded-lg">
            <Image
              src={ViabilidadHome}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#05052b] my-3">
              Viabilidad de proyectos
            </h3>
            <p className="text-neutral-600">
              Evaluamos la oportunidad de tu negocio, realizando un análisis
              integral de factibilidad técnica, económica, operacional y
              ambiental que nos permita alcanzar un proceso exitoso.
            </p>
            <a href="/servicios#viabilidad">
              <button className="flex flex-row items-center bg-[#05a4ff] hover:bg-sky-400 transition-all duration-200 text-white font-light rounded-md px-4 py-2 my-4 sm:my-6">
                MÁS INFO
                <span className="ml-1">
                  <ArrowUpRight01Icon />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <div className="w-full h-56 rounded-lg">
            <Image
              src={DesarrolloHome}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#05052b] my-3">
              Desarrollo de mercados
            </h3>
            <p className="text-neutral-600">
              Nos enfocamos en la búsqueda de estrategias para la expansión de
              tu negocio a partir de la conquista de nuevos mercados.
            </p>
            <a href="/servicios#desarrollo">
              <button className="flex flex-row items-center bg-[#05a4ff] hover:bg-sky-400 transition-all duration-200 text-white font-light rounded-md px-4 py-2 my-4 sm:my-6">
                MÁS INFO
                <span className="ml-1">
                  <ArrowUpRight01Icon />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <div className="w-full h-56 rounded-lg">
            <Image
              src={AsesoriaHome}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#05052b] my-3">
              Asesoría en comercio exterior
            </h3>
            <p className="text-neutral-600">
              Te acompañamos en el proceso de globalización de tu negocio.
              Brindamos conocimiento especializado y apoyo práctico en todas las
              etapas.
            </p>
            <a href="/servicios#asesoria">
              <button className="flex flex-row items-center bg-[#05a4ff] hover:bg-sky-400 transition-all duration-200 text-white font-light rounded-md px-4 py-2 my-4 sm:my-6">
                MÁS INFO
                <span className="ml-1">
                  <ArrowUpRight01Icon />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <div className="w-full h-56 rounded-lg">
            <Image
              src={GestionHome}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#05052b] my-3">
              Gestión logística
            </h3>
            <p className="text-neutral-600">
              Gestionamos alianzas estratégicas que nos permiten ofrecer
              procesos multimodales. Aportamos eficiencia, calidad y
              rentabilidad de las operaciones logísticas de tu negocio.
            </p>
            <a href="/servicios#gestion-logistica">
              <button className="flex flex-row items-center bg-[#05a4ff] hover:bg-sky-400 transition-all duration-200 text-white font-light rounded-md px-4 py-2 my-4 sm:my-6">
                MÁS INFO
                <span className="ml-1">
                  <ArrowUpRight01Icon />
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
