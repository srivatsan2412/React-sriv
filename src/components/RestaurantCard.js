import { LOGO_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const restuarantData = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={LOGO_URL + restuarantData.cloudinaryImageId}
      ></img>
      <h3>{restuarantData.name}</h3>
      <h4>{restuarantData.cuisines?.join(", ")}</h4>
      <h4>{restuarantData.avgRating} stars</h4>
      <h4>{restuarantData.costForTwo}</h4>
      <h4>{restuarantData.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
