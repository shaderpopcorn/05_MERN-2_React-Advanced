import { useEffect, useContext } from "react";
import Image from "../components/Image";
import FetchContext from "../context/fetch-context";

const Home = () => {
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
    <div>
      <h1>Local Weather</h1>
      <Image
        locationName={fetchContext.locationName}
        iconUrl={fetchContext.iconUrl}
        iconDescription={fetchContext.iconDescription}
      />
      <p>
        {fetchContext.coords.lat} {fetchContext.coords.lon}
      </p>
    </div>
  );
};

export default Home;
