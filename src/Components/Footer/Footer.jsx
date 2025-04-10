import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-6 mt-10 border-t border-gray-800 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400">Cravio-Foodie</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Your daily dose of deliciousness. Order. Eat. Repeat.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 leading-relaxed">
            📍 123 Flavor Street, Foodville<br />
            📞 +91 9876543210<br />
            ✉️ support@craviofoodie.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 mt-1">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} className="text-gray-400 hover:text-yellow-400 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} className="text-gray-400 hover:text-yellow-400 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} className="text-gray-400 hover:text-yellow-400 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Cravio-Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
