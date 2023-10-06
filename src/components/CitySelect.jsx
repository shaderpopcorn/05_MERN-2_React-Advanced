import "./CitySelect.css";

const CitySelect = ({ handleSelect }) => {
  return (
    <>
      <form>
        <label for="cities">Choose a city:</label>
        <select name="cities" id="cities" onInput={handleSelect}>
          <option selected="selected" value="berlin">
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
