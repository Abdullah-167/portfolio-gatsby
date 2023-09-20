import { Link } from "gatsby";
import React from "react";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";

const Services = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={`${
        isHomePage ? "sm:block hidden" : ""
      }  overflow-hidden z-[1000] ${
        isHomePage ? "bg-[#6AA6B8] pb-96 -mt-7" : "py-20 min-h-screen"
      }`}
    >
      <div className="container">
        <h2
          className={`text-[32px] font-bold pb-6 text-[#4E4B8B] ${
            isHomePage ? " mt-20" : ""
          }`}
        >
          Servicios
        </h2>
        <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:gap-12 lg:gap-16">
          {data.map((item, index) => {
            return (
              <div
                className={`${
                  isHomePage
                    ? "bg-[#C5EEFB] border border-[#C5EEFB] hover:border-[0px]"
                    : "bg-transparent sm:border sm:border-[#C5EEFB] border-[0px]"
                } overflow-hidden cursor-pointer rounded relative group max-w-[340px]`}
                key={index}
              >
                <Link to={item.link}>
<<<<<<< HEAD
                  <div className="relative">
=======
                  <div className="relative max-w-[320px]">
>>>>>>> 1eea424 (commit done)
                    <div className="transform-gpu p-4 items-center flex min-h-[400px] space-y-3 text-xl opacity-0 sm:opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 translate-y-0 pb-10 transition duration-300 ease-in-out">
                      <div>
                        <div className="font-bold text-center mb-4">
                          {item?.heading}
                        </div>

                        <div className="opacity-60 text-sm text-center">
                          {item?.para}
                        </div>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className="absolute top-0 inset-y-0 ">
=======
                    <div className="absolute top-0 left-0 inset-y-0 ">
>>>>>>> 1eea424 (commit done)
                      <div className="rounded-xl z-50 opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute sm:from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-4 sm:-bottom-2 pt-30 text-white flex items-end">
                        <div>
                          <div
                            className={`${
                              isHomePage ? "px-4 py-4" : "px-6"
                            } transform-gpu  space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 sm:translate-y-4 pb-10 transition duration-300 ease-in-out`}
                          >
                            <div className="font-bold">{item.imgText}</div>
                          </div>
                        </div>
                      </div>
                      {item.img}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
const data = [
  {
    heading:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
    para: `Brinda orientación, conocimientos y experiencia especializada en el ámbito de la tecnología y la ciencia de datos para ayudar a las organizaciones a implementar proyectos exitosos en estas áreas.`,
    link: "/consultoría-y-asesoría",
    img: (
      <StaticImage
<<<<<<< HEAD
        className="object-cover h-full  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
=======
        className="object-cover h-full min-w-[344px]  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
>>>>>>> 1eea424 (commit done)
        src="../../../images/card-servicios.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },
  {
    heading: "Desarrollo de software",
    para: `Creamos, adaptamos e implementamos software personalizado o de terceros según las necesidades y requisitos de la organización.`,
    link: "/desarrollo-de-software",
    img: (
      <StaticImage
<<<<<<< HEAD
        className="object-cover h-full  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
=======
        className="object-cover h-full min-w-[344px]  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
>>>>>>> 1eea424 (commit done)
        src="../../../images/card-servicios-2.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },

  {
    heading: "Automatización de Procesos",
    para: `Desarrollamos proyectos para que la tecnología pueda reemplazar las actividades manuales y repetitivas por procesos automatizados que se ejecutan de forma eficiente, precisa y consistente.`,
    link: "/automatización-de-procesos",
    img: (
      <StaticImage
<<<<<<< HEAD
        className="object-cover h-full  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
=======
        className="object-cover h-full min-w-[344px]  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
>>>>>>> 1eea424 (commit done)
        src="../../../images/card-servicios-3.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },
  {
    heading: "Cloud Computing(GCP, AWS, Azure)",
    para: `La computación en la nube permite acceder a recursos informáticos y servicios a través de internet, eliminando la necesidad de infraestructura local y proporcionando flexibilidad, escalabilidad y accesibilidad a los usuarios.`,
    link: "/cloud-computing",
    img: (
      <StaticImage
<<<<<<< HEAD
        className="object-cover h-full  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
=======
        className="object-cover h-full min-w-[344px]  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
>>>>>>> 1eea424 (commit done)
        src="../../../images/card-servicios-4.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },
  {
    heading: `Ciencia de Datos (Data Science)`,
    para: `Nuestro objetivo es proporcionar soluciones y conocimientos basados en datos para impulsar la toma de decisiones efectiva y obtener ventajas competitivas en el mercado.`,
    link: "/ciencia-de-datos",
    img: (
      <StaticImage
<<<<<<< HEAD
        className="object-cover h-full  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
=======
        className="object-cover h-full min-w-[344px]  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
>>>>>>> 1eea424 (commit done)
        src="../../../images/card-servicios-5.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },
  {
    heading: "Servicios Gestionados (Managed Services)",
    para: `Se refieren a la externalización de la gestión y operación de ciertos aspectos de las tecnologías de la información (TI) de una organización a un proveedor de servicios especializado.`,
    link: "/servicios-gestionados",
    img: (
      <StaticImage
<<<<<<< HEAD
        className="object-cover h-full  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
=======
        className="object-cover h-full min-w-[344px]  w-full opacity-100 sm:opacity-0 group-hover:opacity-100 sm:group-hover:scale-110 transition duration-300 ease-in-out"
>>>>>>> 1eea424 (commit done)
        src="../../../images/card-servicios-6.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },
];
