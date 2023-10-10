import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import FetchContext from "../context/fetch-context";
import "./Layout.css";

const Layout = ({ handleLocalWeatherCurrent, handleLocalWeatherForecast }) => {
  const fetchContext = useContext(FetchContext);
  return (
    <div>
      <header>
        <h1>Shaderpopcorn's Weatherstation</h1>
        <div>
          <nav>
            <h2>- current weather -</h2>
            <ul className="current-list">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    handleLocalWeatherCurrent();
                  }}
                >
                  Local
                </Link>
              </li>
              <li>
                <Link
                  to="/geolocation"
                  onClick={() => {
                    fetchContext.setShowInputWeather(false);
                  }}
                >
                  Geo-Location
                </Link>
              </li>
              <li>
                <Link
                  to="/city"
                  onClick={() => {
                    fetchContext.setShowInputWeather(false);
                  }}
                >
                  City
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2>- weather forecast -</h2>
            <ul className="forecast-list">
              <li>
                <Link
                  to="/local-forecast"
                  onClick={() => {
                    handleLocalWeatherForecast();
                  }}
                >
                  Local
                </Link>
              </li>
              <li>
                <Link
                  to="/geolocation-forecast"
                  onClick={() => {
                    fetchContext.setShowInputWeather(false);
                  }}
                >
                  Geo-Location
                </Link>
              </li>
              <li>
                <Link
                  to="/city-forecast"
                  onClick={() => {
                    fetchContext.setShowInputWeather(false);
                  }}
                >
                  City
                </Link>
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
