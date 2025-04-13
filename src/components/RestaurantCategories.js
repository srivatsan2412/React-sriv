import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const handleClick = () => {
    console.log("showIndex", showIndex);
    if (showIndex) {
      return setShowIndex(null);
    }
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 items-center bg-gray-50 p-4 rounded-lg shadow-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showIndex && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
