import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import banner1 from "../../../public/banner/banner1.png";
import banner2 from "../../../public/banner/banner2.png";
import banner3 from "../../../public/banner/banner3.png";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const containerRef = useRef();

  useGSAP(() => {
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
  }, { scope: containerRef });

  return (
  
    <section ref={containerRef} className="w-full flex flex-col justify-center space-y-4 py-24">
      {/* Build */}
      <div className="relative flex items-center justify-start w-full px-10 overflow-hidden">
        <h1 className="absolute left-10 text-[8rem] font-[font1] z-0">
          Build
        </h1>
        <img
          src={banner1}
          alt="Build"
          data-initwidth="500px"
          data-finalwidth="100%"
          className="anim-img relative z-10 h-[160px] object-cover rounded-2xl ml-auto"
        />
      </div>

      {/* Connect */}
      <div className="relative flex items-center justify-start w-full px-10 overflow-hidden">
        <h1 className="absolute left-10 text-[8rem] font-[font1] z-0">
          Connect
        </h1>
        <img
          src={banner2}
          alt="Connect"
          data-initwidth="300px"
          data-finalwidth="100%"
          className="anim-img relative z-10 h-[180px] object-cover rounded-2xl ml-auto"
        />
      </div>

      {/* Transform */}
      <div className="relative flex items-center justify-start w-full px-10 overflow-hidden">
        <h1 className="absolute left-10 text-[8rem] font-[font1] z-0">
          Transform
        </h1>
        <img
          src={banner3}
          alt="Transform"
          data-initwidth="200px"
          data-finalwidth="100%"
          className="anim-img relative z-10 h-[120px] object-cover rounded-2xl ml-auto"
        />
      </div>
    </section>
  );
};

export default Banner;