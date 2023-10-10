import { useRef, useContext } from "react";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";
import DisplayForecast from "../components/DisplayForecast";
import Spinner from "../components/Spinner";

const GeoLocationForecast = () => {
  const fetchContext = useContext(FetchContext);
  const inputLatRef = useRef();
  const inputLonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchContext.setGeoLocationForecast({
      ...fetchContext.geoLocationForecast,
      lat: inputLatRef.current.value,
      lon: inputLonRef.current.value,
    });
    fetchContext.setShowWeather(true);
  };

  return (
    <>
      <h1 className="headline">Geo-Location Weather Forecast</h1>
      <GeoInput
        handleSubmit={handleSubmit}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
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

export default GeoLocationForecast;
