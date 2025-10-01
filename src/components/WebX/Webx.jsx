// // Webx.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";

// const Webx = () => {
//   const carouselRef = useRef(null);
//   const [index, setIndex] = useState(0);

//   const cards = [
//     {
//       title: "Support with decentralised compute",
//       img: "https://via.placeholder.com/300x200?text=Compute",
//     },
//     {
//       title: "Stake $EWT and securitize",
//       img: "https://via.placeholder.com/300x200?text=Stake",
//     },
//     {
//       title: "Earn $EWT",
//       img: "https://via.placeholder.com/300x200?text=Earn",
//     },
//   ];

//   // GSAP slide for mobile
//   useEffect(() => {
//     if (window.innerWidth < 768 && carouselRef.current) {
//       const card = carouselRef.current.children[0];
//       const gap = 16; // gap between cards
//       const cardWidth = card.offsetWidth + gap;

//       gsap.to(carouselRef.current, {
//         x: -index * cardWidth,
//         duration: 0.6,
//         ease: "power2.inOut",
//       });
//     }
//   }, [index]);

//   return (
//     <section className="w-full px-4 py-10 overflow-hidden">
//       {/* Header */}
//       <h1 className="text-3xl font-bold mb-4">Energy Web X</h1>
//       <p className="text-gray-600 mb-8 max-w-2xl">
//         Create your own solution or power the network by contributing compute
//         and economic security, earn rewards while enabling the future of energy.
//       </p>

//       {/* MOBILE CAROUSEL */}
//       <div className="relative overflow-hidden mb-6 md:hidden">
//         <div ref={carouselRef} className="flex gap-4">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className="min-w-full flex-shrink-0 bg-gradient-to-br from-purple-700 to-black text-white p-6 rounded-2xl shadow-lg"
//             >
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="rounded-xl mb-4 w-full h-40 object-cover"
//               />
//               <h2 className="text-lg font-semibold">{card.title}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots navigation (mobile only) */}
//       <div className="flex justify-center gap-2 mb-12 md:hidden">
//         {cards.map((_, dotIdx) => (
//           <button
//             key={dotIdx}
//             onClick={() => setIndex(dotIdx)}
//             className={`w-3 h-3 rounded-full ${
//               index === dotIdx ? "bg-purple-600" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>

//       {/* DESKTOP GRID */}
//       <div className="hidden md:grid md:grid-cols-3 md:gap-6 mb-12">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className="bg-gradient-to-br from-purple-700 to-black text-white p-6 rounded-2xl shadow-lg"
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               className="rounded-xl mb-4 w-full h-40 object-cover"
//             />
//             <h2 className="text-lg font-semibold">{card.title}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Bottom App Store Section */}
//       <div className="bg-gradient-to-br from-purple-700 to-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-4">Energy Web X - App store</h2>
//           <p className="text-gray-200 mb-6">
//             All in one dashboard to interact with the energy web ecosystem.
//             Connect, stake, and power decentralized applications.
//           </p>
//           <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
//             Learn more →
//           </button>
//         </div>
//         <div className="flex-1">
//           <img
//             src="https://via.placeholder.com/500x300?text=Laptop+App+Store"
//             alt="App store laptop"
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Webx;












// Webx.jsx
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Webx = () => {
  const carouselRef = useRef(null);
  const buttonRef = useRef(null);
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: "Support with decentralised compute",
      img: "https://via.placeholder.com/300x200?text=Compute",
    },
    {
      title: "Stake $EWT and securitize",
      img: "https://via.placeholder.com/300x200?text=Stake",
    },
    {
      title: "Earn $EWT",
      img: "https://via.placeholder.com/300x200?text=Earn",
    },
  ];

  // GSAP slide for mobile carousel
  useEffect(() => {
    if (window.innerWidth < 768 && carouselRef.current) {
      const card = carouselRef.current.children[0];
      const gap = 16; // gap between cards
      const cardWidth = card.offsetWidth + gap;

      gsap.to(carouselRef.current, {
        x: -index * cardWidth,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [index]);

  // GSAP animation for CTA button
  useEffect(() => {
    if (!buttonRef.current) return;

    const btn = buttonRef.current;

    // Entrance animation
    gsap.fromTo(
      btn,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.8)" }
    );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full px-4 py-10 overflow-hidden">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">Energy Web X</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Create your own solution or power the network by contributing compute
        and economic security, earn rewards while enabling the future of energy.
      </p>

      {/* MOBILE CAROUSEL */}
      <div className="relative overflow-hidden mb-6 md:hidden">
        <div ref={carouselRef} className="flex gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-full flex-shrink-0 bg-gradient-to-br from-purple-700 to-black text-white p-6 rounded-2xl shadow-lg"
            >
              <img
                src={card.img}
                alt={card.title}
                className="rounded-xl mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation (mobile only) */}
      <div className="flex justify-center gap-2 mb-12 md:hidden">
        {cards.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setIndex(dotIdx)}
            className={`w-3 h-3 rounded-full ${
              index === dotIdx ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6 mb-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-purple-700 to-black text-white p-6 rounded-2xl shadow-lg"
          >
            <img
              src={card.img}
              alt={card.title}
              className="rounded-xl mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>

      {/* Bottom App Store Section with CTA Button */}
      <div className="bg-gradient-to-br from-purple-700 to-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Energy Web X - App store</h2>
          <p className="text-gray-200 mb-6">
            All in one dashboard to interact with the energy web ecosystem.
            Connect, stake, and power decentralized applications.
          </p>

          {/* CTA Button */}
          <div className="flex justify-between">
            <button
              ref={buttonRef}
              className="group flex justify-between gap-4 items-center border border-black bg-white text-black font-[font1] p-4 w-80 rounded-full text-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-purple-500 hover:text-white"
            >
              <h4 className="font-[font1] ml-4">Join the Ecosystem</h4>

              {/* Arrow Circle */}
              <div className="h-14 w-14 flex items-center justify-center bg-black rounded-full transition-all duration-300 group-hover:bg-white">
                <img
                  src="../../../public/Line_arrow.svg"
                  alt="arrow"
                  className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert-0"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x300?text=Laptop+App+Store"
            alt="App store laptop"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Webx;
