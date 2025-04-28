import React from 'react';
import { Facebook, Instagram, Twitter,MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-6 mt-10 border-t border-gray-800 text-sm">
      {/* Brand section on top */}
      <div className="max-w-6xl mx-auto mb-6 text-center">
        <h2 className="text-2xl font-bold text-yellow-400">Cravio</h2>
        <p className="mt-2 text-gray-400 leading-relaxed">
          Your daily dose of deliciousness. Order. Eat. Repeat.
        </p>
      </div>
      
      {/* Horizontal sections that stack on mobile */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Navigation */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2 text-center md:text-left">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-center md:text-left">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            
            <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact us</Link></li>
            <li><Link to="/cart" className="hover:text-yellow-400 transition">Cart</Link></li>
            <li><Link to="/grocery" className="hover:text-yellow-400 transition">Grocery</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2 text-center md:text-left">Contact Us</h3>
            <div className="text-gray-400 leading-relaxed text-center md:text-left space-y-2">

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={20} className="text-gray-400 hover:text-yellow-400 transition" />
                <span>12/3 Flavor Street, Foodville</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2" >
                <Phone size={20} className="text-gray-400 hover:text-yellow-400 transition" />
                 <span> +91 9876543210 </span> 
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2" >
                <Mail size={20} className="text-gray-400 hover:text-yellow-400 transition" />
                <span> support@cravio.com </span>
              </div>

            </div>
          </div>
        
        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2 text-center md:text-left">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-3 mt-1">
            <Link to="#" aria-label="Facebook">
              <Facebook size={20} className="text-gray-400 hover:text-yellow-400 transition" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <Instagram size={20} className="text-gray-400 hover:text-yellow-400 transition" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <Twitter size={20} className="text-gray-400 hover:text-yellow-400 transition" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright at bottom */}
      <div className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Cravio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;