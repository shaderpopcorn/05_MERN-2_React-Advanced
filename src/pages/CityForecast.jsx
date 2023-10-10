import { useContext } from "react";
import CitySelect from "../components/CitySelect";
import FetchContext from "../context/fetch-context";
import DisplayForecast from "../components/DisplayForecast";
import Spinner from "../components/Spinner";

const CityForecast = () => {
  const fetchContext = useContext(FetchContext);

  const handleSelect = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "berlin":
        fetchContext.setGeoLocationForecast({
          ...fetchContext.geoLocation,
          lat: 52.520008,
          lon: 13.404954,
        });
        break;
      case "paris":
        fetchContext.setGeoLocationForecast({
          ...fetchContext.geoLocation,
          lat: 48.864716,
          lon: 2.349014,
        });
        break;
      case "london":
        fetchContext.setGeoLocationForecast({
          ...fetchContext.geoLocation,
          lat: 51.5085,
          lon: -0.1257,
        });
        break;
      case "newyork":
        fetchContext.setGeoLocationForecast({
          ...fetchContext.geoLocation,
          lat: 40.73061,
          lon: -73.935242,
        });
        break;
      case "shanghai":
        fetchContext.setGeoLocationForecast({
          ...fetchContext.geoLocation,
          lat: 31.224361,
          lon: 121.46917,
        });
        break;
      default:
        break;
    }
    fetchContext.setShowWeather(true);
  };

  return (
    <>
      <h1 className="headline">City Weather Forecast</h1>
      <CitySelect handleSelect={handleSelect} />
      {fetchContext.showWeather ? (
        fetchContext.spinner ? (
          Spinner()
        ) : (
          <DisplayForecast />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default CityForecast;
