import React from "react";
import Navbar from "../Components/Global/Navbar";
import img from "../assets/Services_Banner.jpg";

const Services = () => {
  return (
    <>
      <Navbar />
      <HBanner
        heading="Innovative Solutions for Success"
        desc=" Delivering innovative financial services that help you navigate today’s complex financial landscape, providing security, efficiency, and tailored solutions to empower your financial growth and long-term success with confidence and ease."
        img={img}
      />
    </>
  );
};

export default Services;
