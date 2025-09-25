import React, { useState } from "react";
import connector from "../../../public/connector.png";
import logo from "../../../public/logo.svg";

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
          bgColor: "from-yellow-50 to-green-50",
        },
        {
          title: "Aviation",
          img: "../../../public/navso/navso2.png",
          bgColor: "from-blue-50 to-sky-50",
        },
        {
          title: "Maritime",
          img: "../../../public/navso/navso3.png",
          bgColor: "from-cyan-50 to-teal-50",
        },
        {
          title: "Clean Mining",
          img: "../../../public/navso/navso4.png",
          bgColor: "from-emerald-50 to-green-50",
        },
      ],
    },
    {
      name: "Ecosystem",
      dropdown: [
        {
          title: "Ecosystem",
          img: "../../../public/naveco/naveco1.png",
          bgColor: "from-purple-50 to-indigo-50",
        },
        {
          title: "Events",
          img: "../../../public/naveco/naveco2.png",
          bgColor: "from-pink-50 to-purple-50",
        },
        {
          title: "EW Dive 2025",
          img: "../../../public/naveco/naveco3.png",
          bgColor: "from-indigo-50 to-purple-50",
        },
        {
          title: "Europe Projects",
          img: "../../../public/naveco/naveco4.png",
          bgColor: "from-blue-50 to-indigo-50",
        },
        {
          title: "Academy",
          img: "../../../public/naveco/naveco5.png",
          bgColor: "from-violet-50 to-purple-50",
        },
        {
          title: "Worker Node",
          img: "../../../public/naveco/naveco6.png",
          bgColor: "from-slate-50 to-gray-50",
        },
      ],
    },
    {
      name: "Company",
      dropdown: [
        {
          title: "Documentation",
          img: "../../../public/navco/navco1.png",
          bgColor: "from-blue-50 to-purple-50",
        },
        {
          title: "Media Kit",
          img: "../../../public/navco/navco2.png",
          bgColor: "from-gray-50 to-slate-50",
        },
        {
          title: "Roadmap 2025",
          img: "../../../public/navco/navco3.png",
          bgColor: "from-green-50 to-emerald-50",
        },
        {
          title: "EW Circles",
          img: "../../../public/navco/navco4.png",
          bgColor: "from-gray-50 to-slate-50",
        },
        {
          title: "Company Brochure",
          img: "../../../public/navco/navco5.png",
          bgColor: "from-slate-50 to-gray-50",
        },
        {
          title: "Our Team",
          img: "../../../public/navco/navco6.png",
          bgColor: "from-blue-50 to-sky-50",
        },
        {
          title: "Energy Web Audit",
          img: "../../../public/navco/navco7.png",
          bgColor: "from-gray-900 to-black",
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
    <div className=" relative   ">
      {/* Navigation */}
      <nav className="relative z-40">
        <div className="max-w-6xl mx-auto px-6 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center justify-center mr-3">
                <img src={logo} alt="" />
              </div>
            </div>

            {/* Navigation Pills */}
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      item.isButton
                        ? "bg-purple-500 text-white shadow-sm ml-2"
                        : activeDropdown === index
                        ? "bg-purple-500 text-white shadow-sm"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* Dropdown Menu */}
                  {!item.isButton && activeDropdown === index && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-2">
                      {/* Connector */}
                      <div className="flex justify-center -mt-1">
                        <img
                          src={connector}
                          alt="connector"
                          className="w-10 h-5 object-contain "
                        />
                      </div>

                      {/* Dropdown Box */}
                      <div className="w-[420px] bg-white rounded-3xl -mt-1 shadow-xl border border-white p-6">
                        <div className="space-y-3">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <div
                              key={idx}
                              className="relative rounded-2xl overflow-hidden cursor-pointer group h-20 border border-gray-100 hover:border-purple-500  hover:shadow-2xl"
                            >
                              {/* Background image */}
                              <img
                                src={dropdownItem.img}
                                alt={dropdownItem.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />

                              {/* Dark overlay for readability */}
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

                              {/* Title text */}
                              <div className="relative z-10 flex items-center h-full px-4">
                                <h4 className="font-medium text-white text-base">
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

                      {/* Contact Form Box */}

                      {/* <ContactForm /> */}

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

      {/* Overlay for dropdown */}
      {activeDropdown !== null && (
        <div
          className="fixed inset-0 bg-transparent z-30"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default Navbar;
