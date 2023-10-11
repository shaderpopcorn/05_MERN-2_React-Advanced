import { useContext } from "react";
import DisplayCurrent from "../components/DisplayCurrent";
import FetchContext from "../context/fetch-context";
import GeoDenied from "../components/GeoDenied";
import Loading from "../components/Loading";

const Local = () => {
  const fetchContext = useContext(FetchContext);
  return (
    <>
      <h1 className="headline">Local Weather</h1>
      {fetchContext.geoDenied ? (
        <GeoDenied />
      ) : !fetchContext.showLocalWeather ? (
        <Loading />
      ) : (
        <DisplayCurrent />
      )}
    </>
  );
};

export default Local;
