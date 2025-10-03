import React from 'react';
import { RiLinkedinBoxLine, RiTwitterXLine, RiDiscordLine, RiTelegramLine, RiYoutubeLine, RiMediumLine, RiGithubLine } from '@remixicon/react';
import logo from "/logo.svg"
const Contact = () => {
  return (
    <footer className="bg-white  shadow-blur rounded-3xl p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex gap-8 shrink-1  mb-16">
          {/* Column 1 - Tagline and Contact */}
          <div className="flex w-[400px] flex-wrap">
            <h2 className="text-2xl lg:text-3xl   font-medium text-purple-600 mb-8 leading-snug">
              We build digital solutions that help companies navigate the energy transition
            </h2>
            <div className="mt-8">
              <p className="font-semibold text-black mb-2">More information:</p>
              <a href="mailto:info@energyweb.org" className="text-black underline hover:text-purple-600">
                info@energyweb.org
              </a>
            </div>
          </div>

          {/* Column 2 - Solutions */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-purple-600">Electricity</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Aviation</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Maritime</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Clean Mining</a></li>
            </ul>
          </div>

          {/* Column 3 - Ecosystem */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-purple-600">Our Ecosystem</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Events</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">EW Dive 2025</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Europe Projects</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Academy</a></li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-purple-600">Documentation</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Media Kit</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Roadmap 2025</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Company Brochure</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">EW Circles</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Our Team</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Energy Web Audit</a></li>
              <li><a href="#" className="text-black hover:text-purple-600">Get Involved</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-12">
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiLinkedinBoxLine size={24} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiTwitterXLine size={24} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiDiscordLine size={24} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiTelegramLine size={24} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiYoutubeLine size={24} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiMediumLine size={24} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors">
            <RiGithubLine size={24} className="text-gray-800" />
          </a>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-7xl lg:text-8xl font-[font1] text-black">energyweb</h1>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          <p className="text-black">Copyright Energy Web 2025</p>
          <div className="flex items-center gap-3">
            <img src={logo}/>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-black hover:text-purple-600">Privacy Policy</a>
            <a href="#" className="text-black hover:text-purple-600">Cookies Policy</a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Logo and Tagline */}
       

        <h2 className="text-xl font-medium text-purple-600 mb-6 leading-snug">
          We build digital solutions that help companies navigate the energy transition
        </h2>

        {/* Contact Info */}
        <div className="mb-8">
          <p className="font-semibold text-black mb-2">More information:</p>
          <a href="mailto:info@energyweb.org" className="text-black underline">
            info@energyweb.org
          </a>
        </div>



        <div className='grid grid-cols-2 sm:flex gap-8'>
  {/* Solutions Section */}
        <div className="mb-6">
          <h3 className="text-purple-600 font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-black">Electricity</a></li>
            <li><a href="#" className="text-black">Aviation</a></li>
            <li><a href="#" className="text-black">Maritime</a></li>
            <li><a href="#" className="text-black">Clean Mining</a></li>
          </ul>
        </div>

        {/* Ecosystem Section */}
        <div className="mb-6">
          <h3 className="text-purple-600 font-semibold mb-3">Ecosystem</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-black">Our Ecosystem</a></li>
            <li><a href="#" className="text-black">Events</a></li>
            <li><a href="#" className="text-black">EW Dive 2025</a></li>
            <li><a href="#" className="text-black">Europe Projects</a></li>
            <li><a href="#" className="text-black">Academy</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="mb-8">
          <h3 className="text-purple-600 font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-black">Documentation</a></li>
            <li><a href="#" className="text-black">Media Kit</a></li>
            <li><a href="#" className="text-black">Roadmap 2025</a></li>
            <li><a href="#" className="text-black">Company Brochure</a></li>
            <li><a href="#" className="text-black">EW Circles</a></li>
            <li><a href="#" className="text-black">Our Team</a></li>
            <li><a href="#" className="text-black">Energy Web Audit</a></li>
            <li><a href="#" className="text-black">Get Involved</a></li>
          </ul>
        </div>
        </div>
      

        {/* Social Icons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiLinkedinBoxLine size={22} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiTwitterXLine size={22} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiDiscordLine size={22} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiTelegramLine size={22} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiYoutubeLine size={22} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiMediumLine size={22} className="text-gray-800" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <RiGithubLine size={22} className="text-gray-800" />
          </a>
        </div>
        <div className="mb-8">
          <h1 className="text-7xl lg:text-8xl font-[font1] text-black">energyweb</h1>
        </div>
      </div>

      
    </footer>
  );
};

export default Contact;