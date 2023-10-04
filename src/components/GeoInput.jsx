import "./GeoInput.css";

const GeoInput = ({ handleSubmit, inputLatRef, inputLonRef }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="latitude">Enter Latitude:</label>
        <input
          name="latitude"
          type="text"
          placeholder="Latitude"
          ref={inputLatRef}
        />
        <label htmlFor="longitude">Enter Longitude:</label>
        <input
          name="longitude"
          type="text"
          placeholder="Longitude"
          ref={inputLonRef}
        />
        <br />
        <hr />
        <button type="submit">Location</button>
      </form>
    </>
  );
};

export default GeoInput;
