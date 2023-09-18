import React from "react";

const Hero = () => {
  return (
    <header className="py-10">
      <div className=" container">
        <h2 className="text-[#4E4B8B] pb-6 text-[18px] sm:text-[32px] font-bold">
          Servicios{" "}
        </h2>
        {text.map((item, index) => {
          return (
            <div key={index} className="pb-7">
              <h1 className="text-[20px] sm:text-[32px] text-[#3D8095] font-bold  text-center">
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
    heading: "Consultoría y Asesoría ",
    description: "en proyectos de tecnología y ciencia de datos",
    innerData: [
      {
        text: "Es un servicio profesional que brinda orientación, conocimientos y experiencia especializada en el ámbito de la tecnología y la ciencia de datos para ayudar a las organizaciones a implementar proyectos exitosos en estas áreas. La consultoría y asesoría involucra una variedad de actividades y servicios, que pueden incluir:",
      },
      {
        heading: "Evaluación y diagnóstico: ",
        text: "Analizamos las necesidades y objetivos de la organización para comprender los desafíos y oportunidades relacionados con la tecnología y la ciencia de datos. Esto implica evaluar la infraestructura existente, los recursos disponibles y los sistemas actuales.",
      },
      {
        heading: "Diseño de soluciones: ",
        text: "Con base en el análisis realizado, trabajamos en la creación de soluciones personalizadas para abordar los problemas identificados. Esto puede implicar el diseño de arquitecturas de datos, la selección de herramientas y tecnologías adecuadas, y la planificación de la implementación.",
      },
      {
        heading: "Implementación y desarrollo: ",
        text: "Apoyamos en la implementación y desarrollo de proyectos. Esto puede incluir la configuración de sistemas, el desarrollo de software, la integración de datos, la creación de modelos analíticos, entre otros aspectos técnicos.",
      },
      {
        heading: "Gestión del cambio: ",
        text: "Si se necesitara la consultoría podría involucrar la gestión del cambio, es decir, ayudar a la organización a adaptarse a las nuevas soluciones tecnológicas y aprovechar al máximo los beneficios de la ciencia de datos. Esto puede incluir la capacitación del personal, la definición de procesos y políticas, y la gestión de riesgos.",
      },
      {
        heading: "Optimización y mejora continua: ",
        text: "Como parte de nuestros servicios podemos brindar seguimiento y soporte continuo para asegurar que los proyectos de tecnología y ciencia de datos estén funcionando de manera eficiente. Esto implica monitorear los resultados, realizar ajustes según sea necesario y proponer mejoras adicionales para maximizar el valor obtenido.",
      },
      {
        text: "La consultoría y asesoría de proyectos de tecnología y ciencia de datos proporciona experiencia externa y conocimientos especializados para ayudar a las organizaciones a implementar soluciones tecnológicas y aprovechar al máximo la ciencia de datos en sus operaciones y toma de decisiones.",
      },
    ],
  },
];
