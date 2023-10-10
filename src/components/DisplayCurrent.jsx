import { useContext } from "react";
import FetchContext from "../context/fetch-context";
import CardCurrent from "./CardCurrent";

const DisplayCurrent = () => {
  const fetchContext = useContext(FetchContext);
  return (
    <>
      <h2 className="location">- {fetchContext.locationName} -</h2>
      <CardCurrent />
      <p className="coords">
        Latitude: {fetchContext.coords.lat} | Longitude:{" "}
        {fetchContext.coords.lon}
      </p>
    </>
  );
};

export default DisplayCurrent;
