import { useEffect, useContext } from "react";
import ImageCurrent from "../components/ImageCurrent";
import FetchContext from "../context/fetch-context";

const LocalForecast = () => {
  const fetchContext = useContext(FetchContext);

  const handlePageLoad = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchContext.setGeoLocation({
          ...fetchContext.geoLocation,
          lon: pos.coords.longitude,
          lat: pos.coords.latitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const onPageLoad = () => {
      handlePageLoad();
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <h1 className="headline">Local Weather</h1>
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

export default LocalForecast;
