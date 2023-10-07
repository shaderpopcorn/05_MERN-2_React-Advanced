import { useState } from "react";
import clear_sky_day from "../assets/icons/01d.svg";
import clear_sky_night from "../assets/icons/01n.svg";
import few_clouds_day from "../assets/icons/02d.svg";
import few_clouds_night from "../assets/icons/02n.svg";
import scattered_clouds_day from "../assets/icons/03d.svg";
import scattered_clouds_night from "../assets/icons/03n.svg";
import broken_clouds_day from "../assets/icons/04d.svg";
import broken_clouds_night from "../assets/icons/04n.svg";
import shower_rain_day from "../assets/icons/09d.svg";
import shower_rain_night from "../assets/icons/09n.svg";
import rain_day from "../assets/icons/10d.svg";
import rain_night from "../assets/icons/10n.svg";
import thunderstorm_day from "../assets/icons/11d.svg";
import thunderstorm_night from "../assets/icons/11n.svg";
import snow_day from "../assets/icons/13d.svg";
import snow_night from "../assets/icons/13n.svg";
import mist_day from "../assets/icons/50d.svg";
import mist_night from "../assets/icons/50n.svg";
import "./SwitchImage.css";

const SwitchImage = ({ iconUrl }) => {
  const [style, setStyle] = useState("forecast");
  switch (iconUrl) {
    case "01d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={clear_sky_day}
          alt="clear sky day"
        />
      );
      break;
    case "01n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={clear_sky_night}
          alt="clear sky night"
        />
      );
      break;
    case "02d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={few_clouds_day}
          alt="few clouds day"
        />
      );
      break;
    case "02n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={few_clouds_night}
          alt="few clouds night"
        />
      );
      break;
    case "03d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={scattered_clouds_day}
          alt="scattered clouds day"
        />
      );
      break;
    case "03n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={scattered_clouds_night}
          alt="scattered clouds night"
        />
      );
      break;
    case "04d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={broken_clouds_day}
          alt="broken clouds day"
        />
      );
      break;
    case "04n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={broken_clouds_night}
          alt="broken clouds night"
        />
      );
      break;
    case "09d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={shower_rain_day}
          alt="shower rain day"
        />
      );
      break;
    case "09n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={shower_rain_night}
          alt="shower rain night"
        />
      );
      break;
    case "10d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={rain_day}
          alt="rain day"
        />
      );
      break;
    case "10n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={rain_night}
          alt="rain night"
        />
      );
      break;
    case "11d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={thunderstorm_day}
          alt="thunderstorm day"
        />
      );
      break;
    case "11n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={thunderstorm_night}
          alt="thunderstorm night"
        />
      );
      break;
    case "13d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={snow_day}
          alt="snow day"
        />
      );
      break;
    case "13n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={snow_night}
          alt="snow night"
        />
      );
      break;
    case "50d":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={mist_day}
          alt="mist day"
        />
      );
      break;
    case "50n":
      return (
        <img
          rel="icon"
          className={style}
          type="image/svg+xml"
          src={mist_night}
          alt="mist night"
        />
      );
      break;
    default:
      break;
  }
};

export default SwitchImage;
