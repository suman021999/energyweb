
import { RiGlobalLine, RiTwitterXLine } from '@remixicon/react'
import React, { useEffect, useRef, useState } from 'react'
import logo from "../../../public/logo.svg"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const newsData = [
  {
    id: 1,
    image: '/L_news/L_news1.png',
    logo: 'EWX',
    title: 'New Pools Live on the Energy Web X Marketplace!',
    description: 'The Energy Web X Marketplace has launched three new compute pools: SmartFlow, Carbon-Aware, and GP4BTC, each powering real-world energy and sustainability use cases.',
    source: 'energy web',
    hasGlobe: true,
    hasTwitter: true
  },
  {
    id: 2,
    image: '/L_news/L_news2.png',
    logo: null,
    title: 'Listen the Energy Web Space Event on X',
    description: "Ed Hesse, shared insights on the organization's 12-year journey, from early blockchain research and Ethereum involvement to founding Energy Web in 2017.",
    source: 'energy web',
    hasGlobe: false,
    hasTwitter: true
  }
]

const Latest_news = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Responsive carousel
    const handleResize = () => {
      if (carouselRef.current && window.innerWidth < 768) {
        const slideWidth = containerRef.current.offsetWidth
        gsap.set(carouselRef.current, {
          x: -currentSlide * slideWidth
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentSlide])

  // GSAP animation for Learn More button
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.8)',
            scrollTrigger: {
              trigger: buttonRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Hover animations
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.2,
            ease: 'power2.out'
          })
        })

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    if (carouselRef.current && window.innerWidth < 768) {
      const slideWidth = containerRef.current.offsetWidth
      gsap.to(carouselRef.current, {
        x: -index * slideWidth,
        duration: 0.5,
        ease: 'power2.out'
      })
    }
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-white">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16">
        Stay updated with<br />the latest news
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-6 lg:gap-8">
        {/* First Row */}
        <div className="flex flex-row gap-6 lg:gap-8 items-stretch">
          <div className="w-1/2 rounded-3xl overflow-hidden">
            <img 
              src={newsData[0].image} 
              alt={newsData[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {newsData[0].logo}
                </div>
                <div className="flex gap-3">
                  {newsData[0].hasTwitter && (
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <RiTwitterXLine size={20} className="text-white" />
                    </div>
                  )}
                  {newsData[0].hasGlobe && (
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <RiGlobalLine size={20} className="text-white" />
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                {newsData[0].title}
              </h3>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {newsData[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-row-reverse gap-6 lg:gap-8 items-stretch">
          <div className="w-1/2 rounded-3xl overflow-hidden">
            <img 
              src={newsData[1].image} 
              alt={newsData[1].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  
                  <img src={logo} alt="" />
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <RiTwitterXLine size={20} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                {newsData[1].title}
              </h3>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {newsData[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative overflow-hidden" ref={containerRef}>
        <div ref={carouselRef} className="flex transition-transform">
          {newsData.map((news, index) => (
            <div key={news.id} className="flex-shrink-0 w-full">
              <div className="flex flex-col gap-4 px-2">
                <div className="rounded-3xl overflow-hidden aspect-video">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-50 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    {news.logo ? (
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        {news.logo}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <RiGlobalLine size={16} className="text-white" />
                        </div>
                        <span className="text-sm font-medium">{news.source}</span>
                      </div>
                    )}
                    <div className="flex gap-2">
                      {news.hasTwitter && (
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                          <RiTwitterXLine size={16} className="text-white" />
                        </div>
                      )}
                      {news.hasGlobe && news.logo && (
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                          <RiGlobalLine size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {news.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Learn More Button with GSAP */}
      <div className="mt-12 md:mt-16 flex justify-center md:justify-start">
        <button
          ref={buttonRef}
          className="group flex justify-between gap-4 items-center border border-black bg-white text-black font-[font1] p-4 w-80 rounded-full text-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-purple-500 hover:text-white"
        >
          <h4 className="font-[font1] ml-4">Learn more</h4>

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
  )
}

export default Latest_news

