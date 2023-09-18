import React from "react";

const Hero = () => {
  return (
    <header className="py-10">
      <div className=" container">
        <h2 className="text-[#4E4B8B] text-[18px] sm:text-[32px] font-bold">
          Servicios
        </h2>
        {text.map((item, index) => {
          return (
            <div key={index} className="pb-7">
              <h1 className="text-[32px] text-[#3D8095] font-bold  text-center pb-2">
                {item.heading}
              </h1>
              <p className="text-[20px] sm:text-[22px] text-[#646467] font-medium text-center pb-7">
                {item.description}
              </p>
              {item.innerData.map((newItem, idx) => {
                return (
                  <div className="max-w-[618px] mx-auto" key={idx}>
                    <p className="pb-1 text-base font-bold text-[#3D8095]">
                      {newItem.heading}
                    </p>
                    <p className="pb-5 text-base font-normal text-[#646467]">
                      {newItem.text}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Hero;

const text = [
  {
    heading: "Servicios Gestionados ",
    description: "(Managed Services)",
    innerData: [
      {
        text: "Los Servicios Gestionados, también conocidos como Managed Services en inglés, se refieren a la externalización de la gestión y operación de ciertos aspectos de las tecnologías de la información (TI) de una organización a un proveedor de servicios especializado. En lugar de que la organización administre internamente todos sus sistemas y procesos de TI, contrata a un proveedor externo para que se encargue de dichas responsabilidades.",
      },
      {
        text: "Nuestros Servicios Gestionados abarcan una amplia gama de áreas y pueden incluir:",
      },
      {
        heading: "Soporte de aplicaciones: ",
        text: "Nos encargamos de la instalación, configuración, actualización y mantenimiento de las aplicaciones empresariales utilizadas por la organización. Esto puede incluir sistemas de gestión de relaciones con clientes (CRM), sistemas de gestión de recursos empresariales (ERP), software de colaboración y otros tipos de aplicaciones.",
      },
      {
        heading: "Respaldo y recuperación de datos: ",
        text: "Nos encargamos de realizar copias de seguridad regulares de los datos de la organización y de garantizar su recuperación en caso de pérdida o desastre. Esto puede incluir la planificación de la continuidad del negocio y la recuperación ante desastres.",
      },
      {
        heading: "Servicios en la nube: ",
        text: "Nos encargamos de gestionar los servicios en la nube utilizados por la organización, como infraestructura en la nube, plataformas y software como servicio. Nos encargamos de la configuración, supervisión y gestión de estos entornos en la nube.",
      },
      {
        text: "Los beneficios de los servicios gestionados incluyen:",
      },
      {
        heading: "Reducción de costos: ",
        text: "Al externalizar la gestión de TI, las organizaciones pueden reducir los costos asociados con la contratación y capacitación de personal interno, la adquisición de infraestructura y herramientas especializadas, y el mantenimiento continuo.",
      },
      {
        heading: "Mayor enfoque en el negocio principal: ",
        text: "Al confiar la gestión de TI a un proveedor externo, las organizaciones pueden concentrarse en sus actividades principales y estratégicas, en lugar de preocuparse por la gestión de TI y la resolución de problemas técnicos.",
      },
      {
        heading: "Acceso a conocimientos y experiencia especializados: ",
        text: "Los proveedores de servicios gestionados suelen contar con personal altamente capacitado y certificado en diversas áreas de TI, lo que permite a las organizaciones aprovechar su experiencia y conocimientos especializados.",
      },
      {
        heading: "Mayor disponibilidad y rendimiento: ",
        text: "Los proveedores de servicios gestionados suelen garantizar altos niveles de disponibilidad, rendimiento y seguridad de los sistemas y aplicaciones gestionados, lo que contribuye a la eficiencia y productividad de la organización.",
      },
    ],
  },
];
