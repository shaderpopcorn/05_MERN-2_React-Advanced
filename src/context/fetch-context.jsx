import { createContext } from "react";

const FetchContext = createContext({
  geoDenied: false,
  loading: false,
  setShowInputWeather: () => {},
  showInputWeather: false,
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
