import { useRef, useContext } from "react";
import ImageCurrent from "../components/ImageCurrent";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";

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
      <h1 className="headline">Weather at Geolocation</h1>
      <GeoInput
        handleSubmit={handleSubmit}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
      <ImageCurrent
        locationName={fetchContext.locationName}
        iconUrl={fetchContext.iconUrl}
        iconDescription={fetchContext.iconDescription}
      />
      <p className="coords">
        Latitude: {fetchContext.coords.lat} | Longitude:{" "}
        {fetchContext.coords.lon}
      </p>
    </>
  );
};

export default GeoLocationForecast;
