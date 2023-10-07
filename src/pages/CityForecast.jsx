import { useContext } from "react";
import CardForecast from "../components/CardForecast";
import CitySelect from "../components/CitySelect";
import FetchContext from "../context/fetch-context";
import DisplayForecast from "../components/DisplayForecast";

const CityForecast = () => {
  const fetchContext = useContext(FetchContext);

  const handleSelect = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        switch (e.target.value) {
          case "berlin":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 52.520008,
              lon: 13.404954,
            });
            break;
          case "paris":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 48.864716,
              lon: 2.349014,
            });
            break;
          case "london":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 51.5085,
              lon: -0.1257,
            });
            break;
          case "newyork":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 40.73061,
              lon: -73.935242,
            });
            break;
          case "shanghai":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 31.224361,
              lon: 121.46917,
            });
            break;

          default:
            break;
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <h1 className="headline">City Weather Forecast</h1>
      <DisplayForecast fetchContext={fetchContext}>
        <CitySelect handleSelect={handleSelect} />
      </DisplayForecast>
    </>
  );
};

export default CityForecast;
