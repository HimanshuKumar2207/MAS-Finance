import React from "react";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";

export const MyContext = createContext();
const App = () => {
  // const [isOpenEnquiry, setIsOpenEnquiry] = useState(false);
  const [locationNumber, setLocationNumber] = useState(0);
  useEffect(() => {
    setTimeout(() => {}, 6000);
  }, []);
  return (
    <MyContext.Provider
      value={{
        // isOpenEnquiry,
        // setIsOpenEnquiry,
        locationNumber,
        setLocationNumber,
      }}
    >
      <Layout />
    </MyContext.Provider>
  );
};

export default App;
