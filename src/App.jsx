import { useState, useEffect, useCallback } from "react";
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
  const [spinner, setSpinner] = useState(false);
  const [geoLocationCurrent, setGeoLocationCurrent] = useState({
    lat: 0,
    lon: 0,
  });
  const [geoLocationForecast, setGeoLocationForecast] = useState({
    lat: 0,
    lon: 0,
  });
  const [locationName, setLocationName] = useState("");
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [iconUrl, setIconUrl] = useState("");
  const [iconDescription, setIconDescription] = useState("");
  const [forecastList, setForecastList] = useState([]);
  const [showWeather, setShowWeather] = useState(true);

  const handleLocalWeatherCurrent = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setGeoLocationCurrent({
      ...geoLocationCurrent,
      lon: pos.coords.longitude,
      lat: pos.coords.latitude,
    });
  };

  useEffect(() => {
    handleLocalWeatherCurrent();
  }, []);

  const handleLocalWeatherForecast = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setGeoLocationForecast({
      ...geoLocationForecast,
      lon: pos.coords.longitude,
      lat: pos.coords.latitude,
    });
  };

  const getCurrentWeather = useCallback(
    async (geoLocationCurrent) => {
      setSpinner(true);
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          geoLocationCurrent.lat
        }&lon=${geoLocationCurrent.lon}&appid=${
          import.meta.env.VITE_WEATHER_API
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setCoords(data.coord);
          setLocationName(data.name);
          setIconUrl(data.weather[0].icon);
          setIconDescription(data.weather[0].description);
          setSpinner(false);
        });
    },
    [geoLocationCurrent]
  );

  // const getFakeWeather = () => {
  //   setCoords(FETCH_DATA.coord);
  //   setLocationName(FETCH_DATA.name);
  //   setIconUrl(FETCH_DATA.weather[0].icon);
  //   setIconDescription(FETCH_DATA.weather[0].description);
  // };

  const getForecastWeather = useCallback(async (geoLocationForecast) => {
    setSpinner(true);
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        geoLocationForecast.lat
      }&lon=${geoLocationForecast.lon}&appid=${
        import.meta.env.VITE_WEATHER_API
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoords(data.city.coord);
        setLocationName(data.city.name);
        setForecastList(data.list);
        setSpinner(false);
      });
  }, []);

  useEffect(() => {
    try {
      getCurrentWeather(geoLocationCurrent);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [geoLocationCurrent]);

  useEffect(() => {
    try {
      getForecastWeather(geoLocationForecast);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [geoLocationForecast]);

  const fetchContext = {
    spinner: spinner,
    setShowWeather: setShowWeather,
    showWeather: showWeather,
    setGeoLocationCurrent: setGeoLocationCurrent,
    geoLocationCurrent: geoLocationCurrent,
    setGeoLocationForecast: setGeoLocationForecast,
    geoLocationForecast: geoLocationForecast,
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
            <Route
              path="/"
              element={
                <Layout
                  handleLocalWeatherCurrent={handleLocalWeatherCurrent}
                  handleLocalWeatherForecast={handleLocalWeatherForecast}
                />
              }
            >
              <Route path="/" element={<Local />} />
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
