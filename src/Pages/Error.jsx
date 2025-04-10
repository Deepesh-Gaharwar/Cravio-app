import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const Error = () => {

  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  const handleGoBack = () => { 
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <h2 className="text-2xl text-gray-800 mb-2">Something went wrong</h2>

      <h3>{error.status} : {error.statusText}</h3>
      <p className="text-gray-600 mb-6">
        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
    
      <button
        onClick={handleGoBack}
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition-all duration-200 cursor-pointer"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Error;
