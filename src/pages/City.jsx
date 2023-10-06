import { useContext } from "react";
import Image from "../components/Image";
import CitySelect from "../components/CitySelect";
import FetchContext from "../context/fetch-context";

const City = () => {
  const fetchContext = useContext(FetchContext);

  const handleSelect = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        switch (e.target.value) {
          case "berlin":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 10,
              lon: 10,
            });
            break;
          case "paris":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 20,
              lon: 20,
            });
            break;
          case "london":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 30,
              lon: 30,
            });
            break;
          case "newyork":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 40,
              lon: 40,
            });
            break;
          case "shanghai":
            fetchContext.setGeoLocation({
              ...fetchContext.geoLocation,
              lat: 50,
              lon: 50,
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
    <div>
      <h1>City Weather</h1>
      <Image
        locationName={fetchContext.locationName}
        iconUrl={fetchContext.iconUrl}
        iconDescription={fetchContext.iconDescription}
      />
      <CitySelect handleSelect={handleSelect} />
      <p>
        {fetchContext.coords.lat} {fetchContext.coords.lon}
      </p>
    </div>
  );
};

export default City;
