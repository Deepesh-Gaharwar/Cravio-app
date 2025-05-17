import React from 'react';
import { CDN_URL } from '../../utils/constant';

const RestCard = ({resData}) => {
      
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
    }  = resData?.info|| {};

    const deliveryTime = resData?.info?.sla?.deliveryTime;

    if (!resData?.info) {
        return (
            <div className="w-[220px] h-[350px] m-[5px] bg-red-100 rounded-lg p-4 text-red-700 shadow-md">
                Invalid restaurant data.
            </div>
        );
    }

    return (
        <div data-testid="resCard" className='group rest-card w-[260px] min-h-[370px] m-3 bg-white rounded-xl shadow-md 
                        overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer 
                        hover:shadow-xl'>
    
            <img 
                className='w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-110' 
                src={CDN_URL+resData.info.cloudinaryImageId} 
                alt='Restaurant Image' 
            />
    
            <div className='p-4 flex flex-col justify-between h-[calc(100%-160px)]'>
    
                <div>
                    <h3 className='text-md font-bold text-gray-800 truncate'>{name}</h3>
                    <h4 className='text-sm text-gray-600 mt-1 line-clamp-2'>{cuisines.join(", ")}</h4>
                    <h4 className='text-sm font-semibold text-gray-800 mt-1'>{costForTwo}</h4>
                </div>
    
                <div className='flex justify-between items-center mt-2'>
                    <h4 className={`text-sm font-semibold ${avgRating < 4 ? 'text-red-500' : 'text-green-600'}`}>{avgRating} ⭐</h4>
                    <h4 className='text-sm text-gray-500'>⏱️ {deliveryTime} mins</h4>
                </div>
    
                <button className='w-full mt-4 bg-blue-500 text-white py-2 rounded-md 
                                   hover:bg-blue-600 transition-all duration-300 cursor-pointer 
                                   opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0'>
                    Order Now
                </button>
            </div>
        </div>
    );
    
}

export default RestCard;
 