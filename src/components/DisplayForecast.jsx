import { useContext } from "react";
import FetchContext from "../context/fetch-context";
import CardForecast from "./CardForecast";

const DisplayForecast = () => {
  const fetchContext = useContext(FetchContext);
  return (
    <>
      <h2 className="location">- {fetchContext.locationName} -</h2>
      <ul>
        {fetchContext.forecastList.map((item, index) => {
          return (
            <li key={index}>
              <CardForecast item={item} />
            </li>
          );
        })}
      </ul>
      <p className="coords">
        Latitude: {fetchContext.coords.lat} | Longitude:{" "}
        {fetchContext.coords.lon}
      </p>
    </>
  );
};

export default DisplayForecast;
