import { useRef, useContext } from "react";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";
import DisplayCurrent from "../components/DisplayCurrent";
import Spinner from "../components/Spinner";

const GeoLocation = () => {
  const fetchContext = useContext(FetchContext);
  const inputLatRef = useRef();
  const inputLonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchContext.setGeoLocationCurrent({
      ...fetchContext.geoLocation,
      lat: inputLatRef.current.value,
      lon: inputLonRef.current.value,
    });
    fetchContext.setShowWeather(true);
  };

  return (
    <>
      <h1 className="headline">Weather at Geolocation</h1>
      <GeoInput
        handleSubmit={handleSubmit}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
      {fetchContext.showWeather ? (
        fetchContext.spinner ? (
          Spinner()
        ) : (
          <DisplayCurrent />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default GeoLocation;
