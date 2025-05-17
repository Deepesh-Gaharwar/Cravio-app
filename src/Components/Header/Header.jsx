import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {ShoppingCart, UserCircle, MoreVertical } from 'lucide-react';
import { auth } from '../../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { LOGO_URL } from '../../utils/constant';
import { logoutUser } from '../../utils/authSlice';
import { clearCart } from '../../utils/cartSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const [, setBtnNameReact] = useState('Login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector(store => store?.cart?.items);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setBtnNameReact('Logout');
        setUser(currentUser);
      } else {
        setBtnNameReact('Login');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);                 
      dispatch(logoutUser());             
      dispatch(clearCart());              
      setBtnNameReact('Login');
      setShowDropdown(false);
      setMobileMenuOpen(false);
      navigate('/');                      
      toast.success('Logged out successfully!', {
              position: 'top-center',
              className: 'bg-green-600 text-white rounded-md shadow-md',
            }); 
            
    } catch (err) {
      console.error(err.message);
      toast.error(err.message, {
              position: 'bottom-center',
              className: 'bg-red-600 text-white rounded-md shadow-md',
            });
    }
  };

  return (
  <div className='header sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 shadow-md bg-gradient-to-r from-white to-gray-50'>
    {/* Logo */}
    <div className="flex items-center space-x-1">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
        <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <span className="text-xl md:text-2xl font-bold text-gray-700">Cravio</span>
    </div>

    {/* Hamburger Menu */}
    <button
      className='lg:hidden flex flex-col justify-center items-center cursor-pointer'
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      <span className='block w-6 h-0.5 bg-gray-700 mb-1'></span>
      <span className='block w-6 h-0.5 bg-gray-700 mb-1'></span>
      <span className='block w-6 h-0.5 bg-gray-700'></span>
    </button>

    {/* Navigation */}
    <div className={`nav-items fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-2xl lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:transform-none ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
      <button
        className='lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer'
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <ul className='flex flex-col lg:flex-row items-start lg:items-center pt-16 lg:pt-0 px-6 lg:px-0 space-y-4 lg:space-y-0 lg:space-x-6 xl:space-x-10 text-base lg:text-lg font-semibold text-gray-700'>
        <li>
          <NavLink to="/" className={({ isActive }) => `block py-2 px-3 duration-200 ${isActive ? 'text-amber-500' : 'text-gray-700'} hover:text-amber-500`} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => `block py-2 px-3 duration-200 ${isActive ? 'text-amber-500' : 'text-gray-700'} hover:text-amber-500`} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 duration-200 ${isActive ? 'text-amber-500' : 'text-gray-700'} hover:text-amber-500`} onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative inline-flex items-center gap-2 py-2 px-3 duration-200 ${isActive ? 'text-amber-500' : 'text-gray-700'} hover:text-amber-500`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
            {cartItems?.length > 0 && (
              <span className="ml-1.5 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[20px] text-center">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/grocery" className={({ isActive }) => `block py-2 px-3 duration-200 ${isActive ? 'text-amber-500' : 'text-gray-700'} hover:text-amber-500`} onClick={() => setMobileMenuOpen(false)}>Grocery</NavLink>
        </li>
        <li className='py-2 px-3 hover:text-amber-500'>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>

        {/* Mobile Logout */}
        {mobileMenuOpen && user && (
          <li className='w-full lg:hidden mt-4'>
            <button
              className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded-full shadow hover:bg-red-600 transition duration-200 ease-in-out cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        )}

        {/* Desktop More Button */}
        <li className="hidden lg:block relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="More options"
          >
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dropdown - when user is logged in */}
          {showDropdown && user && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50 text-gray-800 p-6 text-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-16 h-16 text-gray-500" />
                </div>
              )}
              <p className="text-sm font-semibold mb-1">
                Username: <span className="font-normal">{user.displayName || "N/A"}</span>
              </p>
              <p className="text-sm font-semibold mb-4">
                Email: <span className="font-normal">{user.email}</span>
              </p>
              <button
                className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded-full shadow hover:bg-red-600 transition duration-200 ease-in-out cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

          {/* Dropdown - when user is NOT logged in */}
          {showDropdown && !user && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50 text-gray-800 p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <UserCircle className="w-16 h-16 text-gray-500" />
              </div>
              <p className="text-sm font-semibold mb-2">You are not logged in !</p>
              <p className="text-xs text-gray-500 mb-4">Please login or register to continue</p>
              <button
                className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-full shadow hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer"
                onClick={() => {
                  setShowDropdown(false);
                  navigate('/login');
                }}
              >
                Login / Register
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  </div>
);

};

export default Header;
