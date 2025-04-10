import React from 'react'

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400 text-center">About Cravio-Foodie</h1>
      
      <p className="text-lg text-gray-700 mb-6 ">
        Welcome to <strong>Cravio-Foodie</strong> – your ultimate food discovery and delivery companion! 
        Built using Swiggy's API, our app is designed to bring your favorite meals from local restaurants right to your fingertips.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Cravio-Foodie?</h2>
      <p className="text-gray-700 mb-4">
        We believe food is more than just fuel – it's an experience. Whether you're craving spicy street food, gourmet delights,
        or a comforting home-style meal, Cravio-Foodie helps you explore a wide range of cuisines and dishes without leaving your couch.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer:</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Seamless browsing of restaurant menus powered by Swiggy’s robust API</li>
        <li>Easy-to-use and beautifully designed interface</li>
        <li>Real-time updates and fast performance</li>
        <li>Personalized recommendations based on your taste</li>
      </ul>

      <p className="mt-6 text-gray-700">
        Whether you're a foodie on the hunt or someone just looking for a quick bite – Cravio-Foodie is here to serve!
        Your next delicious meal is just a tap away.
      </p>
    </div>
  );
};

export default About
