import { useRef, useContext } from "react";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";
import DisplayCurrent from "../components/DisplayCurrent";
import Loading from "../components/Loading";

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
    fetchContext.setShowInputWeather(true);
  };

  return (
    <>
      <h1 className="headline">Weather at Geolocation</h1>
      <GeoInput
        handleSubmit={handleSubmit}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
      {fetchContext.showInputWeather ? (
        fetchContext.loading ? (
          Loading()
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
