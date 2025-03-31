import { CDN_URL } from "../Utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={CDN_URL} alt="My image" />
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

export default Header;
