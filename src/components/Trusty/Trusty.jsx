import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Trusty = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const buttonRef = useRef(null);

  // Mapping of company names to image paths (replace with your actual images)
  const companyImages = {
    'Deloitte': '../../../public/Meetenergy/Deloitte.png',
    'STEDIN': '/images/companies/stedin.png',
    'CarbonEnfo': '/images/companies/carbonenfo.png',
    'eDF': '/images/companies/edf.png',
    'falecira': '/images/companies/falecira.png',
    'Aventus': '/images/companies/aventus.png',
    'ella group': '/images/companies/ella-group.png',
    'ENGIGE': '/images/companies/engige.png',
    'Deutsche ERDWÄRME': '/images/companies/deutsche-erdwarme.png',
    'FOTON': '/images/companies/foton.png',
    'MERELECI': '/images/companies/megeleci.png',
    'AUSTIN': '/images/companies/austin.png',
    'GODSCHAFT': '/images/companies/godschaft.png',
    'acciona': '/images/companies/acciona.png',
    'inavitas': '/images/companies/inavitas.png',
    'equinor': '/images/companies/equinor.png',
    'OSQ': '/images/companies/osq.png',
    'verv': '/images/companies/verv.png',
    'Brookfield': '/images/companies/brookfield.png',
    'Renewable Partner': '/images/companies/renewable-partner.png',
    'SCYTALE': '/images/companies/scytale.png',
  };

  const companies = Object.keys(companyImages);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out"
        }
      );

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out"
        }
      );

      // Grid items staggered animation
      const gridItems = gsap.utils.toArray('.company-item');
      gsap.fromTo(gridItems,
        {
          y: 60,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: {
            amount: 0.6,
            grid: "auto",
            from: "center"
          },
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Button animation
      gsap.fromTo(buttonRef.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for grid items
      gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -8,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Button hover animation
      const button = buttonRef.current;
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-16 "
    >
      <div className="max-w-6xl mx-auto  w-full">
        {/* Title */}
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          Energy Web Ecosystem
        </h1>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl  leading-relaxed"
        >
          Join the world's biggest ecosystem focused on open source software development for the energy transition.
        </p>

        {/* Companies Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 mb-16"
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="company-item flex items-center justify-center h-24 md:h-28 p-4 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={companyImages[company]} 
                  alt={company}
                  className="max-w-full max-h-12 md:max-h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div className="hidden text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight px-2">
                  {company}
                </div>
              </div>
            </div>
          ))}
        </div>

     
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
    </section>
  );
};

export default Trusty;