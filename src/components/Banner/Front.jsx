import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import banner1 from "/banner/banner1.png";
import banner2 from "/banner/banner2.png";
import banner3 from "/banner/banner3.png";

gsap.registerPlugin(ScrollTrigger);

const Front = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const imgs = gsap.utils.toArray(".anim-img");
      gsap.fromTo(
        imgs,
        {
          width: (i) => imgs[i].dataset.initwidth,
        },
        {
          width: (i) => imgs[i].dataset.finalwidth,
          ease: "none",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=2500",
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      {/* Desktop + Tablet Section */}
      <section
        ref={containerRef}
        className="hidden md:flex w-full flex-col justify-center space-y-12 md:space-y-16 lg:space-y-20 py-16 md:py-20 lg:py-24"
      >
        {/* Build */}
        <div className="relative flex items-center justify-start w-full px-4 sm:px-6 md:px-10 overflow-hidden">
          <h1
            className="absolute left-4 sm:left-6 md:left-10 
      text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] 
      font-[font1] z-0 leading-tight"
          >
            Build
          </h1>
          <img
            src={banner1}
            alt="Build"
            data-initwidth="450px"
            data-finalwidth="100%"
            className="anim-img relative z-10 w-[65%] sm:w-[70%] lg:w-auto 
      h-[120px] sm:h-[140px] md:h-[160px] object-cover rounded-2xl ml-auto"
          />
        </div>

        {/* Connect */}
        <div className="relative flex items-center justify-start w-full px-4 sm:px-6 md:px-10 overflow-hidden">
          <h1
            className="absolute left-4 sm:left-6 md:left-10 
      text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] 
      font-[font1] z-0 leading-tight"
          >
            Connect
          </h1>
          <img
            src={banner2}
            alt="Connect"
            data-initwidth="250px"
            data-finalwidth="100%"
            className="anim-img relative z-10 w-[65%] sm:w-[70%] lg:w-auto 
      h-[140px] sm:h-[160px] md:h-[180px] object-cover rounded-2xl ml-auto"
          />
        </div>

        {/* Transform */}
        <div className="relative flex items-center justify-start w-full px-4 sm:px-6 md:px-10 overflow-hidden">
          <h1
            className="absolute left-4 sm:left-6 md:left-10 
      text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] 
      font-[font1] z-0 leading-tight"
          >
            Transform
          </h1>
          <img
            src={banner3}
            alt="Transform"
            data-initwidth="180px"
            data-finalwidth="100%"
            className="anim-img relative z-10 w-[65%] sm:w-[70%] lg:w-auto 
      h-[100px] sm:h-[110px] md:h-[120px] object-cover rounded-2xl ml-auto"
          />
        </div>
      </section>

      {/* Mobile Section */}
      <section className="flex lg:hidden flex-col justify-center space-y-10 sm:space-y-12 py-12 sm:py-16 px-4 sm:px-6">
        {/* Build */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3rem] font-[font1] mb-3 sm:mb-4">
            Build
          </h1>
          <img
            src={banner1}
            alt="Build"
            className="w-full h-[140px] sm:h-[160px] object-cover rounded-2xl"
          />
        </div>

        {/* Transform */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3rem] font-[font1] mb-3 sm:mb-4">
            Transform
          </h1>
          <img
            src={banner3}
            alt="Transform"
            className="w-full h-[100px] sm:h-[120px] object-cover rounded-2xl"
          />
        </div>

        {/* Connect */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3rem] font-[font1] mb-3 sm:mb-4">
            Connect
          </h1>
          <img
            src={banner2}
            alt="Connect"
            className="w-full h-[160px] sm:h-[180px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Mobile Section */}
      <section className="flex lg:hidden flex-col justify-center space-y-8 py-24 px-4">
        {/* Build */}
        <div className="flex flex-col items-start">
          <h1 className="text-[3rem] font-[font1] mb-4">Build</h1>
          <img
            src={banner1}
            alt="Build"
            className="w-full h-[160px] object-cover rounded-2xl"
          />
        </div>

        {/* Transform */}
        <div className="flex flex-col items-start">
          <h1 className="text-[3rem] font-[font1] mb-4">Transform</h1>
          <img
            src={banner3}
            alt="Transform"
            className="w-full h-[120px] object-cover rounded-2xl"
          />
        </div>

        {/* Connect */}
        <div className="flex flex-col items-start">
          <h1 className="text-[3rem] font-[font1] mb-4">Connect</h1>
          <img
            src={banner2}
            alt="Connect"
            className="w-full h-[180px] object-cover rounded-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default Front;
