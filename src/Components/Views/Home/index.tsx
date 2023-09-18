import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import PortfoliTab from "./PortfoliTab";
import Blog from "../../Common/Blog";
import Form from "./Form";
import Footer from "../../Common/Layout/Footer";
import ServiceSlider from "./ServiceSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="">
        <Services />
        <ServiceSlider />
        <PortfoliTab />
      </div>
      <Blog />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
