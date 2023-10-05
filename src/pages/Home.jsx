import { useState, useEffect, useRef } from "react";
import Image from "../components/Image";
import { FETCH_DATA } from "../data/fetch-result";

const Home = () => {
  const [geoLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const [weatherData, setWeatherData] = useState();
  const [iconUrl, setIconUrl] = useState();
  const [iconDescription, setIconDescription] = useState();

  const handlePageLoad = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setGeoLocation({
          ...geoLocation,
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const getWeather = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        geoLocation.lat
      }&lon=${geoLocation.lon}&appid=${import.meta.env.VITE_WEATHER_API}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setIconDescription(data.weather[0].description.toUpperCase());
        setIconUrl(data.weather[0].icon);
      });
  };

  const getFakeWeather = () => {
    setWeatherData(FETCH_DATA);
    setIconDescription(FETCH_DATA.weather[0].description.toUpperCase());
    setIconUrl(FETCH_DATA.weather[0].icon);
  };

  useEffect(() => {
    const onPageLoad = () => {
      handlePageLoad();
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    try {
      // getWeather();
      getFakeWeather();
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [geoLocation]);

  return (
    <div>
      <h1>Local Weather</h1>
      <Image iconUrl={iconUrl} iconDescription={iconDescription} />
      <p>
        {geoLocation.lat} {geoLocation.lon}
      </p>
    </div>
  );
};

export default Home;
