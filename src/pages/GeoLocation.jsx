import { useRef, useContext } from "react";
import Image from "../components/Image";
import GeoInput from "../components/GeoInput";
import FetchContext from "../context/fetch-context";

const GeoLocation = () => {
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
    <div>
      <h1>Geolocation Weather</h1>
      <Image
        locationName={fetchContext.locationName}
        iconUrl={fetchContext.iconUrl}
        iconDescription={fetchContext.iconDescription}
      />
      <GeoInput
        handleSubmit={handleSubmit}
        inputLatRef={inputLatRef}
        inputLonRef={inputLonRef}
      />
      <p>
        {fetchContext.coords.lat} {fetchContext.coords.lon}
      </p>
    </div>
  );
};

export default GeoLocation;
