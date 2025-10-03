import React from 'react'
import AVENTUS from '/Meetenergy/AVENTUS.png'
import Deloitte from '/Meetenergy/Deloitte.png'
import Edf from '/Meetenergy/Edf.png'
import Elia_group from '/Meetenergy/Elia_group.png'
import engic from '/Meetenergy/engic.png'
import Shell from '/Meetenergy/Shell.png'
import CUBE from '/Meetenergy/cube.svg'
import halfCircel from '/Meetenergy/half_circel.svg'
import ELECITY from '/Meetenergy/elecity.svg'

const EnergyWeb = () => {
  const logos = [Deloitte, Shell, AVENTUS, Elia_group, Edf, engic]

  const cards = [
    {
      icon: halfCircel,
      title: 'Powered by open source',
      desc: 'Leverage the investment and experience of hundreds of other energy companies',
    },
    {
      icon: CUBE,
      title: 'Secure by design',
      desc: 'Decentralized architectures boost cybersecurity and enhance customer privacy',
    },
    {
      icon: ELECITY,
      title: 'Built by and for the sector',
      desc: "Become part of the world's biggest ecosystem at the forefront of sector digitization",
    },
  ]

  return (
    <section className="px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Meet Energy Web</h2>
        <p className="text-gray-600 mt-2">
          A global ecosystem accelerating the energy transition with open-source technology and collaboration.
        </p>
      </div>

      {/* Logos marquee */}
      <div className="overflow-hidden relative w-full mb-10">
        <div className="flex animate-marquee gap-10">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt="company logo" className="h-10 object-contain" />
          ))}
        </div>
      </div>

      {/* Desktop: grid / Mobile: carousel */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="p-6 rounded-2xl shadow bg-white">
            <img src={card.icon} alt="icon" className="h-8 mb-3" />
            <h3 className="font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85%] snap-center p-6 rounded-2xl shadow bg-white"
          >
            <img src={card.icon} alt="icon" className="h-8 mb-3" />
            <h3 className="font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EnergyWeb


