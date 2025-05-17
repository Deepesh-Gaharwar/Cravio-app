import React from "react";
import { useParams } from "react-router-dom";
import useRestMenuPage from "../utils/useRestMenuPage";
import RestCategory from "../Components/RestCategory/RestCategory";
import ShimmerMenu from "./ShimmerMenu/ShimmerMenu";

const RestMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestMenuPage(resId); // custom hook for fetching the data


  // Early loading state

  if (!resInfo || !resInfo.cards || resInfo.cards.length === 0) {
    return <ShimmerMenu />;
  }
   
  const infoCard = resInfo.cards.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;  


  const name = infoCard?.name || "Restaurant";
  const cuisines = infoCard?.cuisines || [];
  const costForTwoMessage = infoCard?.costForTwoMessage || "";

  
  const regularCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = regularCards.filter(
    (item) => item?.card?.card?.itemCards
  ); 

  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#f9f9f9] min-h-screen rounded">
      {/* Header */}
      <div className="mb-4 border-b pb-2 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-1">{name}</h1>
        <h3 className="text-lg text-gray-600">{cuisines.join(", ")}</h3>
        <h3 className="text-md text-gray-500 italic">{costForTwoMessage}</h3>
      </div>

      {/* Menu */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Menu
      </h2>

      {/* Categories Accordion */}
      <div>
        <RestCategory data={itemCards || []} />
      </div>
    </div>
  );
};

export default RestMenuPage;