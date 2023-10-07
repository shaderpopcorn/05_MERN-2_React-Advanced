import { useState, useEffect, useCallback, memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FETCH_DATA } from "./data/fetch-result";
import FetchContext from "./context/fetch-context";
import Layout from "./components/Layout";
import GeoLocation from "./pages/GeoLocation";
import GeoLocationForecast from "./pages/GeoLocationForecast";
import City from "./pages/City";
import CityForecast from "./pages/CityForecast";
import Local from "./pages/Local";
import LocalForecast from "./pages/LocalForecast";
import "./App.css";

function App() {
  const [geoLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const [locationName, setLocationName] = useState("");
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [iconUrl, setIconUrl] = useState("");
  const [iconDescription, setIconDescription] = useState("");
  const [forecastList, setForecastList] = useState([]);

  const getWeather = useCallback(async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        geoLocation.lat
      }&lon=${geoLocation.lon}&appid=${import.meta.env.VITE_WEATHER_API}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoords(data.coord);
        setLocationName(data.name);
        setIconUrl(data.weather[0].icon);
        setIconDescription(data.weather[0].description);
      });
  }, []);

  const getFakeWeather = () => {
    setCoords(FETCH_DATA.coord);
    setLocationName(FETCH_DATA.name);
    setIconUrl(FETCH_DATA.weather[0].icon);
    setIconDescription(FETCH_DATA.weather[0].description);
  };

  const getForecast = useCallback(async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        geoLocation.lat
      }&lon=${geoLocation.lon}&appid=${import.meta.env.VITE_WEATHER_API}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoords(data.city.coord);
        setLocationName(data.city.name);
        setForecastList(data.list);
      });
  }, [geoLocation]);

  useEffect(() => {
    try {
      // getWeather();
      // getFakeWeather();
      getForecast();
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [geoLocation]);

  const fetchContext = {
    setGeoLocation: setGeoLocation,
    geoLocation: geoLocation,
    coords: coords,
    locationName: locationName,
    iconUrl: iconUrl,
    iconDescription: iconDescription,
    forecastList: forecastList,
  };

  return (
    <>
      <FetchContext.Provider value={fetchContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Local />} />
              <Route path="/geolocation" element={<GeoLocation />} />
              <Route path="/city" element={<City />} />
              <Route path="/local-forecast" element={<LocalForecast />} />
              <Route
                path="/geolocation-forecast"
                element={<GeoLocationForecast />}
              />
              <Route path="/city-forecast" element={<CityForecast />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FetchContext.Provider>
    </>
  );
}

export default App;
