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
    heading: "Ciencia de Datos ",
    description: "(Data Science)",
    innerData: [
      {
        text: "Somos una organización que nos especializamos en brindar servicios y soluciones relacionadas con la ciencia de datos. Contamos con profesionales altamente capacitados en áreas como estadística, matemáticas, análisis de datos, aprendizaje automático (machine learning) y visualización de datos para ayudar a las organizaciones a aprovechar al máximo sus datos y tomar decisiones informadas basadas en evidencia.",
      },
      {
        text: "Algunos de los servicios que ofrecemos incluyen:",
      },
      {
        heading: "Análisis de datos: ",
        text: "Ayudamos a las organizaciones a comprender y extraer información valiosa de sus datos mediante el uso de técnicas estadísticas y herramientas analíticas avanzadas. Esto puede incluir análisis descriptivos, análisis predictivos, segmentación de clientes, análisis de patrones y detección de anomalías, entre otros.",
      },
      {
        heading: "Modelado y aprendizaje automático: ",
        text: "Desarrollamos y aplicamos modelos de aprendizaje automático y algoritmos avanzados para resolver problemas específicos de los clientes. Esto puede incluir la construcción de modelos predictivos, modelos de recomendación, clasificación de datos, detección de fraudes y optimización de procesos.",
      },
      {
        heading: "Visualización de datos: ",
        text: "Utilizamos técnicas de visualización y herramientas interactivas para presentar y comunicar de manera efectiva los resultados del análisis de datos. Esto permite a las organizaciones comprender y explorar los datos de manera más intuitiva y tomar decisiones informadas basadas en la visualización de los datos.",
      },
      {
        heading: "Consultoría en ciencia de datos: ",
        text: "Brindamos asesoramiento estratégico y guían a las organizaciones en la implementación efectiva de iniciativas de ciencia de datos. Esto puede incluir la identificación de oportunidades, la definición de estrategias de datos, la selección de herramientas y tecnologías, y el diseño de arquitecturas de datos.",
      },
      {
        heading: "Capacitación y educación: ",
        text: "Impartimos programas de capacitación y educación en ciencia de datos para ayudar a las organizaciones a desarrollar habilidades internas en este campo. Esto puede incluir cursos, talleres y programas adaptados a las necesidades y niveles de conocimiento de los empleados.",
      },
      {
        text: "Contamos con la experiencia y conocimiento para trabajar con una variedad de clientes, que pueden incluir empresas de diversos sectores, organizaciones gubernamentales, instituciones académicas y organizaciones sin fines de lucro. Nuestro objetivo es proporcionar soluciones y conocimientos basados en datos para impulsar la toma de decisiones efectiva y obtener ventajas competitivas en el mercado.",
      },
    ],
  },
];
