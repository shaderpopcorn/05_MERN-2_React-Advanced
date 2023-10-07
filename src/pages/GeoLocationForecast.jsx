import { useRef, useContext } from "react";
import CardForecast from "../components/CardForecast";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";
import DisplayForecast from "../components/DisplayForecast";

const GeoLocationForecast = () => {
  const fetchContext = useContext(FetchContext);
  const inputLatRef = useRef();
  const inputLonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchContext.setGeoLocation({
          ...fetchContext.geoLocation,
          lat: inputLatRef.current.value,
          lon: inputLonRef.current.value,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <h1 className="headline">Geo-Location Weather Forecast</h1>
      <DisplayForecast fetchContext={fetchContext}>
        <GeoInput
          handleSubmit={handleSubmit}
          inputLatRef={inputLatRef}
          inputLonRef={inputLonRef}
        />
      </DisplayForecast>
    </>
  );
};

export default GeoLocationForecast;
