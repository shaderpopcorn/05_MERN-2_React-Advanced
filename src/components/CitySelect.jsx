import "./CitySelect.css";

const CitySelect = ({ handleSelect }) => {
  return (
    <>
      <form className="city-form">
        <label htmlFor="cities">Choose a city:</label>
        <select
          defaultValue="berlin"
          className="city-select"
          name="cities"
          id="cities"
          onInput={handleSelect}
        >
          <option value="berlin">Berlin</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          <option value="newyork">NewYork</option>
          <option value="shanghai">Shanghai</option>
        </select>
      </form>
    </>
  );
};

export default CitySelect;
