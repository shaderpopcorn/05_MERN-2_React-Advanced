import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FETCH_DATA } from "./data/fetch-result";
import FetchContext from "./context/fetch-context";
import Layout from "./components/Layout";
import GeoLocation from "./pages/GeoLocation";
import City from "./pages/City";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [geoLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const [locationName, setLocationName] = useState();
  const [iconUrl, setIconUrl] = useState();
  const [iconDescription, setIconDescription] = useState();
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

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
  }, [geoLocation]);

  const getFakeWeather = () => {
    setCoords(FETCH_DATA.coord);
    setLocationName(FETCH_DATA.name);
    setIconUrl(FETCH_DATA.weather[0].icon);
    setIconDescription(FETCH_DATA.weather[0].description);
  };

  useEffect(() => {
    try {
      // getWeather();
      getFakeWeather();
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
  };
  console.log(coords);

  return (
    <>
      <FetchContext.Provider value={fetchContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/city" element={<City />} />
              <Route path="/geolocation" element={<GeoLocation />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FetchContext.Provider>
    </>
  );
}

export default App;
