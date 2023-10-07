import "./GeoInput.css";

const GeoInput = ({ handleSubmit, inputLatRef, inputLonRef }) => {
  return (
    <div className="form-container">
      <form className="geo-form" onSubmit={handleSubmit}>
        <div className="geo-latitude">
          <label htmlFor="latitude">Latitude:</label>
          <input
            className="geo-input"
            name="latitude"
            type="text"
            placeholder="Enter Latitude"
            ref={inputLatRef}
          />
        </div>
        <div className="geo-longitude">
          <label htmlFor="longitude">Longitude:</label>
          <input
            className="geo-input"
            name="longitude"
            type="text"
            placeholder="Enter Longitude"
            ref={inputLonRef}
          />
        </div>
        <button className="geo-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GeoInput;
