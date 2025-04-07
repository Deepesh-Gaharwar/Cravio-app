import React from 'react'
import { LOGO_URL } from '../../utils/constant'


const Header = () => {
  return (
    <div className='header flex justify-between border m-3'>

        <div className='logo w-[200px]'>
            <img src={LOGO_URL} /> 
        </div>

        <div className='nav-items '>
            <ul className='flex space-x-6 p-4 text-2xl'>
                <li className=''>Home</li>
                <li className=''>About Us</li>
                <li className=''>Contact Us</li>
                <li className=''>Cart</li>

            </ul>
        </div>
      
    </div>
  )
}

export default Header
