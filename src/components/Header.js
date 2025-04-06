import { Link } from "react-router";
import { CDN_URL } from "../Utils/constants";
import { useState } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="logo" src={CDN_URL} alt="My image" />
      </div>
      <div className="nav-items">
        <ul>
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
          <li>🛒 Cart</li>
          <li>
            <Link to="/grocery">🛒 Grocery</Link>
          </li>
          <button
            className="login btn btn-primary"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName === "Login" ? "🔓 Login" : "🔒 Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
