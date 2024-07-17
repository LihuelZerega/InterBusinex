"use client";
import React from "react";
import Image from "next/image";
import TrustedBg from "@/images/TrustedBg.png";
import TrustedBgMobile from "@/images/TrustedBg.png";
import { Tabs, Text } from "@medusajs/ui";
import BlueWatersLogo from "@/images/logo-blue-waters-fondo-claro.png";

export function Trusted() {
  return (
    <div className="relative">
      <div className="relative">
        <Image
          src={TrustedBgMobile}
          alt=""
          className="block sm:hidden w-full h-[950px]"
        />
      </div>
      <div className="relative">
        <Image
          src={TrustedBg}
          alt=""
          className="hidden sm:block w-full lg:h-[80vh] 2xl:h-[80vh]"
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center mx-auto max-w-7xl px-3 sm:px-6 -top-12 sm:top-0 2xl:top-36">
        <div className="w-full bg-white shadow-xl p-6 sm:p-12 rounded-2xl">
          <Tabs defaultValue="bluewaters">
            <div className="flex flex-col lg:flex-row w-full mb-12">
              <div className="lg:w-1/3 xl:w-2/5 text-3xl md:text-4xl xl:text-5xl font-semibold text-[#05052b] mb-4 lg:mb-0 lg:pr-14 xl:pr-12">
                Casos de Éxito de nuestros clientes
              </div>
              <div className="lg:w-2/3 xl:w-3/5 text-neutral-600 text-lg">
                <Tabs.Content value="bluewaters">
                  <Text size="small">
                    Nuestra empresa no tenía experiencia en Comercio
                    Internacional. Iniciamos un estudio de viabilidad de
                    proyecto, logrando el crecimiento de nuestra compañía a
                    nivel Internacional, a base del compromiso, la excelencia y
                    el profesionalismo del grupo InterBusineX. Gracias a su
                    gestión, hoy somos importadores directos.
                  </Text>
                </Tabs.Content>
                <Tabs.Content value="shipping">
                  <Text size="small">
                    Shipping is a crucial part of our service, designed to
                    ensure your products reach you quickly and securely. Our
                    dedicated team works tirelessly to process orders, carefully
                    package items, and coordinate with reliable carriers to
                    deliver your purchases to your doorstep.
                  </Text>
                </Tabs.Content>
                <Tabs.Content value="payment">
                  <Text size="small">
                    Our payment process is designed to make your shopping
                    experience smooth and secure. We offer a variety of payment
                    options to accommodate your preferences, from credit and
                    debit cards to online payment gateways. Rest assured that
                    your financial information is protected through advanced
                    encryption methods.
                  </Text>
                </Tabs.Content>
              </div>
            </div>

            <Tabs.List className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-4 lg:gap-x-8 xl:gap-x-10 w-full">
              <div className="bg-transparent w-full h-36 rounded-lg">
                <Tabs.Trigger value="bluewaters" className="w-full h-full">
                  <Image src={BlueWatersLogo} alt="Blue Waters Logo" />
                </Tabs.Trigger>
              </div>
              <div className="bg-red-300 w-full h-40 rounded-lg shadow-sm">
                <Tabs.Trigger value="shipping" className="w-full h-full">
                  Shipping
                </Tabs.Trigger>
              </div>
              <div className="bg-red-300 w-full h-36 rounded-lg shadow-sm">
                <Tabs.Trigger value="payment" className="w-full h-full">
                  Payment
                </Tabs.Trigger>
              </div>
            </Tabs.List>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
