import React from "react";
import Image from "next/image";
import About1 from "@/images/QuienesSomos1.png";
import About2 from "@/images/QuienesSomos2.png";
import MisionVision1 from  "@/images/MisionVision1.png"
import MisionVision2 from  "@/images/MisionVision2.png"

function About() {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
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
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
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
              <h2 className="text-3xl font-bold leading-tight text-[#05052b] lg:text-4xl">
                Nuestra Misión
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#05052b] lg:text-4xl mt-6">
                Nuestra Visión
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
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
