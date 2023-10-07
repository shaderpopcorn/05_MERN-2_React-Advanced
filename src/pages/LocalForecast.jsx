import { useEffect, useContext } from "react";
import FetchContext from "../context/fetch-context";
import DisplayForecast from "../components/DisplayForecast";

const LocalForecast = () => {
  const fetchContext = useContext(FetchContext);
  console.log(fetchContext.forecastList);

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
      <h1 className="headline">Local Weather Forecast</h1>
      <DisplayForecast fetchContext={fetchContext} />
    </>
  );
};

export default LocalForecast;
