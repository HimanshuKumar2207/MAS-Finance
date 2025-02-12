import React from "react";
import Navbar from "../Components/Global/Navbar";
import WeOffer from "../Components/Home/WeOffer";
import Footer from "../Components/Global/Footer";
import FixedBottom from "../Components/Global/FixedBottom";
import HBanner from "../Components/Global/HBanner";
import ConnectBtn from "../Components/Global/ConnectBtn";
import MoreServices from "../Components/Services/MoreServices";
import ServiceBtn from "../Components/Services/ServiceBtn";
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
      {/* <ServiceBtn />
      <WeOffer />
      <MoreServices />
      <ConnectBtn />
      <Footer /> */}
      {/* <FixedBottom /> */}
    </>
  );
};

export default Services;
