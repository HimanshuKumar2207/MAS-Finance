import React from "react";
import Navbar from "../Components/Global/Navbar";
import HBanner from "../Components/Global/HBanner";
import HAbout from "../Components/Home/HAbout";
import WeOffer from "../Components/Home/WeOffer";
import WhyUs from "../Components/Home/WhyUs";
import Form from "../Components/Contact/Form";
import Footer from "../Components/Global/Footer";
import FixedBottom from "../Components/Global/FixedBottom";
import FAQ from "../Components/Home/FAQ";
import img from "../assets/HBanner.jpg";
import MoreServices from "../Components/Services/MoreServices";
import Kotak from "../Components/Home/Kotak";
import ServiceBtn from "../Components/Services/ServiceBtn";
const Home = () => {
  return (
    <>
      <Navbar />
      <HBanner
        heading=" Investing in the Future"
        desc=" MAS Financial offers personalized financial planning, investment
            strategies, and expert guidance to help you secure a brighter
            future. We assist with loans, insurance, and mutual fund
            investments."
        img={img}
      />
      <HAbout />
      <WeOffer />
      <WhyUs />
      <MoreServices />
      <Kotak />
      <ServiceBtn />
      {/* <Form /> */}
      <FAQ />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default Home;
