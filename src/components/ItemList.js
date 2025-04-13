import { useDispatch } from "react-redux";
import { LOGO_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch action to add item to cart
    console.log("dispatch called");
    dispatch(addItem(item))
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="border-gray-400 border-b-1 p-2 text-left flex justify-between"
          >
            <div className="px-2 w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 flex flex-col">
              <img
                className="rounded-lg"
                src={LOGO_URL + item.card.info.imageId}
                alt="food"
              />
              <button onClick={() => handleAddItem(item)} className="p-2 bg-black text-white rounded-s shadow-lg absolute">
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
