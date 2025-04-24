import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, addItem, removeItem } from '../utils/cartSlice';
import { Trash2 } from 'lucide-react';
import { CDN_URL } from '../utils/constant';
import AddToCartButton from '../Components/AddToCartButton/AddToCartButton';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleAddItem = () => {
    dispatch(addItem(item));
  };
  
  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };
  
  // Extract item details
  const info = item?.card?.info || item;
  const name = info?.name || '';
  const description = info?.description || '';
  const price = info?.price || info?.defaultPrice || 0;
  const imageId = info?.imageId;
  const imgURL = imageId ? `${CDN_URL}/${imageId}` : null;

  return (
    <div className="flex justify-between items-start py-6 px-4 border-b border-gray-100 last:border-0">
      <div className="flex flex-col text-left pr-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description || `Serves 1 | ${name}`}</p>
        <p className="text-base font-medium text-green-600 mt-3">₹{price/100 || price}</p>
      </div>
      
        {imgURL && (
                <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 group">
                    <img
                      src={imgURL}
                      alt={name}
                      className="w-full h-full object-cover rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md"
                    />
                    
                    <AddToCartButton 
                        item={item} 
                        handleAddItem={handleAddItem} 
                        handleRemoveItem={handleRemoveItem} 
                    />
                </div>    
        )}                     

      
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const info = item?.card?.info || item;
      const price = info?.price || info?.defaultPrice || 0;
      return total + (price/100 || price);
    }, 0);
  };
  
  return (
    <div className="text-center px-4 py-6 md:p-6 max-w-full">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Cart</h1>
      
      <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto">
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="bg-white p-4 sm:p-5 rounded-lg mb-4 shadow-sm">
              <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
                <span className="text-gray-700 font-medium">Items ({cartItems.length})</span>
                <span className="font-semibold">₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-base sm:text-lg font-bold border-t pt-3 mt-2">
                <span>Total Amount</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            
            {/* Clear cart button */}
            <button 
              className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 shadow-sm"
              onClick={handleClearCart}
            >
              <Trash2 size={18} className="flex-shrink-0" />
              <span>Clear Cart</span>
            </button>
          </>
        ) : (
          <div className="text-center p-6 sm:p-10 bg-gray-50 rounded-lg shadow-sm">
            <h1 className="text-lg sm:text-xl text-gray-500">Cart is empty. Add Items to the cart!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;