import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedOrder = JSON.parse(localStorage.getItem("lastOrder") || "[]");
     // console.log("Saved order:", savedOrder);

      if (savedOrder && savedOrder.length > 0) {
        setOrder(savedOrder);
        
        // Calculate total price using the appropriate price field for each item
        const total = savedOrder.reduce((acc, orderItem) => {
          // Try to get price in this priority: finalPrice -> price -> defaultPrice
          const itemPrice = getItemPrice(orderItem.item);
          const quantity = Number(orderItem.quantity) || 0;
          return acc + (itemPrice * quantity);
        }, 0);
        
      //  console.log("Calculated total:", total);
        setTotalPrice(total);
      }
    } catch (error) {
      console.error("Error loading order data:", error);
    }
  }, []);

  // Format price properly (prices are in paise, so divide by 100 to get rupees)
  const formatPrice = (price) => {
    if (!price && price !== 0) return "₹NaN";
    return `₹${(price / 100).toFixed(2)}`;
  };

  // Get item price based on priority: finalPrice -> price -> defaultPrice
  const getItemPrice = (item) => {
    if (item.finalPrice) return item.finalPrice;
    if (item.price) return item.price;
    if (item.defaultPrice) return item.defaultPrice;
    return 0;
  };

  // Get the discount percentage if there's a price and finalPrice
  const getDiscountPercentage = (item) => {
    if (item.price && item.finalPrice && item.price > item.finalPrice) {
      const discount = ((item.price - item.finalPrice) / item.price) * 100;
      return Math.round(discount);
    }
    return null;
  };

  // Determine if an item is vegetarian
  const isVegetarian = (item) => {
    return item.isVeg === 1 || 
           (item.itemAttribute && item.itemAttribute.vegClassifier === 'VEG');
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
        <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You for Your Order!</h2>
        <p className="text-gray-600 mb-6">We have received your order and are preparing it now.</p>
      </div>

      {order.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2 text-center">Order Summary</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Item Name</th>
                  <th className="py-3 px-4 text-center text-gray-600 font-medium">Quantity</th>
                  <th className="py-3 px-4 text-right text-gray-600 font-medium">Price</th>
                  <th className="py-3 px-4 text-right text-gray-600 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.map((orderItem, index) => {
                  const price = getItemPrice(orderItem.item);
                  const itemTotal = price * orderItem.quantity;
                  const discountPercentage = getDiscountPercentage(orderItem.item);
                  
                  return (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-left">
                        <div className="flex items-center">
                          {isVegetarian(orderItem.item) ? (
                            <span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                          ) : (
                            <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                          )}
                          <span>{orderItem.item.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">{orderItem.quantity}</td>
                      <td className="py-3 px-4 text-right">
                        {discountPercentage ? (
                          <div>
                            <span className="text-green-600 font-medium">{formatPrice(price)}</span>
                            <div className="flex items-center justify-end">
                              <span className="text-xs line-through text-gray-500 mr-1">
                                {formatPrice(orderItem.item.price)}
                              </span>
                              <span className="text-xs bg-green-100 text-green-800 px-1 rounded">
                                {discountPercentage}% off
                              </span>
                            </div>
                          </div>
                        ) : (
                          formatPrice(price)
                        )}
                      </td>
                      <td className="py-3 px-4 text-right font-medium">{formatPrice(itemTotal)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="font-semibold text-gray-800 bg-gray-50">
                  <td colSpan="3" className="py-3 px-4 text-right">Total Price:</td>
                  <td className="py-3 px-4 text-right">{formatPrice(totalPrice)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-green-700 font-medium text-center">Your order has been confirmed. You will receive a confirmation email shortly.</p>
            <div className="mt-4 flex justify-center">
              <button 
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-600">No order data found. Please check your order history or contact customer support.</p>
          <button 
            className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default ThankYou;