import React from "react";

function Values() {
  return (
    <div className="py-10 sm:py-16 lg:py-24 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <section id="valores">
        <h2 className="text-3xl font-bold leading-tight text-[#05052b] lg:text-4xl">
          Nuestros Valores
        </h2>
        <p className="mt-4 text-base leading-relaxed font-medium text-neutral-600">
          Comprometidos con la excelencia y la integridad, nuestros valores
          guían cada <br /> paso que damos, asegurando la satisfacción y el
          éxito de nuestros clientes.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 md:py-12">
        <div>
          <h3 className="text-[#05052b] font-semibold">Compromiso</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Dedicación total a nuestra misión y visión, cumpliendo promesas y
            dando el 100% en cada proyecto.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Seriedad</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Profesionalismo, respeto y formalidad en todas nuestras operaciones
            y relaciones empresariales.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Responsabilidad</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Establecemos credibilidad y confianza con un fuerte compromiso en
            cada proyecto.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Fidelización</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Mensajes claros y adaptados culturalmente para conectar mejor con
            cada cliente.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Transparencia</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Desglose claro y preciso de información sobre las operaciones,
            políticas y decisiones empresariales.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Confianza</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Mostramos casos de éxito y participamos en comunidades de la
            industria para generar confianza.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Integridad</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Honestidad en todas nuestras comunicaciones y relaciones, generando
            lealtad.
          </p>
        </div>
        <div>
          <h3 className="text-[#05052b] font-semibold">Calidad</h3>
          <p className="text-neutral-500 font-normal mt-2">
            Procesos eficientes y estandarizados para construir relaciones
            rentables a largo plazo.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Values;
