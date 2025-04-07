import React from 'react';

const RestCard = ({ resData }) => {
    const { resName, image, cuisines, stars, deliveryTime } = resData; // destructuring / optional chanioning if possible in resData

    return (
        <div className='group rest-card w-[220px] h-[350px] m-[5px] bg-[#f0f0f0] rounded-lg shadow-lg overflow-hidden 
                        transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl'>

            <img 
                className='w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-110' 
                src={image} 
                alt='Restaurant Image' 
            />

            <div className='p-4'>

                <h3 className='text-lg font-bold text-gray-800'>{resName}</h3>

                <h4 className='text-sm text-gray-600 mt-1'>{cuisines}</h4>

                <div className='flex items-center justify-between mt-2'>
                    <h4 className='text-sm text-green-600 font-semibold'>⭐ {stars}</h4>
                    <h4 className='text-sm text-gray-500'>⏱️ {deliveryTime}</h4>
                </div>

                {/* Button with smooth hover effect */}
                <button className='w-full mt-4 bg-blue-500 text-white py-2 rounded-md 
                                   hover:bg-blue-600 transition-all duration-300 cursor-pointer 
                                   opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'>
                    Order Now
                </button>

            </div>
        </div>
    );
}

export default RestCard;
 