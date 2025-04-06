import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Schimmer from "./Schimmer";
import { useEffect, useState } from "react";
import useRestaurantList from "../Utils/useRestaurantList";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const allRestaurants = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);

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
        <div className="filter">
          <button className="filter-btn">Top Rated Restaurants</button>
          <button>Clear Filter</button>
        </div>
        <div className="loading">
          <Schimmer />
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants and dishes"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn btn btn-primary"
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
        <button
          className="filter-btn btn btn-primary"
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
          className="clear-all btn btn-secondary"
          onClick={() => {
            setRestaurantList(allRestaurants);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restuarant) => {
          return (
            <Link
              key={restuarant.info.id}
              to={"/restaurants/" + restuarant.info.id}
            >
              <RestaurantCard resData={restuarant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
