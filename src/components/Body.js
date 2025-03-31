import RestaurantCard from "./RestaurantCard";
import { restList } from "../Utils/mockdata";
import { useState } from "react";

const restuarantLists = () => {
  let list = [];
  for (let i in restList) {
    list.push(restList[i].info);
  }
  return list;
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restuarantLists());
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.avgRating > 4.5
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="clear-all"
          onClick={() => {
            setRestaurantList(restuarantLists());
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restuarant) => {
          return <RestaurantCard key={restuarant.id} resData={restuarant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
