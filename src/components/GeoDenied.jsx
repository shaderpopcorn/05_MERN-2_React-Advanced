import SwitchImage from "./SwitchImage";
import "./GeoDenied.css";

const GeoDenied = () => {
  return (
    <div className="card-geoDenied">
      <div className="data-geoDenied">
        <p className="description-geoDenied">Location access denied!</p>
        <hr className="description-line" />
        <p className="description-details">
          For a good user experience on this website, <br />
          please reload the page and allow the browser <br />
          to use your location.
        </p>
      </div>
      <div className="image-geoDenied">
        <SwitchImage iconUrl={"geoDenied"} />
      </div>
    </div>
  );
};

export default GeoDenied;
