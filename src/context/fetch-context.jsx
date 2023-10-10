import { createContext } from "react";

const FetchContext = createContext({
  spinner: false,
  setShowWeather: () => {},
  showWeather: false,
  setGeoLocationCurrent: () => {},
  geoLocationCurrent: "",
  setGeoLocationForecast: () => {},
  geoLocationForecast: "",
  coords: { lat: 0, lon: 0 },
  locationName: "",
  iconUrl: "",
  iconDescription: "",
  forecastList: [],
});

export default FetchContext;
