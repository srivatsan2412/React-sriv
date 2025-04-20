import { LOGO_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const restuarantData = resData.info;
  return (
    <div data-testid="rest-card" className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-amber-100">
      <img
        className="rounded-md"
        src={LOGO_URL + restuarantData.cloudinaryImageId}
      ></img>
      <h3 className="font-bold pt-4 text-lg">{restuarantData.name}</h3>
      <h4>{restuarantData.cuisines?.join(", ")}</h4>
      <h4>{restuarantData.avgRating} stars</h4>
      <h4>{restuarantData.costForTwo}</h4>
      <h4>{restuarantData.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export const promotedRestuarantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute left-8 bg-black text-white px-4">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
