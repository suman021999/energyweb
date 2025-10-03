import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Front from "../components/Banner/Front";
import LowCards from "../components/LowCards/LowCards";
import EnergyWeb from "../components/EnergyWeb/EnergyWeb";
import Transition from "../components/Transition/Transition";
import Solution from "../components/Solutation/Solutation";
import Trusty from "../components/Trusty/Trusty";
import Numbers from "../components/Numbers/Numbers";
import Webx from "../components/WebX/Webx";
import Latest_news from "../components/Latest_news/Latest_news";
import Contact from "../components/Contact/Contact";

const MainPage = () => {
  return (
    <>
      <div className="relative  mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-[295px] mt-6 mb-20">
        <Navbar />
        <Front/>
        <LowCards/>
        <EnergyWeb/>
        <Transition/>
        <Solution/>
        <Trusty/>
        <Numbers/>
        <Webx/>
        <Latest_news/>
        <Contact/>
      </div>
    </>
  );
};

export default MainPage;