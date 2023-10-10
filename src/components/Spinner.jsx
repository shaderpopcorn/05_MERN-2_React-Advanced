import SwitchImage from "./SwitchImage";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="card-spinner">
      <div className="data-spinner">
        <p className="description-spinner">Loading...</p>
      </div>
      <div className="image-spinner">
        <SwitchImage iconUrl={"loading"} />
      </div>
    </div>
  );
};

export default Spinner;
