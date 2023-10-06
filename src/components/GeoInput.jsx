import "./GeoInput.css";

const GeoInput = ({ handleSubmit, inputLatRef, inputLonRef }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="latitude">Latitude:</label> */}
        <input
          name="latitude"
          type="text"
          placeholder="Enter Latitude"
          ref={inputLatRef}
        />
        {/* <label htmlFor="longitude">Longitude:</label> */}
        <input
          name="longitude"
          type="text"
          placeholder="Enter Longitude"
          ref={inputLonRef}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default GeoInput;
