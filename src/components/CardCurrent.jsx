import SwitchImage from "./SwitchImage";
import "./CardCurrent.css";

const CardCurrent = ({ locationName, iconUrl, iconDescription }) => {
  return (
    <div className="image-current">
      <h3 className="location-current">- {locationName} -</h3>
      <SwitchImage iconUrl={iconUrl} />
      <h3 className="description-current">{iconDescription}</h3>
    </div>
  );
};

export default CardCurrent;
