import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Front from "../components/Banner/Front";
import LowCards from "../components/Lowcards/LowCards";
import EnergyWeb from "../components/EnergyWeb/EnergyWeb";

const MainPage = () => {
  return (
    <>
      <div className="relative mx-4 sm:mx-10 md:mx-20 lg:mx-[295px] mt-6 mb-20">
        <Navbar />
        <Front/>
        <LowCards/>
        <EnergyWeb/>
      </div>
    </>
  );
};

export default MainPage;
