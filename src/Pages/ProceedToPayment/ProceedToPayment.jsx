import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { clearCart } from '../../utils/cartSlice'
import { useNavigate } from 'react-router-dom'


const ProceedToPayment = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  
  const handlePayment = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    // Simulate order processing
    alert("Payment simulated. Thank you for your order!");

    // Optionally store order summary
    localStorage.setItem("lastOrder", JSON.stringify(cartItems));

    // Clear cart
    dispatch(clearCart());

    // Navigate to a thank-you page
    navigate('/thank-you');
  };

  return (
    <button
      className="bg-blue-700 text-white p-3 rounded-md w-full hover:bg-blue-800 transition"
      onClick={handlePayment}
    >
      Proceed to Payment
    </button>
  )
}

export default ProceedToPayment ;
