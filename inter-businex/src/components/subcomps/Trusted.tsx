"use client";
import React from "react";
import { Tabs, Text } from "@medusajs/ui";

export function Trusted() {
  return (
    <div className="w-full bg-white shadow-xl p-6 rounded-md">
      <Tabs defaultValue="general">
        <div className="flex flex-col lg:flex-row w-full mb-6">
          <div className="lg:w-1/3 text-3xl md:text-4xl xl:text-5xl font-semibold text-[#05052b] mb-4 lg:mb-0 lg:pr-14 xl:pr-12">
            Casos de Éxito de nuestros clientes
          </div>
          <div className="lg:w-2/3">
            <Tabs.Content value="general">
              <Text size="small">
                At ACME, we&apos;re dedicated to providing you with an
                exceptional shopping experience. Our wide selection of products
                caters to your every need, from fashion to electronics and
                beyond. We take pride in our commitment to quality, customer
                satisfaction, and timely delivery.
              </Text>
            </Tabs.Content>
            <Tabs.Content value="shipping">
              <Text size="small">
                Shipping is a crucial part of our service, designed to ensure
                your products reach you quickly and securely. Our dedicated team
                works tirelessly to process orders, carefully package items, and
                coordinate with reliable carriers to deliver your purchases to
                your doorstep.
              </Text>
            </Tabs.Content>
            <Tabs.Content value="payment">
              <Text size="small">
                Our payment process is designed to make your shopping experience
                smooth and secure. We offer a variety of payment options to
                accommodate your preferences, from credit and debit cards to
                online payment gateways. Rest assured that your financial
                information is protected through advanced encryption methods.
              </Text>
            </Tabs.Content>
          </div>
        </div>

        <Tabs.List className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-4 lg:gap-x-8 xl:gap-x-10 w-full">
          <div className="bg-red-300 w-full h-36 rounded-lg">
            <Tabs.Trigger value="general" className="w-full h-full">
              General
            </Tabs.Trigger>
          </div>
          <div className="bg-red-300 w-full h-36 rounded-lg">
            <Tabs.Trigger value="shipping" className="w-full h-full">
              Shipping
            </Tabs.Trigger>
          </div>
          <div className="bg-red-300 w-full h-36 rounded-lg">
            <Tabs.Trigger value="payment" className="w-full h-full">
              Payment
            </Tabs.Trigger>
          </div>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
