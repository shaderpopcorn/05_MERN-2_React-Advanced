import CardForecast from "./CardForecast";
import "./DisplayForecast.css";

const DisplayForecast = ({ fetchContext, children }) => {
  return (
    <>
      {children}
      <h2 className="location">- {fetchContext.locationName} -</h2>
      <ul>
        {fetchContext.forecastList.map((item, index) => {
          return (
            <li key={index}>
              <CardForecast
                iconUrl={item.weather[0].icon}
                iconDescription={item.weather[0].description.toUpperCase()}
                temperature={(item.main.temp - 273.15).toFixed(1)}
                date={item.dt_txt.slice(0, 10)}
                time={item.dt_txt.slice(11)}
              />
            </li>
          );
        })}
      </ul>
      <p className="coords">
        Latitude: {fetchContext.coords.lat} | Longitude:{" "}
        {fetchContext.coords.lon}
      </p>
    </>
  );
};

export default DisplayForecast;
