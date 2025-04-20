import { Link } from "react-router-dom";
import { CDN_URL } from "../Utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items)
  
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-4">
      <div>
        <img className="w-56" src={CDN_URL} alt="My image" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-8">
          <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">🏠 Home</Link>
          </li>
          <li>
            <Link to="/about">ℹ️ About</Link>
          </li>
          <li>
            <Link to="/contact">📞 Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">🛒 ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/grocery">🛒 Grocery</Link>
          </li>
          <button
            className="login btn btn-primary cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName === "Login" ? "🔓 Login" : "🔒 Logout"}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
