import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Grocery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-lime-100 px-4 py-10 flex items-center justify-center">
      
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full text-center">
          <div className="flex items-center justify-center mb-4 gap-2">

            <ShoppingCart className="w-8 h-8 text-green-600" />
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-green-700">
              Welcome to Our Grocery Store
            </h1>

          </div>

          <p className="text-gray-600 text-base md:text-lg">
           We offer a wide selection of fresh groceries delivered right to your doorstep. Scroll down to discover more from our amazing selection of products!
          </p>

      </div>

    </div>
  );
};

export default Grocery;