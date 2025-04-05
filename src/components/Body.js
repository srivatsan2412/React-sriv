import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Schimmer from "./Schimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9019819&lng=77.6042056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
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
