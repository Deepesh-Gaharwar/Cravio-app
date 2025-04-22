import React from "react";
// import Shimmer from "../Components/Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestMenuPage from "../utils/useRestMenuPage";
import RestCategory from "../Components/RestCategory/RestCategory";
import ShimmerMenu from "./ShimmerMenu/ShimmerMenu";

const RestMenuPage = () => {
  const { resId } = useParams();

  const resInfo = useRestMenuPage(resId); // custome hook for fetching the data

  if (!resInfo) {
    return <ShimmerMenu /> ;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // const {itemCards} = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

  const allCards = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards;

  const itemCards = allCards.filter((item) => item?.card?.card?.itemCards);


  return (
    
    <div className="p-6 max-w-6xl mx-auto bg-[#f9f9f9] min-h-screen rounded">
      {/* Header */}
      <div className="mb-4 border-b pb-2 text-center">
  <h1 className="text-4xl font-extrabold text-gray-800 mb-1">{name}</h1>
  <h3 className="text-lg text-gray-600">{cuisines?.join(", ")}</h3>
  <h3 className="text-md text-gray-500 italic">{costForTwoMessage}</h3>
</div>

      {/* Menu */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
  Menu
</h2>

      {/* Categories  Acordian */}

      <div className="">
        
           <RestCategory data={itemCards} />
        
      </div>
    </div>
  );
};

export default RestMenuPage;
