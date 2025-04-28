import React from 'react'
import { MapPin,Phone,Mail } from 'lucide-react';


const Contact = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">Contact Us</h1>
        
        <p className="text-base text-gray-600 text-center mb-8">
          Have questions, feedback, or need help? We’d love to hear from you!
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}

          <div className="text-gray-700 text-sm space-y-3">

            <p className="flex items-center space-x-2">
              <MapPin size={20} className="text-gray-400 hover:text-yellow-400 transition" />
              <span className="font-semibold">Address:</span>
              <span>12/3 Flavor Street, Foodville</span>
            </p>

            <p className="flex items-center space-x-2">
              <Phone size={20} className="text-gray-400 hover:text-yellow-400 transition" />
              <span className="font-semibold" > Phone: </span>
              <span> +91 9876543210 </span>
            </p>

            <p className="flex items-center space-x-2" >
              <Mail size={20} className="text-gray-400 hover:text-yellow-400 transition" />
              <span className="font-semibold" > Email: </span>
              <span> support@cravio.com </span>
            </p>

            <p>
              We’re available <span className="font-semibold">Mon to Sat</span>, <span className="font-semibold">9:00 AM – 9:00 PM</span>. Reach out anytime!
            </p>

          </div>


          {/* Contact Form */}
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="3"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 text-sm transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};



export default Contact
