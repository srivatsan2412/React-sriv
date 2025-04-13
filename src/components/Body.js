import { Link } from "react-router";
import RestaurantCard, { promotedRestuarantCard } from "./RestaurantCard";
import Schimmer from "./Schimmer";
import { useEffect, useState } from "react";
import useRestaurantList from "../Utils/useRestaurantList";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const allRestaurants = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);

  const RestaurantCardPromoted = promotedRestuarantCard(RestaurantCard);

  useEffect(() => {
    setRestaurantList(allRestaurants);
  }, [allRestaurants]);

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline, please check your internet connection!!!
      </h1>
    );
  }

  if (restaurantList.length === 0) {
    return (
      <div className="body">
        <div className="loading">
          <Schimmer />
        </div>
      </div>
    );
  }

  if (!restaurantList) {
    return;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 flex gap-4">
          <input
            type="text"
            placeholder="Search for restaurants and dishes"
            className="border border-solid border-black w-68 p-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-200 rounded-lg"
            onClick={() => {
              const filteredList = allRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex gap-4 m-4">
          <button
            className="px-4 bg-blue-300 rounded-lg"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              );
              setRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 bg-gray-300 rounded-lg"
            onClick={() => {
              setRestaurantList(allRestaurants);
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {restaurantList.map((restuarant) => {
          return (
            <Link
              key={restuarant.info.id}
              to={"/restaurants/" + restuarant.info.id}
            >
              {restuarant.info.avgRating >= 4.4 ? (
                <RestaurantCardPromoted resData={restuarant} />
              ) : (
                <RestaurantCard resData={restuarant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
