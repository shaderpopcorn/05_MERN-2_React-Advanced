import { useState, useEffect, useRef } from "react";
import Image from "../components/Image";
import GeoInput from "../components/GeoInput";

const Home = () => {
  const [geoLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });
  // const [weatherData, setWeatherData] = useState();
  const [iconUrl, setIconUrl] = useState();
  const [iconDescription, setIconDescription] = useState();
  const inputLatRef = useRef();
  const inputLonRef = useRef();

  const getInputLocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setGeoLocation({
          ...geoLocation,
          lat: inputLatRef.current.value,
          lon: inputLonRef.current.value,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const getLocalLocation = () => {
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
        // setWeatherData(data);
        setIconDescription(data.weather[0].description.toUpperCase());
        setIconUrl(data.weather[0].icon);
      });
  };

  useEffect(() => {
    const onPageLoad = () => {
      getLocalLocation();
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
      getWeather();
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [geoLocation]);

  return (
    <div>
      <h1>Local Weather</h1>
      <Image iconUrl={iconUrl} iconDescription={iconDescription} />
      <GeoInput
        getInputLocation={getInputLocation}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
      <p>
        {geoLocation.lat} {geoLocation.lon}
      </p>
    </div>
  );
};

export default Home;
