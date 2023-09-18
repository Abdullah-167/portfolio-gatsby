import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function ServiceSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { perView: 1.1, spacing: 12 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="sm:hidden block navigation-wrapper pl-10 z-[100] bg-[#6AA6B8]  pt-20 pb-56 mb-[48px]">
      <div className=" relative">
        <h2 className="text-[32px] font-bold  text-[#0E333F]">Servicios</h2>
        <div ref={sliderRef} className="keen-slider">
          {data.map((item, index) => {
            return (
              <Link className=" " to={item.link} key={index}>
                <div className="keen-slider__slide card-show">
                  <span className="">
                    {item.img}
                    <span className="absolute z-[100] text-white font-semibold inset-x-0 text-base text-center px-7 bottom-[30px]">
                      {item.imgText}
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots absolute top-[470px] left-24">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )} */}
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const data = [
  {
    heading:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
    para: `Brinda orientación, conocimientos y experiencia especializada en el ámbito de la tecnología y la ciencia de datos para ayudar a las organizaciones a implementar proyectos exitosos en estas áreas.`,
    link: "/consultoría-y-asesoría",
    img: (
      <StaticImage
        className=" min-h-[404px] max-h-[404px]"
        width={400}
        height={404}
        src="../../../images/card1.png"
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
        className=" min-h-[404px] max-h-[404px] object-cover"
        width={400}
        height={404}
        src="../../../images/card2.png"
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
        className=" min-h-[404px] max-h-[404px] object-cover"
        width={400}
        height={404}
        src="../../../images/card3.png"
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
        className="min-h-[404px] max-h-[404px] object-cover"
        width={400}
        height={404}
        src="../../../images/card4.png"
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
        className="min-h-[404px] max-h-[404px] object-cover"
        width={400}
        height={404}
        src="../../../images/card5.png"
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
        className="min-h-[404px] max-h-[404px] object-cover"
        width={400}
        height={404}
        src="../../../images/card6.png"
        alt={""}
      />
    ),
    imgText:
      "Consultoría y Asesoría en proyectos de tecnología y ciencia de datos",
  },
];
