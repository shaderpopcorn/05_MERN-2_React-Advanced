import { createContext } from "react";

const FetchContext = createContext({
  setGeoLocation: () => {},
  geoLocation: "",
  coords: { lat: 0, lon: 0 },
  locationName: "",
  iconUrl: "",
  iconDescription: "",
  forecastList: [],
});

export default FetchContext;
