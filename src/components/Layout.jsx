import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <h1>Shaderpopcorn's Weatherstation</h1>
      <div className="nav-container">
        <nav className="current">
          <h2>current weather</h2>
          <ul>
            <li>
              <Link to="/">Local</Link>
            </li>
            <li>
              <Link to="/geolocation">GeoLocation</Link>
            </li>
            <li>
              <Link to="/city">City</Link>
            </li>
          </ul>
        </nav>
        <nav className="forecast">
          <h2>weather forecast</h2>
          <ul>
            <li>
              <Link to="/">Local</Link>
            </li>
            <li>
              <Link to="/geolocation">GeoLocation</Link>
            </li>
            <li>
              <Link to="/city">City</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
