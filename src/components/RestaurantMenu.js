import Schimmer from "./Schimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restInfo, menuItems, categories } = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null);

  if (!restInfo) {
    return <Schimmer />;
  }

  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restInfo.name}</h1>
      <h4>
        {restInfo.cuisines.join(", ")} - {restInfo.costForTwoMessage}
      </h4>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={category.card.card}
            showIndex={showIndex === index}
            setShowIndex={(val) =>
              val === null ? setShowIndex(val) : setShowIndex(index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
