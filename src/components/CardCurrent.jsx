import { useContext } from "react";
import FetchContext from "../context/fetch-context";
import SwitchImage from "./SwitchImage";
import "./CardCurrent.css";

const CardCurrent = () => {
  const fetchContext = useContext(FetchContext);

  return (
    <div className="card-current">
      <div className="data-current">
        <p className="description-current">
          description: <span>{fetchContext.iconDescription.toUpperCase()}</span>
        </p>
        <p className="details-current">
          temperature:{" "}
          <span>{(fetchContext.temperature - 273.15).toFixed(1)}°C</span>
        </p>
      </div>
      <div className="image-current">
        <SwitchImage iconUrl={fetchContext.iconUrl} />
      </div>
    </div>
  );
};

export default CardCurrent;
