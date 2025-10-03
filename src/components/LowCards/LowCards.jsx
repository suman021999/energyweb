import React from "react";

import aviation from "/aviation.svg";
import electricity from "/lowcards/electricity.svg";
import frame from "/lowcards/Frame.svg";
import maritime from "/lowcards/maritime.svg";

const LowCards = () => {
  const items = [
    { label: "Electricity", icon: electricity, border: "border-purple-400" },
    { label: "Aviation", icon: aviation, border: "border-sky-400" },
    { label: "Maritime", icon: maritime, border: "border-indigo-800" },
    { label: "Clean Mining", icon: frame, border: "border-emerald-500" },
  ];

  return (
    <section className="flex flex-col gap-4 pt-10">
      <h2 className="text-lg font-medium ml-4">Creating solutions for</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer hover:shadow-md transition ${item.border}`}
          >
            <div className="p-1 rounded-full">
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
            </div>
            <span className="text-gray-600 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LowCards;
