import React from "react";
import Layout from "../Components/Common/Layout";
import Blog from "../Components/Common/Blog";
import ServiceSlider from "../Components/Views/Home/ServiceSlider";

const blog = () => {
  return (
    <main>
      <Layout>
        <Blog />
        <ServiceSlider />
      </Layout>
    </main>
  );
};

export default blog;
