import SwitchImage from "./SwitchImage";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="card-loading">
      <div className="data-loading">
        <p className="description-loading">Loading...</p>
      </div>
      <div className="image-loading">
        <SwitchImage iconUrl={"loading"} />
      </div>
    </div>
  );
};

export default Loading;
