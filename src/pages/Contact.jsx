import React from "react";
import Navbar from "../Components/Global/Navbar";
import HBanner from "../Components/Global/HBanner";
import Form from "../Components/Contact/Form";
import Footer from "../Components/Global/Footer";
import FixedBottom from "../Components/Global/FixedBottom";
import AddMap from "../Components/Contact/AddMap";
import img from "../assets/Contact_Banner.jpg";
const Contact = () => {
  return (
    <>
      <Navbar />
      <HBanner
        heading="Connect for Financial Solutions"
        desc="Contact us today to discuss your financial needs. Our team is ready to provide secure, innovative solutions tailored to help you achieve your goals with confidence, efficiency, and long-term success."
        img={img}
      />
      <Form />
      <AddMap />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default Contact;
