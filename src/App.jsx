import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeoLocation from "./pages/GeoLocation";
import City from "./pages/City";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/geolocation" element={<GeoLocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
