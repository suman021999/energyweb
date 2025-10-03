
import React, { useState } from "react";
import connector from "../../../public/connector.png";
// import logo from "../../../public/logo.svg";
import dropdownItem from "../../../public/dropdown.svg";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Business Inquiry");

  const menuItems = [
    {
      name: "Solutions",
      dropdown: [
        {
          title: "Electricity",
          img: "../../../public/navso/navso1.png",
        },
        {
          title: "Aviation",
          img: "../../../public/navso/navso2.png",
        },
        {
          title: "Maritime",
          img: "../../../public/navso/navso3.png",
        },
        {
          title: "Clean Mining",
          img: "../../../public/navso/navso4.png",
        },
      ],
    },
    {
      name: "Ecosystem",
      dropdown: [
        {
          title: "Ecosystem",
          img: "../../../public/naveco/naveco1.png",
        },
        {
          title: "Events",
          img: "../../../public/naveco/naveco2.png",
        },
        {
          title: "EW Dive 2025",
          img: "../../../public/naveco/naveco3.png",
        },
        {
          title: "Europe Projects",
          img: "../../../public/naveco/naveco4.png",
        },
        {
          title: "Academy",
          img: "../../../public/naveco/naveco5.png",
        },
        {
          title: "Worker Node",
          img: "../../../public/naveco/naveco6.png",
        },
      ],
    },
    {
      name: "Company",
      dropdown: [
        {
          title: "Documentation",
          img: "../../../public/navco/navco1.png",
        },
        {
          title: "Media Kit",
          img: "../../../public/navco/navco2.png",
        },
        {
          title: "Roadmap 2025",
          img: "../../../public/navco/navco3.png",
        },
        {
          title: "EW Circles",
          img: "../../../public/navco/navco4.png",
        },
        {
          title: "Company Brochure",
          img: "../../../public/navco/navco5.png",
        },
        {
          title: "Our Team",
          img: "../../../public/navco/navco6.png",
        },
        {
          title: "Energy Web Audit",
          img: "../../../public/navco/navco7.png",
        },
      ],
    },
    {
      name: "Contact",
      isButton: true,
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="relative bg-white z-999">
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0  z-50 bg-white pb-4 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center justify-center mr-3">
                <img src='/logo.svg' alt="" />
              </div>
            </div>

            {/* Desktop Pills */}
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                      item.isButton
                        ? "bg-purple-500 text-white shadow-sm ml-2"
                        : activeDropdown === index
                        ? "bg-purple-500 text-white shadow-sm"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* Desktop Dropdown */}
                  {!item.isButton && activeDropdown === index && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-2">
                      <div className="flex justify-center -mt-1">
                        <img
                          src={connector}
                          alt="connector"
                          className="w-10 h-5 object-contain"
                        />
                      </div>
                      <div className="w-[420px] bg-white rounded-3xl -mt-1 shadow-xl border border-white p-6">
                        <div className="space-y-3">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <div
                              key={idx}
                              className="relative rounded-2xl overflow-hidden cursor-pointer group h-20 border border-gray-100 hover:border-purple-500 hover:shadow-2xl"
                            >
                              <img
                                src={dropdownItem.img}
                                alt={dropdownItem.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>
                              <div className="relative z-10 flex items-center h-full px-4">
                                <h4 className="font-medium text-black text-2xl">
                                  {dropdownItem.title}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}


            {/* Contact Form */}
             {item.isButton && activeDropdown === index && (
               <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-2">
                 {/* Connector */}
                 <div className="flex justify-center -mt-1 ">
                   <img
                     src={connector}
                     alt="connector"
                     className="w-10 h-5 object-contain"
                   />
                 </div>
                 <div className="w-[420px] bg-white mr-80 rounded-3xl  -mt-1 shadow-xl border border-white p-6">
                   <h3 className="text-xl font-medium text-black mb-6">
                     How can we help?
                   </h3>

                   <div className="flex mb-6 bg-gray-100 rounded-full p-1">
                     <button
                       onClick={() => setSelectedTab("Business Inquiry")}
                       className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                         selectedTab === "Business Inquiry"
                           ? "bg-purple-500 text-white shadow-sm"
                           : "text-gray-600"
                       }`}
                     >
                       Business Inquiry
                     </button>
                     <button
                       onClick={() => setSelectedTab("Technical Support")}
                       className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                         selectedTab === "Technical Support"
                           ? "bg-purple-500 text-white shadow-sm"
                           : "text-gray-600"
                       }`}
                     >
                       Technical Support
                     </button>
                   </div>

                   <div className="space-y-4">
                     <input
                       type="text"
                       placeholder="Name"
                       className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-black"
                     />
                     <input
                       type="email"
                       placeholder="Email"
                       className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-black"
                     />
                     <textarea
                       placeholder="Message"
                       rows="4"
                       className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-black resize-none"
                     ></textarea>

                     <div className="flex items-start space-x-3 text-sm text-gray-600 pt-4">
                       <input type="checkbox" className="mt-0.5 w-4 h-4" />
                       <span className="leading-5">
                         By sending this form I confirm that I have read
                         and accept the{" "}
                         <button className="text-purple-500 hover:underline">
                           Privacy Policy
                         </button>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
             )}

                </div>
              ))}
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white p-4 md:hidden">
        <div className="flex items-center justify-between">
          <img src="/logo.svg" alt="logo" className="h-8" />
          <button
            className="px-4 py-2 rounded-full"
            onClick={() =>
              setActiveDropdown(activeDropdown === null ? 0 : null)
            }
          >
           <img  src={dropdownItem} alt="" />
          </button>
        </div>

        {/* Mobile Dropdown Cards */}
        {activeDropdown !== null && (
          <div className="mt-4 space-y-8 overflow-y-auto max-h-[75vh] pb-6 p-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {/* Section Header */}
                <div className="h-14 w-28  flex items-center  justify-center rounded-t-lg bg-white shadow-blur">
                  
               <h3 className="text-lg font-semibold  text-purple-600 mb-3  ">
                  {item.name}
                </h3>
                 
              
                </div>
               

                {/* Cards for normal dropdowns */}
                {item.dropdown && (
                  <div className="space-y-4 bg-white rounded-xl shadow-blur   p-4 ">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <div
                        key={idx}
                        className="relative hover:border-purple-500  w-full h-28 rounded-2xl overflow-hidden group shadow-md border border-gray-200"
                      >
                        <img
                          src={dropdownItem.img}
                          alt={dropdownItem.title}
                          className="absolute inset-0 w-full  h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bg-black/30 group-hover:bg-black/10 inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
                        <div className="relative z-10 flex items-center h-full px-4">
                          <h4 className="font-semibold text-lg text-black">
                            {dropdownItem.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Contact Form Card */}
                {item.isButton && (
                  <div className="w-full bg-white rounded-2xl shadow-md border border-gray-200 p-4">
                    <h3 className="text-lg font-semibold text-black mb-4">
                      How can we help?
                    </h3>

                    <div className="flex mb-6 bg-gray-100 rounded-full p-1">
                      <button
                        onClick={() => setSelectedTab("Business Inquiry")}
                        className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedTab === "Business Inquiry"
                            ? "bg-purple-500 text-white shadow-sm"
                            : "text-gray-600"
                        }`}
                      >
                        Business Inquiry
                      </button>
                      <button
                        onClick={() => setSelectedTab("Technical Support")}
                        className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedTab === "Technical Support"
                            ? "bg-purple-500 text-white shadow-sm"
                            : "text-gray-600"
                        }`}
                      >
                        Technical Support
                      </button>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-black"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-black"
                      />
                      <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-black resize-none"
                      ></textarea>

                      <div className="flex items-start space-x-3 text-sm text-gray-600 pt-4">
                        <input type="checkbox" className="mt-0.5 w-4 h-4" />
                        <span className="leading-5">
                          By sending this form I confirm that I have read and
                          accept the{" "}
                          <button className="text-purple-500 hover:underline">
                            Privacy Policy
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>


    </div>
  );
};

export default Navbar;
