import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { toast, ToastContainer } from 'react-toastify';
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success('User logged in successfully!', {
        position: 'top-center',
        className: 'bg-green-600 text-white rounded-md shadow-md',
      });

      // Redirect after slight delay for user feedback
      setTimeout(() => {
        navigate('/profile');
      }, 1000);

    } catch (error) {
      console.error(error.message);

      toast.error(error.message, {
        position: 'bottom-center',
        className: 'bg-red-600 text-white rounded-md shadow-md',
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl transition-all">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
  
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
  
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
  
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200 cursor-pointer"
          >
            Log In
          </button>
        </form>
  
        {/* Register Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          New user?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register Here
          </Link>
        </p>
  
        {/* Google Sign-in */}
        
        <SignInWithGoogle />

      </div>
    </div>
  );
  
};

export default Login;
