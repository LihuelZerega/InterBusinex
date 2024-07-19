import React from "react";
import Image from "next/image";
import HeroImage from "@/images/ContactoHeroDesktop.png";
import HeroMobile from "@/images/ContactoHeroMobile.png";
import ContactForm from "./ContactForm";

const Herosection = () => {
  return (
    // <div className="h-screen w-full">
    //   <div className="h-full w-full object-cover absolute inset-0">
    //     <Image
    //       src={HeroMobile}
    //       alt=""
    //       width={1080}
    //       height={1920}
    //       className="block xl:hidden h-[1300px] w-full object-cover"
    //     />
    //     <Image
    //       src={HeroImage}
    //       alt=""
    //       width={1920}
    //       height={1040}
    //       className="hidden xl:block h-full w-full object-cover"
    //     />
    //   </div>
    //   <div className="absolute inset-0 z-10 flex flex-col text-left">
    //     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between py-24 px-6">
    //       <div className="flex flex-col pb-4 text-center lg:text-left">
    //         <span className="text-2xl font-medium text-neutral-200 pb-2">
    //           ¡CONTACTANOS!
    //         </span>
    //         <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold">
    //           No pierdas tiempo <br /> ¡Comencemos hoy!
    //         </h3>
    //         <div className="flex flex-row items-center space-x-2 mt-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="28"
    //             height="28"
    //             color="#05a4ff"
    //             fill="none"
    //           >
    //             <path
    //               d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //           <h3 className="text-xl text-white">info@InterBusineX.com</h3>
    //         </div>
    //         <div className="flex flex-row items-center space-x-2 mt-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="28"
    //             height="28"
    //             color="#05a4ff"
    //             fill="none"
    //           >
    //             <path
    //               d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //             />
    //           </svg>
    //           <h3 className="text-xl text-white">+52 1 55 1234 5678</h3>
    //         </div>
    //       </div>
    //       <div className="py-12">
    //         <ContactForm />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="pt-16">
      <div
        className="flex flex-col sm:flex-row px-6 sm:px-12 lg:px-16 sm:py-12 2xl:px-64 md:bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbsvjl61y/image/upload/v1719079339/ContactoHeroDesktop_bk1i92.png')",
        }}
      >
        <section className="h-1/2 sm:w-1/2 my-6 sm:my-0 pr-0 sm:pr-24">
          <div className="flex flex-col pb-4 text-center sm:text-left">
            <span className="text-2xl font-medium text-neutral-200 pb-2 mt-12 sm:mt-0">
              ¡CONTACTANOS!
            </span>
            <h3 className="text-3xl text-center sm:text-left sm:text-4xl lg:text-5xl text-white font-semibold">
              No pierdas tiempo <br /> ¡Comencemos hoy!
            </h3>
            <div>
              <p className="mt-6 text-white">
                Si tienes alguna pregunta o deseas mas información sobre
                nuestros servicios, no dudes en ponerte en contacto con
                nosotros.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                color="#05a4ff"
                fill="none"
              >
                <path
                  d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl text-white"> interbusinex@gmail.com</h3>
            </div>
            <div className="flex flex-row items-center space-x-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                color="#05a4ff"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <h3 className="text-xl text-white">+34 603 90 24 32</h3>
            </div>
          </div>
        </section>
        <section className="h-1/2 sm:w-1/2 my-6 sm:my-0">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Herosection;
