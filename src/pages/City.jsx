import { useState, useEffect, useRef } from "react";
import Headline from "../components/Headline";
import Image from "../components/Image";
import CitySelect from "../components/CitySelect";
import { FETCH_DATA } from "../data/fetch-result";

const City = () => {
  const [geoLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });
  // const [weatherData, setWeatherData] = useState();
  const [iconUrl, setIconUrl] = useState();
  const [iconDescription, setIconDescription] = useState();

  const handleSelect = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        switch (e.target.value) {
          case "berlin":
            console.log("berlin");
            setGeoLocation({ ...geoLocation, lat: 10, lon: 10 });
            break;
          case "paris":
            setGeoLocation({ ...geoLocation, lat: 20, lon: 20 });
            break;
          case "london":
            setGeoLocation({ ...geoLocation, lat: 30, lon: 30 });
            break;
          case "newyork":
            setGeoLocation({ ...geoLocation, lat: 40, lon: 40 });
            break;
          case "shanghai":
            setGeoLocation({ ...geoLocation, lat: 50, lon: 50 });
            break;

          default:
            break;
        }
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

  const getFakeWeather = () => {
    // setWeatherData(FETCH_DATA);
    setIconDescription(FETCH_DATA.weather[0].description.toUpperCase());
    setIconUrl(FETCH_DATA.weather[0].icon);
  };

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
      <Headline name={FETCH_DATA.name} />
      <Image iconUrl={iconUrl} iconDescription={iconDescription} />
      <CitySelect handleSelect={handleSelect} />
      <p>
        {geoLocation.lat} {geoLocation.lon}
      </p>
    </div>
  );
};

export default City;
