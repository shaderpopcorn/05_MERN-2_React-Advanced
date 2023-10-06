import SwitchImage from "./SwitchImage";
import "./ImageCurrent.css";

const ImageCurrent = ({ locationName, iconUrl, iconDescription }) => {
  return (
    <div className="image">
      <h3 className="location">- {locationName} -</h3>
      <SwitchImage iconUrl={iconUrl} />
      <h3 className="description">{iconDescription}</h3>
    </div>
  );
};

export default ImageCurrent;
