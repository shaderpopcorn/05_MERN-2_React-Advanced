import "./CitySelect.css";

const CitySelect = ({ handleSelect }) => {
  return (
    <>
      <form className="city-form">
        <label for="cities">Choose a city:</label>
        <select
          className="city-select"
          name="cities"
          id="cities"
          onInput={handleSelect}
        >
          <option selected value="berlin">
            Berlin
          </option>
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
