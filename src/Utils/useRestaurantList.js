import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching data from the API
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9019819&lng=77.6042056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  return allRestaurants;
};

export default useRestaurantList;
