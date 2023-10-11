import { useRef, useContext } from "react";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";
import DisplayForecast from "../components/DisplayForecast";
import GeoDenied from "../components/GeoDenied";
import Loading from "../components/Loading";

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
    fetchContext.setShowInputWeather(true);
  };

  return (
    <>
      <h1 className="headline">Geo-Location Weather Forecast</h1>
      <GeoInput
        handleSubmit={handleSubmit}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
      {fetchContext.geoDenied ? (
        <GeoDenied />
      ) : fetchContext.showInputWeather ? (
        fetchContext.loading ? (
          Loading()
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
