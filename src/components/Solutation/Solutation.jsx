import React, { useState } from "react";
import solution1 from "/solution/solution1.png";
import solution2 from "/solution/solution2.png";
import { RiPlayLargeFill } from "@remixicon/react";

const Solutation = () => {
  const [activeTab, setActiveTab] = useState("Digital Spine");

  const tabs = [
    {
      icons:"/solution/chakra.svg",
      name: "Digital Spine",
      title: "Digital Spine Explained",
      desc: "Secure, open-source data and asset management for efficient, reliable electricity markets. Trusted by regulators and grid operators.",
      img: solution2,
      stroy:"Learn more about Digital Spine Solution"
    },
    {
      icons:"/solution/thunder.svg",
      name: "Green Proofs",
      title: "Green Proofs Explained",
      desc: "A flexible solution for tracking low-carbon products and attributes across supply chains.",
      img: solution1,
      stroy:"Learn more about Green Proofs Solution"
    },
  ];

  const activeContent = tabs.find((tab) => tab.name === activeTab);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-6xl  font-[font1]  mb-6">
        Powered by Energy Web's Solutions
      </h2>

      {/* Tabs */}
      <div className="flex  h-14 mb-8">
        <div className="flex rounded-full border overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-2 lg:text-4xl md:text-sm font-[font1] transition ${
                activeTab === tab.name
                  ? "bg-black text-white rounded-4xl"
                  : "bg-white text-black rounded-4xl"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-blur">
        {/* Text */}
        <div className="flex flex-col flex-1 gap-4">
          <img src={activeContent.icons} className="h-10 w-10" alt="" />
          <h3 className="text-2xl font-bold mb-3">{activeContent.title}</h3>
          <p className="text-gray-600 mb-4">{activeContent.desc}</p>
          
        </div>

        <div className="flex-1 flex flex-col rounded-xl shadow-blur">
          {/* Image */}
          <div className="flex-1">
            <img
              src={activeContent.img}
              alt={activeContent.title}
              className="rounded-tl-xl rounded-tr-xl"
            />
            
          </div>

          {/* Added text below image */}
          <div className="bg-[#F9F5FF] h-28 relative rounded-bl-xl rounded-br-xl flex items-center justify-between px-8">
            <div className="text-xl w-64 font-[font1]">
              {activeContent.stroy}
            </div>
            
            <button className=" bg-black text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition">
              <RiPlayLargeFill size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutation;

