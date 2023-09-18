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
              <h1 className="text-[32px] text-[#3D8095] font-bold  text-center pb-7">
                {item.heading}
              </h1>
              {item.innerData.map((newItem, idx) => {
                return (
                  <div className="max-w-[618px] mx-auto pb-3" key={idx}>
                    <p className="pb-1 text-base font-bold text-[#3D8095]">
                      {newItem.heading}
                    </p>
                    <p className="pb-2 text-base font-normal text-[#646467]">
                      {newItem.text}
                    </p>
                    <ul>
                      {newItem.list?.map((listItem, idex2) => {
                        return (
                          <li
                            className=" list-disc ml-3 pb-1 text-base font-normal text-[#646467]"
                            key={idex2}
                          >
                            {listItem}
                          </li>
                        );
                      })}
                    </ul>
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
    heading: "Automatización de Procesos",
    innerData: [
      {
        text: "Desarrollamos proyectos para que la tecnología pueda reemplazar las actividades manuales y repetitivas por procesos automatizados que se ejecutan de forma eficiente, precisa y consistente.",
      },
      {
        text: "La automatización de procesos puede aplicarse a una amplia variedad de actividades en distintos sectores y áreas funcionales de una organización. Algunos ejemplos comunes de procesos que pueden ser automatizados son:",
      },
      {
        heading: "Procesamiento de datos:  ",
        text: "Automatizar la recopilación, extracción, transformación y carga (ETL) de datos desde diferentes fuentes hacia sistemas o bases de datos.",
      },
      {
        heading: "Flujo de trabajo: ",
        text: "Automatizar el enrutamiento y seguimiento de tareas, la asignación de responsabilidades, la aprobación de documentos y la notificación de eventos dentro de un proceso de trabajo.",
      },
      {
        heading: "Atención al cliente: ",
        text: "Automatizar respuestas automáticas, chatbots o sistemas de respuesta interactiva de voz (IVR) para brindar respuestas rápidas y precisas a las consultas de los clientes.",
      },
      {
        heading: "Gestión de inventario:  ",
        text: "Automatizar el seguimiento de existencias, la reposición de productos y la generación de órdenes de compra en función de los niveles de inventario.",
      },
      {
        text: "La automatización de procesos se logra mediante el uso de herramientas y tecnologías como software de automatización robótica de procesos (RPA), sistemas de gestión de flujos de trabajo (BPM), integración de aplicaciones y herramientas de inteligencia artificial.",
      },
      {
        text: "Los beneficios de la automatización de procesos incluyen:",
      },
      {
        list: [
          "Mayor eficiencia y productividad al eliminar tareas manuales y repetitivas.",
          "Reducción de errores y mejora de la precisión en la ejecución de tareas.",
          "Ahorro de tiempo y recursos al agilizar procesos.",
          "Mejora en la calidad y consistencia de las actividades realizadas.",
          "Capacidad para gestionar volúmenes de trabajo más grandes sin aumentar la mano de obra.",
          "Liberación de los empleados para que se enfoquen en tareas más estratégicas y de mayor valor.",
        ],
      },
      {
        text: "Sin embargo, es importante destacar que no todos los procesos son adecuados para la automatización. Se requiere un análisis detallado para identificar los procesos que son susceptibles de ser automatizados y que generarán beneficios significativos en términos de eficiencia y efectividad.",
      },
    ],
  },
];
