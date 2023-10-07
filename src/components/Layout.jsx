import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Shaderpopcorn's Weatherstation</h1>
        <div>
          <nav>
            <h2>- current weather -</h2>
            <ul className="current-list">
              <li>
                <Link to="/">Local</Link>
              </li>
              <li>
                <Link to="/geolocation">Geo-Location</Link>
              </li>
              <li>
                <Link to="/city">City</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2>- weather forecast -</h2>
            <ul className="forecast-list">
              <li>
                <Link to="/local-forecast">Local</Link>
              </li>
              <li>
                <Link to="/geolocation-forecast">Geo-Location</Link>
              </li>
              <li>
                <Link to="/city-forecast">City</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© by Shaderpopcorn</p>
      </footer>
    </div>
  );
};

export default Layout;
