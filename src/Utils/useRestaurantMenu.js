import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_URL}${restaurantId}`);
    const json = await data.json();
    console.log(json);
    setRestInfo(json.data.cards[2].card.card.info);
    setMenuItems(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  return {
    restInfo,
    menuItems,
  };
};

export default useRestaurantMenu;
