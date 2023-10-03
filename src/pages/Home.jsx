import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [geoLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const [weatherData, setWeatherData] = useState();
  const [iconUrl, setIconUrl] = useState();
  const [iconDescription, setIconDescription] = useState();
  const inputLatRef = useRef();
  const inputLonRef = useRef();

  const getLocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setGeoLocation({
          ...geoLocation,
          // lat: pos.coords.latitude,
          // lon: pos.coords.longitude,
          lat: inputLatRef.current.value,
          lon: inputLonRef.current.value,
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
        setIconDescription(weatherData.weather[0].description);
        setIconUrl(
          `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
        );
      });
  };

  useEffect(() => {
    try {
      getWeather();
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [geoLocation]);

  return (
    <div>
      <h1>Home Page</h1>
      <img src={iconUrl} alt="" />
      <p>{iconDescription}</p>
      <form onSubmit={getLocation}>
        <input type="text" placeholder="Latitude" ref={inputLatRef} />
        <input type="text" placeholder="Longitude" ref={inputLonRef} />
        <button type="submit">Location</button>
      </form>
      <p>
        {geoLocation.lat} {geoLocation.lon}
      </p>
    </div>
  );
};

export default Home;
