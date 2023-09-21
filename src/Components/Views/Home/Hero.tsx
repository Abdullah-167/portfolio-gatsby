import React from "react";
import Navbar from "../../Common/Layout/Navbar";

const Hero = () => {
  return (
    <header className="hero_bg lg:min-h-[768px]">
      <div className="pb-3 md:pb-32">
        <Navbar />
      </div>
      <div className="pb-20">
        <h1 className="text-[18px] md:text-[48px] font-semibold text-white text-center hero-text">
          EXPERIENCIA Y CONOCIMIENTO
        </h1>
        <h2 className="text-white text-[18px] md:text-[48px]  text-center hero-text">
          en tecnología y ciencia de datos
        </h2>
      </div>
    </header>
  );
};

export default Hero;
