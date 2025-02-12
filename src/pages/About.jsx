import React from "react";
import Navbar from "../Components/Global/Navbar";
import HBanner from "../Components/Global/HBanner";
import HAbout from "../Components/Home/HAbout";
import Footer from "../Components/Global/Footer";
import FixedBottom from "../Components/Global/FixedBottom";
import ConnectBtn from "../Components/Global/ConnectBtn";
import Expertise from "../Components/About/Expertise";
import img from "../assets/About_banner.jpg";


const About = () => {
  return (
    <>
      <Navbar />
      <HBanner
        heading="Innovative Solutions for Financial Growth"
        desc="Delivering innovative, secure, and user-friendly financial solutions that empower you to achieve your financial goals with confidence, ease, and efficiency, ensuring long-term success and peace of mind in today's dynamic financial world"
        img={img}
      />
      <HAbout />
      <Expertise />

      <ConnectBtn />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default About;
