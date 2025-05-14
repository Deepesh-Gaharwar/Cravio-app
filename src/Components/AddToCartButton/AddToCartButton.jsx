import React from 'react';
import { useSelector } from 'react-redux';

const AddToCartButton = ({ item, handleAddItem, handleRemoveItem }) => {
  const cartItems = useSelector(store => store.cart.items);
  
 // check if item is already in cart and get its quantity

 const cartItem = cartItems.find(ci => ci.item.id === item.id) ;
 
 const quantity = cartItem ? cartItem.quantity : 0 ;

  return (
    <button
      className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-green-600 border border-green-600 text-xs font-bold rounded-full hover:bg-green-50 transition-all duration-300 shadow-sm flex items-center `}
    >
      
        <span 
          className="px-2 py-1.5 border-r border-green-600 hover:bg-green-600 hover:text-white transition-all duration-200 rounded-l-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveItem(item);
          }}
        >
          -
        </span>
      
      <span 
        className="px-3 py-1.5 font-medium cursor-default"
      >
        {quantity > 0 ? quantity : 'ADD'}
      </span>
      
        <span 
          className="px-2 py-1.5 border-l border-green-600 hover:bg-green-600 hover:text-white transition-all duration-200 rounded-r-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleAddItem(item);
          }}
        >
          +
        </span>
    
    </button>
  );
};

export default AddToCartButton;