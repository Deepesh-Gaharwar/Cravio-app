import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";

const RestCategory = ({ data }) => {

  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">

      {/* Accordion Header */}

      {data?.map((category, index) => (
        <div
          key={index}
          className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-white w-full transition-all duration-300 hover:shadow-md"
        >
          <div
            className={`flex justify-between items-center cursor-pointer p-4 w-full ${
              openIndex === index ? "bg-blue-50 border-b border-gray-200" : "bg-white"
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center">
              <span className="font-medium text-lg text-gray-800">
                {category.card.card.title}
              </span>
              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                {data.length || 0}
              </span>
            </div>
            <span className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>


          {/* Accordion Body */}

          {openIndex === index && (
            <div className="p-4 bg-white border-t border-gray-100">
              <ItemList items={category?.card?.card?.itemCards} />
            </div>
            
          )}
        </div>
      ))}
    </div>
  );
};

export default RestCategory;