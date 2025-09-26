import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const MainPage = () => {
  return (
    <>
      <div className="relative   mx-[295px] mt-6 mb-20">
        <Navbar />
        <Banner/>
      </div>
    </>
  );
};

export default MainPage;
