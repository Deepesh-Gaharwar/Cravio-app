import React from 'react';
import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-6 justify-center p-6">
      {Array(4).fill(0).map((_, index) => (
        <div
          key={index}
          className="w-[280px] h-[350px] bg-[#f0f0f0] rounded-xl overflow-hidden shadow-md shimmer-card"
        >
          {/* Image Placeholder */}
          <div className="w-full h-[180px] bg-gray-300 shimmer-bg" />

          {/* Text Content */}
          <div className="p-4 space-y-3">
            <div className="w-2/3 h-4 bg-gray-300 rounded shimmer-bg" /> {/* Restaurant Name */}
            <div className="w-3/4 h-3 bg-gray-300 rounded shimmer-bg" /> {/* Category */}
            <div className="w-1/3 h-3 bg-gray-300 rounded shimmer-bg" /> {/* Price */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 bg-gray-300 rounded shimmer-bg" /> {/* Rating */}
              <div className="w-10 h-3 bg-gray-300 rounded shimmer-bg" /> {/* Time */}
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
