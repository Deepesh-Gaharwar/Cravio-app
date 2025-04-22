import React from 'react'
import { LOGO_URL } from '../../utils/constant' 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
// import UserContext from '../../utils/UserContext';


const Header = () => {


  const [btnNameReact,setBtnNameReact] = useState("Login");

  // online status check
  const onlineStatus = useOnlineStatus();

  // New state for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const {loggedInUser} = useContext(UserContext) ;
  


  return (
    <div className='header sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 shadow-md bg-gradient-to-r from-white to-gray-50 '>
      <div className='logo w-16 md:w-24 lg:w-24'>
        <img
          src={LOGO_URL}
          className='w-full h-8 md:h-10 object-contain'
          alt='Logo'
        />
      </div>
      
      {/* Hamburger Menu Button - Only visible on small screens */}
      <button
        className='lg:hidden flex flex-col justify-center items-center cursor-pointer'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className='block w-6 h-0.5 bg-gray-700 mb-1'></span>
        <span className='block w-6 h-0.5 bg-gray-700 mb-1'></span>
        <span className='block w-6 h-0.5 bg-gray-700'></span>
      </button>
      
      {/* Navigation - Hidden on small screens unless menu is open */}
      <div 
        className={`nav-items fixed top-0 right-0 h-auto max-h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-2xl lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:transform-none ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0 '
        }`}
      >
        {/* Close button for mobile menu */}
        <button
          className='lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer'
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <ul className='flex flex-col lg:flex-row items-start lg:items-center pt-16 lg:pt-0 px-6 lg:px-0 space-y-4 lg:space-y-0 lg:space-x-6 xl:space-x-10 text-base lg:text-lg font-semibold text-gray-700'>
          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </li>
          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </li>
          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>
            <Link onClick={() => setMobileMenuOpen(false)}>Cart</Link>
          </li>
          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>
            <Link to="/grocery" onClick={() => setMobileMenuOpen(false)}>Grocery</Link>
          </li>
          <li className='w-full lg:w-auto'>
            Online Status: {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className='w-full lg:w-auto mt-4 lg:mt-0 '>
          <button
                className={`w-full lg:w-auto px-4 py-2 bg-red-500 text-white font-bold rounded-full shadow hover:bg-red-600 transition duration-200 ease-in-out cursor-pointer ${
                  mobileMenuOpen ? 'mb-10' : ''
                } lg:mb-0`}
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                  setMobileMenuOpen(false);
                }}
          >
            {btnNameReact}

          </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header
