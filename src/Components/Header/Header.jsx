import React from 'react'
import { LOGO_URL } from '../../utils/constant' 
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
// import UserContext from '../../utils/UserContext';


const Header = () => {


  const [btnNameReact,setBtnNameReact] = useState("Login");

  // online status check
  const onlineStatus = useOnlineStatus();

  // New state for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const {loggedInUser} = useContext(UserContext) ;

  // selector used to subscribe to the store  
  const cartItems = useSelector(store => store?.cart?.items) ;


  return (
    <div className='header sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 shadow-md bg-gradient-to-r from-white to-gray-50 '>
      <div className="flex items-center space-x-1">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
  <span className="text-xl md:text-2xl font-bold text-gray-700">Cravio</span>
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
        className={`nav-items fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-2xl lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:transform-none ${
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

            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}
                className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-amber-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                          }
            >
              Home

            </NavLink>
          </li>

          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>

            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-amber-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
              }

            >
              About
              
            </NavLink>
          </li>

          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>

            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-amber-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                  }

            >
              Contact Us

            </NavLink>
          </li>

          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>
              <NavLink 
                to="/cart" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `relative inline-flex items-center  py-2 pr-4 pl-3 duration-200 ${isActive ? "text-amber-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                }
                
              >
                Cart
                {cartItems?.length > 0 && (
                  <span className="ml-1.5 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[20px] text-center">
                    {cartItems.length}
                  </span>
                )}
              </NavLink>

          </li>

          <li className='w-full lg:w-auto hover:text-amber-500 transition cursor-pointer'>

            <NavLink to="/grocery" onClick={() => setMobileMenuOpen(false)}

              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-amber-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
              }
             
            >
              Grocery
              
            </NavLink>
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
