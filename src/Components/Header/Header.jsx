import React from 'react'
import { LOGO_URL } from '../../utils/constant' 
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {


  const [btnNameReact,setBtnNameReact] = useState("Login");


  return (
    <div className='header sticky top-0 z-50 flex items-center justify-between px-8 py-4 shadow-md bg-gradient-to-r from-white to-gray-50 border-b'>

        <div className='logo w-[100px]'>
              <img
                 src={LOGO_URL}
                 className='w-full h-10 object-contain'
                 alt='Logo'
              />
        </div>

        <div className='nav-items '>
            <ul className='flex items-center space-x-10 text-lg font-semibold text-gray-700'>
                <li 
                  className='hover:text-amber-500 transition cursor-pointer'
                >
                  <Link to="/">Home</Link>
                </li>

                <li 
                   className='hover:text-amber-500 transition cursor-pointer'
                >
                  <Link to="/about">About</Link>
                </li>

                <li 
                   className='hover:text-amber-500 transition cursor-pointer'
                >
                  <Link to="/contact">Contact Us</Link>
                </li>

                <li 
                   className='hover:text-amber-500 transition cursor-pointer'
                >
                  <Link>Cart</Link>
                </li>

            </ul>
        </div>

        <div className='Login'>
            <button
                 className='login px-6 py-2 bg-amber-400 text-white font-bold rounded-full shadow hover:bg-amber-500 transition duration-200 ease-in-out'
                 onClick={() => {
                  btnNameReact == "Login"
                   ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                 }}
                >
                  {btnNameReact}
            </button>
        </div>
      
    </div>
  )
}

export default Header
