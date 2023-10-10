import SwitchImage from "./SwitchImage";
import "./GeoDenied.css";

const GeoDenied = () => {
  return (
    <div className="card-geoDenied">
      <div className="data-geoDenied">
        <p className="description-geoDenied">GeoDenied...</p>
      </div>
      <div className="image-geoDenied">
        <SwitchImage iconUrl={"geoDenied"} />
      </div>
    </div>
  );
};

export default GeoDenied;
