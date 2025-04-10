import React, { useState } from 'react'
import { useEffect } from 'react'
import { MENU_API_URL } from '../utils/constant';
import Shimmer from '../Components/Shimmer/Shimmer';
import { useParams } from 'react-router-dom';


const RestMenuPage = () => {

    const [restInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
       
        const data = await fetch(MENU_API_URL(resId));

        const json = await data.json();
    

        setResInfo(json.data);
    }

    const {name,cuisines,costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info || {};
    
    const {itemCards} = restInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
     
    


    return restInfo === null ? (
        <Shimmer />
      ) : (
        <div className="p-6 max-w-6xl mx-auto bg-[#f9f9f9] min-h-screen">
          {/* Header */}
          <div className="mb-10 border-b pb-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-3">{name}</h1>
            <h3 className="text-lg text-gray-600 mb-1">{cuisines?.join(', ')}</h3>
            <h3 className="text-md text-gray-500 mt-4 italic">{costForTwoMessage}</h3>
          </div>
      
          {/* Menu */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Menu</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {itemCards?.map((item) => {
              const info = item.card.info;
              const price = info.price || info.defaultPrice || 0;
              const imgId = info.imageId;
              const imgURL = imgId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/${imgId}`
                : null;
      
              return (
                <div
                  key={info.id}
                  className="flex flex-col md:flex-row justify-between border rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300 overflow-hidden"
                >
                  {/* Text Content */}
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {info.name}
                    </h3>
                    <p className="text-green-600 font-bold text-md mb-2">
                      ₹{price / 100}
                    </p>
                    {info.description && (
                      <p className="text-sm text-gray-500 max-h-24 overflow-hidden text-ellipsis">
                        {info.description}
                      </p>
                    )}
                  </div>
      
                  {/* Image + Button */}
                  {imgURL && (
                    <div className="relative w-[140px] mt-4 md:mt-0">
                      <img
                        src={imgURL}
                        alt={info.name}
                        className="rounded-xl w-full h-[120px] object-cover"
                      />
                      <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white px-5 py-1.5 rounded-lg shadow text-green-600 font-semibold text-sm border hover:bg-green-50">
                        ADD
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }   
      
export default RestMenuPage
