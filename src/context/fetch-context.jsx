import { createContext } from "react";

const FetchContext = createContext({
  geoDenied: false,
  loading: false,
  setShowLocalWeather: () => {},
  showLocalWeather: false,
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
  temperature: "",
  forecastList: [],
});

export default FetchContext;
