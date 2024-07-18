"use client";
import React from "react";
import Image from "next/image";
import DiferenciesBgImage from "@/images/BgDiferencias.png";
import DiferenciesBgImageMobile from "@/images/BgDiferenciasMobile.png";

function Diferencies() {
  return (
    <div className="h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-opacity-30 bg-black">
      <div className="h-full lg:h-[100vh] w-full object-cover absolute inset-0">
        <Image
          src={DiferenciesBgImageMobile}
          alt=""
          width={1080}
          height={1920}
          className="block lg:hidden h-full w-full object-cover absolute inset-0"
        />
        <Image
          src={DiferenciesBgImage}
          alt=""
          width={1920}
          height={1040}
          className="hidden lg:block h-full w-full object-cover absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="px-6 md:px-12 xl:px-32">
          <div className="flex flex-col bg-white p-6 lg:p-12 rounded-2xl">
            <div>
              <h3 className="text-4xl font-semibold text-[#05052b]">
                ¿Qué nos hace diferentes?
              </h3>
              <p className="text-sm mt-4 text-neutral-600">
                Con un enfoque en la calidad, responsabilidad y compromiso,
                trabajamos incansablemente <br /> para superar tus expectativas
                y obtener el crecimiento sostenible de tu negocio en nuevos
                mercados.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 py-6 lg:py-12">
              <div className="flex flex-row lg:flex-col items-start py-3 lg:py-0">
                <div className="bg-[#05a4ff] p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="56"
                    height="56"
                    color="#ffffff"
                    fill="none"
                  >
                    <path
                      d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5 20C5.43938 16.8438 7.67642 8.7643 10.4282 8.7643C12.3301 8.7643 12.8226 12.6353 14.6864 12.6353C17.8931 12.6353 17.4282 4 21 4"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-4 lg:ml-0">
                  <h3 className="lg:mt-6 font-semibold text-[#05052b]">
                    Análisis Integral de Factibilidad
                  </h3>
                  <p className="text-sm mt-4 font-medium text-neutral-600">
                    Desarrollamos un enfoque integral que nos permite garantizar
                    un proceso exitoso y alineado con tus objetivos y
                    estrategias.
                  </p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-start py-3 lg:py-0">
                <div className="bg-[#05a4ff] p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="56"
                    height="56"
                    color="#ffffff"
                    fill="none"
                  >
                    <path
                      d="M12.5 19L12.5 22"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 22H14.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      transform="matrix(-1 0 0 1 20.5 2)"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.5 4C9.15431 4.0385 9.49236 4.35899 10.0735 4.97301C11.1231 6.08206 12.1727 6.1746 12.8724 5.80492C13.922 5.2504 13.04 4.35221 14.2719 3.86409C15.0748 3.54595 15.1868 2.68026 14.7399 2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 10C18.5 10 18.2338 11.2468 17 11C14.5 10.5 13.7916 11.0589 13.7916 12.2511C13.7916 13.4432 13.7916 13.4432 13.2717 14.3373C12.9335 14.9189 12.8153 15.5004 13.4894 16"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.5 2C4.64864 3.79995 3.5 6.3082 3.5 9.08251C3.5 14.5598 7.97715 19 13.5 19C16.2255 19 18.6962 17.9187 20.5 16.165"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="ml-4 lg:ml-0">
                  <h3 className="lg:mt-6 font-semibold text-[#05052b]">
                    Expansión Personalizada
                  </h3>
                  <p className="text-sm mt-4 font-medium text-neutral-600">
                    Realizamos estudios de competencia y establecemos redes de
                    distribución y logística para tus ventas globales.
                  </p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-start py-3 lg:py-0">
                <div className="bg-[#05a4ff] p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="56"
                    height="56"
                    color="#ffffff"
                    fill="none"
                  >
                    <circle
                      cx="17"
                      cy="18"
                      r="2"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="7"
                      cy="18"
                      r="2"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 8H8"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 11H6"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-4 lg:ml-0">
                  <h3 className="lg:mt-6 font-semibold text-[#05052b]">
                    Optimización Logística Eficiente
                  </h3>
                  <p className="text-sm mt-4 font-medium text-neutral-600">
                    Trabajamos en la eficiencia, calidad y rentabilidad de tus
                    operaciones logísticas con un acompañamiento en todo tu
                    proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diferencies;
