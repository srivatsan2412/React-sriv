import { useEffect, useState } from "react";
import Schimmer from "./Schimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRestInfo(json.data.cards[2].card.card.info);
    setMenuItems(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  if (!restInfo) {
    return <Schimmer />;
  }

  console.log(restInfo);

  return (
    <div className="menu">
      <h1>{restInfo.name}</h1>
      <h4>City - {restInfo.city}</h4>
      <h4>cuisines - {restInfo.cuisines.join(", ")}</h4>
      <h4>Delivery Time - {restInfo.sla.deliveryTime} mins</h4>
      <h4>Cost for Two - {restInfo.costForTwoMessage}</h4>
      <h4>Menu:</h4>
      {!menuItems ? (
        <h3>Menu not available</h3>
      ) : (
        <ul>
          {menuItems?.map((item) => {
            return (
              <li key={item.card.info.id}>
                <h4>{item.card.info.name}</h4>
                <h5>
                  Price -{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}{" "}
                  ₹
                </h5>
                <h5>{item.card.info.description}</h5>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
