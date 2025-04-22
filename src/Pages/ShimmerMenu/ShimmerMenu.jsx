import React from 'react';
import './ShimmerMenu.css'



const ShimmerMenu = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Restaurant Heading Placeholder */}
      <div className="text-center space-y-3 mb-10">
        <div className="h-6 w-1/3 bg-gray-300 mx-auto rounded shimmer-bg" />
        <div className="h-4 w-1/4 bg-gray-300 mx-auto rounded shimmer-bg" />
        <div className="h-4 w-1/6 bg-gray-300 mx-auto rounded shimmer-bg" />
      </div>

      {/* Section for collapsible category cards */}
      <div className="space-y-8">
        {Array(3).fill(0).map((_, index) => (
          <div key={index} className="space-y-4">
            {/* Category header shimmer */}
            <div className="h-5 w-1/4 bg-gray-300 rounded shimmer-bg" />

            {/* Menu Items shimmer cards */}
            {Array(2).fill(0).map((_, idx) => (
              <div key={idx} className="flex items-start gap-4 border-b pb-4">
                <div className="w-24 h-24 bg-gray-300 rounded shimmer-bg" />
                <div className="flex-1 space-y-2">
                  <div className="w-1/2 h-4 bg-gray-300 rounded shimmer-bg" />
                  <div className="w-3/4 h-3 bg-gray-300 rounded shimmer-bg" />
                  <div className="w-1/4 h-3 bg-gray-300 rounded shimmer-bg" />
                  <div className="w-16 h-8 bg-gray-300 rounded shimmer-bg mt-2" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
