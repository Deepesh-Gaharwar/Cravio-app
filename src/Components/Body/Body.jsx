import React from 'react'
import RestCard from '../RestCard/RestCard'
import { useState } from 'react';
import resList from '../../utils/mockData'


const Body = () => {

  let [listOfRest,setListOfRest] = useState(resList);


  return (
    <div className='body'>

        <div className='filter p-[6px]'>
            <button 
                className='filter-btn m-[10px] cursor-pointer' 
                onClick={() => {
                  // filter logic here
                  const filteredList = listOfRest.filter((res) => res.stars > 4);
                  setListOfRest(filteredList);
                  
                  }}
                  >Top Rated Restaurant
            </button>
        </div>

        <div className='rest-container flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen'>
          
          {/* Restaurant card component*/}
          { listOfRest.map((res, index) => (
            <RestCard key={index} resData={res} />
            ))
          } 
          
          
        </div>
               
    </div>
  )
}

export default Body
