import React from "react";
import RestCard from "../RestCard/RestCard";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/constant";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
// import PromotedRestCards from '../PromotedRestCards.jsx/PromotedRestCards';

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]); // stores the actual data
  const [filteredRest, setFilteredRest] = useState([]); // stores filtered data

  const [searchText, setSearchText] = useState("");

  // const PromotedRest = PromotedRestCards(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL); 
      const json = await data.json();

      const cards = json?.data?.cards || [];

      const AllRestaurantsCards = cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      ); 

      const restaurants =
        AllRestaurantsCards?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRest(restaurants);
      setFilteredRest(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
      setListOfRest([]);
      setFilteredRest([]);
    }
  };

  // online status check

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Looks like you're offline !!!
        </h1>
        <h2 className="text-xl text-gray-700">
          Please check your internet connection
        </h2>
      </div>
    );
  }

  return listOfRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-wrap items-center justify-center gap-6 p-4 bg-white shadow-md rounded-lg">
        <div className="search flex items-center gap-2">
          <input
            type="text"
            data-testid = "searchInput"
            placeholder="search restaurants..."
            className="search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}

            
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const filteredRest = listOfRest.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRest(filteredRest);
              }
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-800 transition cursor-pointer"
            onClick={() => {
              if (searchText.trim() === '') {
                setFilteredRest(listOfRest); // reset to original
              } else {
                const filtered = listOfRest.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRest(filtered);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn m-[10px] cursor-pointer bg-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
          onClick={() => {

            
            const filteredList = listOfRest.filter(
              (res) => res?.info?.avgRating > 4.0
            );
            
            setFilteredRest(filteredList);
            
          }}
        >
          Top Rated Restaurants (4.0+)
        </button>
      </div>


      <div className="rest-container flex flex-wrap justify-center bg-[#FFFAF0] gap-6 p-6  min-h-screen"> 
        {/* Restaurant card component*/}
        {filteredRest.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}
          >
            
            {/*if the restaurant is promoted then add a promoted label to it   
                 
                   res.data.promoted ? <PromotedRest resData = {res} /> : <RestCard  resData={res} />
                  
                   */}

            <RestCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;