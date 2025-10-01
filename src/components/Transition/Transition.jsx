// // Transition.jsx
// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import arrow from "../../../public/arrow.svg"
// const data = [
//   {
//     title: "Electricity",
//     desc: "Enabling secure data exchange and asset identity management to enhance liquidity, reliability, and security in electricity networks.",
//     img: "../../../public/Transition/Transition1.png",
//   },
//   {
//     title: "Aviation",
//     desc: "Driving the future of sustainable aviation with transparent, scalable solutions for verifying, tracing, and trading sustainable aviation fuel",
//     img: "../../../public/Transition/Transition2.png",
//   },
//   {
//     title: "Maritime",
//     desc: "Verifying, tracking, and accelerating decarbonization of the maritime sector with best-in-class digital registries",
//     img: "../../../public/Transition/Transition3.png",
//   },
//   {
//     title: "Clean Mining",
//     desc: "Green Proofs For Bitcoin helps Bitcoin miners measure and manage their energy footprint to help accelerate decarbonization.",
//     img: "../../../public/Transition/Transition4.png",
//   },
// ];

// const Transition = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

// useEffect(() => {
//   const slides = containerRef.current.querySelectorAll(".slide");
//   gsap.set(slides, { xPercent: (i) => i * 110 }); // 10% gap
// }, []);

// const goToSlide = (index) => {
//   const slides = containerRef.current.querySelectorAll(".slide");
//   setActiveIndex(index);

//   gsap.to(slides, {
//     xPercent: (i) => 110 * (i - index), // same gap here
//     duration: 0.8,
//     ease: "power2.inOut",
//   });
// };


//   return (
//     <div className="w-full py-10">
//       <h2 className="text-6xl font-[font1] w-[40vw] ml-6 mb-8">
//         Powering the Energy Transition
//       </h2>

//       {/* Desktop Grid */}
//       <div className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-6 px-6">
//         {data.map((item, i) => (
//           <div
//             key={i}
//             className="relative rounded-2xl overflow-hidden shadow-lg"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-96 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent p-4 flex flex-col justify-end">
//               <h3 className="text-xl font-[font1]">{item.title}</h3>
//               <p className="text-sm font-[font1]">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Carousel */}
//       <div className="md:hidden relative overflow-hidden px-4">
//         <div ref={containerRef} className="flex w-full relative h-80  ">
//           {data.map((item, i) => (
//             <div
//               key={i}
//               className="slide  absolute full top-0 left-0  h-full rounded-2xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent p-4 flex  flex-col  justify-center">
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//                 <p className="text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dot Navigation */}
//         <div className="flex justify-center gap-3 mt-4">
//           {data.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goToSlide(i)}
//               className={`w-3 h-3 rounded-full ${
//                 activeIndex === i ? "bg-purple-500" : "bg-black"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transition;




// Transition.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import arrow from "../../../public/arrow.svg"; // arrow import

const data = [
  {
    title: "Electricity",
    desc: "Enabling secure data exchange and asset identity management to enhance liquidity, reliability, and security in electricity networks.",
    img: "../../../public/Transition/Transition1.png",
  },
  {
    title: "Aviation",
    desc: "Driving the future of sustainable aviation with transparent, scalable solutions for verifying, tracing, and trading sustainable aviation fuel",
    img: "../../../public/Transition/Transition2.png",
  },
  {
    title: "Maritime",
    desc: "Verifying, tracking, and accelerating decarbonization of the maritime sector with best-in-class digital registries",
    img: "../../../public/Transition/Transition3.png",
  },
  {
    title: "Clean Mining",
    desc: "Green Proofs For Bitcoin helps Bitcoin miners measure and manage their energy footprint to help accelerate decarbonization.",
    img: "../../../public/Transition/Transition4.png",
  },
];

const Transition = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slides = containerRef.current.querySelectorAll(".slide");
    gsap.set(slides, { xPercent: (i) => i * 110 }); // 10% gap
  }, []);

  const goToSlide = (index) => {
    const slides = containerRef.current.querySelectorAll(".slide");
    setActiveIndex(index);

    gsap.to(slides, {
      xPercent: (i) => 110 * (i - index),
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="w-full py-10">
      <h2 className="text-6xl font-[font1] w-[40vw] ml-6 mb-8">
        Powering the Energy Transition
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-6 px-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-96 object-cover"
            />

            {/* ✅ Carve overlay in top-right */}
            <div
              className="absolute top-0 right-0 z-20
                         bg-gradient-to-b from-white to-white
                         w-[60px] h-[60px]
                         rounded-bl-2xl "
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent p-4 flex flex-col justify-center">
              <h3 className="text-[3rem] font-semibold px-4 font-[font1]">{item.title}</h3>
              <p className="text-lg font-[font1] px-4 w-1/2">{item.desc}</p>
            </div>

            {/* ✅ Arrow box sits in carve */}
            <div
              className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center 
                         bg-black/70 group-hover:bg-purple-500 transition-colors duration-300 
                         z-30 rounded-bl-2xl"
            >
              <img src={arrow} alt="arrow" className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative overflow-hidden px-4">
        <div ref={containerRef} className="flex w-full relative h-80">
          {data.map((item, i) => (
            <div
              key={i}
              className="slide absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* ✅ Carve overlay for mobile */}
              <div
                className="absolute top-0 right-0 z-20
                           bg-gradient-to-b from-white to-white
                           w-[50px] h-[50px]
                           rounded-bl-xl"
              ></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent p-4 flex flex-col justify-center">
               <h3 className="text-[3rem] font-semibold px-4 font-[font1]">{item.title}</h3>
              <p className="text-lg font-[font1] px-4 w-1/2">{item.desc}</p>
              </div>

              {/* ✅ Arrow box in carve */}
              <div
                className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center 
                           bg-black/70 group-hover:bg-purple-500 transition-colors duration-300 
                           z-30 rounded-bl-xl"
              >
                <img src={arrow} alt="arrow" className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mt-4">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === i ? "bg-purple-500" : "bg-black"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transition;
