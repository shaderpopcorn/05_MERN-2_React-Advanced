import SwitchImage from "./SwitchImage";
import "./CardForecast.css";

const CardForecast = ({
  iconUrl,
  iconDescription,
  temperature,
  date,
  time,
}) => {
  return (
    <div className="card">
      <div className="data">
        <ul className="description">
          <li>description:</li>
          <li>temperature:</li>
          <li>date:</li>
          <li>time:</li>
        </ul>
        <ul className="details">
          <li>{iconDescription}</li>
          <li>{temperature}°C</li>
          <li>{date}</li>
          <li>{time}</li>
        </ul>
      </div>
      <div className="image">
        <SwitchImage iconUrl={iconUrl} />
      </div>
    </div>
  );
};

export default CardForecast;
