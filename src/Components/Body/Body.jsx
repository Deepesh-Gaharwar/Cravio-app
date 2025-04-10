import React from 'react'
import RestCard from '../RestCard/RestCard'
import { useState,useEffect} from 'react';
// import resList from '../../utils/mockData'
import { API_URL } from '../../utils/constant';
import Shimmer from '../Shimmer/Shimmer';
import { Link } from 'react-router-dom';


const Body = () => {

  const [listOfRest,setListOfRest] = useState([]);  // stores the actual data
  const [filteredRest,setFilteredRest] = useState([]); // stores filtered data
  
  const [searchText,setSearchText] = useState("");

 
// we have to remove this after learning and exploring things out

 useEffect(() => {
  console.log("useEffect is called");
  fetchData(); 

 }, [] );

 const fetchData =async () => {
  const data = await fetch(API_URL) ; // api url 

  const json = await data.json(); 

  setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
  setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

 };



// loader screen load => this will be seen before the actual page loads 
// if(listOfRest.length == 0){ // conditional  rendering
//   return <Shimmer /> 
// }
 
  return listOfRest == 0 ?  <Shimmer /> :
    (
    <div className='body'>

        <div className='filter flex flex-wrap items-center justify-center gap-6 p-4 bg-white shadow-md rounded-lg'>
          <div className='search flex items-center gap-2'>
              <input type='text' 
                  placeholder='search restaurants...'
                  className='search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
                  
                  value={searchText}
                  onChange={(e) => {
                     setSearchText(e.target.value);
                  }}
              />
            <button 
               className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-800 transition cursor-pointer'

               // filter the restaurant cards and update the ui
               onClick={ () => {
                  
              const filteredRest =  listOfRest.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())) ;

                setFilteredRest(filteredRest);

               }}
            >
              Search
            </button>
          </div>
            <button 
                className='filter-btn m-[10px] cursor-pointer bg-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200' 

                onClick={() => {
                  // filter logic here
                  const filteredList = listOfRest.filter((res) => res?.info?.avgRating > 4);
                  setFilteredRest(filteredList);
                   
                  }}
            >Top Rated Restaurant
            </button>

        </div>

        <div className='rest-container flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen'>
          
          {/* Restaurant card component*/}
          { filteredRest.map((res) => (
           <Link key={res.info.id}  to={"/restaurants/" + res.info.id}> <RestCard  resData={res} />   </Link> 
            ))
          } 
          
          
        </div>
               
    </div>
  )
}

export default Body
