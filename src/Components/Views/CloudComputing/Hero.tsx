import React from "react";

const Hero = () => {
  return (
    <header className="py-10">
      <div className=" container">
        <h2 className="text-[#4E4B8B] text-[18px] sm:text-[32px] font-bold">
          Servicios{" "}
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
    heading: "Cloud Computing ",
    description: "(GCP, AWS, Azure)",
    innerData: [
      {
        text: 'La computación en la nube, también conocida como "cloud computing" en inglés, se refiere a la entrega de servicios informáticos a través de internet. En lugar de ejecutar aplicaciones o almacenar datos en los servidores locales de una computadora o servidor físico, la computación en la nube permite acceder a recursos y servicios informáticos a través de internet.',
      },
      {
        text: "En esta modalidad, los recursos informáticos, como servidores, almacenamiento, bases de datos, redes y software, están disponibles bajo demanda y se proporcionan como un servicio. Esto significa que los usuarios pueden acceder a estos recursos según sea necesario, sin tener que invertir en infraestructura propia ni preocuparse por su mantenimiento. Los servicios en la nube se suelen clasificar en tres categorías principales:",
      },
      {
        heading: "Infraestructura como servicio (IaaS): ",
        text: "Proporciona acceso a recursos de infraestructura virtual, como máquinas virtuales, almacenamiento y redes. Los usuarios tienen un mayor control sobre la configuración y administración de estos recursos, ya que pueden instalar y ejecutar su propio software y sistemas operativos en las máquinas virtuales.",
      },
      {
        heading: "Plataforma como servicio (PaaS): ",
        text: "Ofrece un entorno de desarrollo y despliegue completo para que los desarrolladores creen, prueben y desplieguen aplicaciones. Los usuarios tienen acceso a herramientas de desarrollo, lenguajes de programación, bibliotecas y servicios preconfigurados, sin tener que preocuparse por la infraestructura subyacente.",
      },
      {
        heading: "Software como servicio (SaaS): ",
        text: "Proporciona aplicaciones completas a través de internet, listas para usar y accesibles desde cualquier dispositivo con conexión a internet. Los usuarios simplemente utilizan las aplicaciones sin preocuparse por la infraestructura, el mantenimiento o la administración del software.",
      },
      {
        text: "Los beneficios de la computación en la nube incluyen la escalabilidad flexible, ya que los recursos pueden aumentar o disminuir según las necesidades, la accesibilidad global, ya que los servicios están disponibles en cualquier lugar con conexión a internet, y la reducción de costos, ya que no se requiere una inversión inicial en infraestructura.",
      },
      {
        text: "En resumen, la computación en la nube permite acceder a recursos informáticos y servicios a través de internet, eliminando la necesidad de infraestructura local y proporcionando flexibilidad, escalabilidad y accesibilidad a los usuarios.",
      },
    ],
  },
];
