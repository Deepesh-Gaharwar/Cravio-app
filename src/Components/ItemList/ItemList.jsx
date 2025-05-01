import React from "react";
import { IMAGE_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // console.log(item.card.info)
    // Dispatch an action
    dispatch(addItem(item.card.info));
   
  }

  const handleRemoveItem = (item) => {
    // dispatch an action
    dispatch(removeItem(item));
  }
  
  return (
    <div className="space-y-6">
      {items.map((item, index) => {

        const info = item?.card?.info;
        const price = info?.price || info?.defaultPrice || 0;
        const imgId = info?.imageId;
        const imgURL = imgId ? `${IMAGE_URL}/${imgId}` : null;
        
        return (
          <div
            data-testid = "foodItems"
            key={info?.id || index}
            className="flex flex-col sm:flex-row gap-4 p-4 border-b border-gray-100 last:border-0"
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800">
                {info?.name}
              </h3>
              
              {info?.description && (
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {info.description}
                </p>
              )}
              
              <div className="mt-3 text-base font-medium text-green-600">
                ₹{price / 100}
              </div>
            </div>
            
            {imgURL && (
                <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 group">
                    <img
                      src={imgURL}
                      alt={info?.name}
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
      })}
    </div>
  );
};

export default ItemList