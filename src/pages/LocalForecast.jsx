import { useContext } from "react";
import DisplayForecast from "../components/DisplayForecast";
import FetchContext from "../context/fetch-context";
import GeoDenied from "../components/GeoDenied";
import Loading from "../components/Loading";

const LocalForecast = () => {
  const fetchContext = useContext(FetchContext);
  return (
    <>
      <h1 className="headline">Local Weather Forecast</h1>
      {fetchContext.geoDenied ? (
        <GeoDenied />
      ) : !fetchContext.showLocalWeather ? (
        <Loading />
      ) : (
        <DisplayForecast />
      )}
    </>
  );
};

export default LocalForecast;
