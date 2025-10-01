// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Numbers = () => {

//   const containerRef = useRef(null);
//   const statsRef = useRef([]);



//   return (
//     <>
//     <div className=" bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto" ref={containerRef}>
//         <div className="mb-12 sm:mb-16">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             Energy Web in Numbers
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600">
//             Explore our ecosystem through the numbers.
//           </p>
//         </div>

//         <div className="space-y-6 w-full">
//           {/* Stat 1 */}
//           <div
//             ref={addToRefs}
//             className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//           >
//             <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
//               1000+
//             </div>
//             <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
//               Ecosystem Participants
//             </div>
//           </div>

//           {/* Stat 2 */}
//           <div
//             ref={addToRefs}
//             className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//           >
//             <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
//               +500%
//             </div>
//             <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
//               Growth in Compute power
//             </div>
//           </div>

//           {/* Stat 3 */}
//           <div
//             ref={addToRefs}
//             className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//           >
//             <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
//               2M
//             </div>
//             <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
//               Assets ready to connect
//             </div>
//           </div>

//           {/* Stat 4 */}
//           <div
//             ref={addToRefs}
//             className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//           >
//             <div className="flex items-baseline gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="stat-number  text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
//                   10M
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
//                     +
//                   </div>
//                   <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
//                     $EWT
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
//               EWT locked in securing the network
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Numbers;





import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Numbers = () => {
  const containerRef = useRef(null);
  const statsRef = useRef([]);

  // Helper function to add elements to refs array
  const addToRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  useEffect(() => {
    const stats = statsRef.current;

    stats.forEach((stat, index) => {
      // Fade and slide in animation for the box
      gsap.fromTo(
        stat,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            end: 'top 65%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.15, // Stagger delay
        }
      );

      // Count-up animation for numbers
      const numberEl = stat.querySelector('.stat-number');
      if (numberEl) {
        const text = numberEl.textContent;
        
        // Extract number and suffix/prefix
        let number = 0;
        let suffix = '';
        let prefix = '';
        
        if (text.includes('+') && text.includes('%')) {
          // +500%
          number = parseInt(text.replace(/[^0-9]/g, ''));
          prefix = '+';
          suffix = '%';
        } else if (text.includes('M')) {
          // 2M or 10M
          number = parseInt(text.replace(/[^0-9]/g, ''));
          suffix = 'M';
        } else if (text.includes('+')) {
          // 1000+
          number = parseInt(text.replace(/[^0-9]/g, ''));
          suffix = '+';
        } else {
          number = parseInt(text.replace(/[^0-9]/g, ''));
        }

        // Set initial value to 0
        const counterObj = { value: 0 };
        
        gsap.to(counterObj, {
          value: number,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            const currentValue = Math.floor(counterObj.value);
            numberEl.textContent = prefix + currentValue + suffix;
          },
          delay: index * 0.15 + 0.3, // Slight delay after box animation
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" ref={containerRef}>
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Energy Web in Numbers
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Explore our ecosystem through the numbers.
            </p>
          </div>

          <div className="space-y-6 w-full">
            {/* Stat 1 */}
            <div
              ref={addToRefs}
              className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
                1000+
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                Ecosystem Participants
              </div>
            </div>

            {/* Stat 2 */}
            <div
              ref={addToRefs}
              className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
                +500%
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                Growth in Compute power
              </div>
            </div>

            {/* Stat 3 */}
            <div
              ref={addToRefs}
              className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
                2M
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                Assets ready to connect
              </div>
            </div>

            {/* Stat 4 */}
            <div
              ref={addToRefs}
              className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-baseline gap-2">
                <div className="flex items-center gap-2">
                  <div className="stat-number text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-600">
                    10M
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
                      +
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
                      $EWT
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                EWT locked in securing the network
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;