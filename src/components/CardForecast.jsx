import SwitchImage from "./SwitchImage";
import "./CardForecast.css";

const CardForecast = ({ item }) => {
  return (
    <div className="card-forecast">
      <div className="data-forecast">
        <ul className="description-forecast">
          <li>description:</li>
          <li>temperature:</li>
          <li>date:</li>
          <li>time:</li>
        </ul>
        <ul className="details-forecast">
          <li>{item.weather[0].description.toUpperCase()}</li>
          <li>{(item.main.temp - 273.15).toFixed(1)}°C</li>
          <li>{item.dt_txt.slice(0, 10)}</li>
          <li>{item.dt_txt.slice(11)}</li>
        </ul>
      </div>
      <div className="image-forecast">
        <SwitchImage iconUrl={item.weather[0].icon} />
      </div>
    </div>
  );
};

export default CardForecast;
