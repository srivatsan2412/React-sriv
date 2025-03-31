import React from "react";
import ReactDOM from "react-dom/client";
import { restList } from "./const";

/*
* Header
  - Logo
  - Nav Items
* Body
    - Search
    - Restaurant Container
        - Restaurant Card
            - Image
            - Name
            - Rating
            - Cuisines
            - Delivery Time
 * footer
            - Copyright
            - Links
            - Contact
            - Address
            - Social Media
            - Privacy Policy
            - Terms of Service
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png"
          alt="My image"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      ></img>
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const restuarantLists = () => {
  let list = [];
  for (let i in restList) {
    list.push(restList[i].info);
  }
  return list;
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="restaurant-container">
        {restuarantLists().map((restuarant) => {
          return <RestaurantCard key={restuarant.id} resData={restuarant} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
