import { useState } from "react";
import { convertUnit } from "../../../utils/unitApi";
import "./UnitConverter.css";
function UnitConverter() {
  const [fromUnit, setFromUnit] = useState("in");
  const [toUnit, setToUnit] = useState("cm");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setResult(null);

    convertUnit(value, fromUnit, toUnit)
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="unit-converter">
      <h2 className="unit-converter__title">Unit Converter</h2>

      <form className="unit-converter__form" onSubmit={handleSubmit}>
        <div className="unit-converter__field">
          <label className="unit-converter__label" htmlFor="from-unit">
            What unit are you converting from?
          </label>

          <select
            className="unit-converter__select"
            id="from-unit"
            name="fromUnit"
            onChange={(e) => setFromUnit(e.target.value)}
            value={fromUnit}
          >
            <option value="in">Inches</option>
            <option value="cm">Centimeters</option>
            <option value="mm">Millimeters</option>
            <option value="ft">Feet</option>
            <option value="m">Meters</option>
          </select>
        </div>

        <div className="unit-converter__field">
          <label className="unit-converter__label" htmlFor="measurement">
            Enter value
          </label>

          <input
            className="unit-converter__input"
            id="measurement"
            name="measurement"
            type="number"
            min="0"
            step="any"
            placeholder="Enter measurement"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>

        <div className="unit-converter__field">
          <label className="unit-converter__label" htmlFor="to-unit">
            Convert to
          </label>

          <select
            className="unit-converter__select"
            id="to-unit"
            name="toUnit"
            onChange={(e) => setToUnit(e.target.value)}
            value={toUnit}
          >
            <option value="cm">Centimeters</option>
            <option value="in">Inches</option>
            <option value="mm">Millimeters</option>
            <option value="ft">Feet</option>
            <option value="m">Meters</option>
          </select>
        </div>

        <button className="unit-converter__button" type="submit">
          Convert
        </button>
        <p className="unit-converter__result" aria-live="polite">
          {isLoading
            ? "Converting..."
            : result
              ? `${result.data.result.toFixed(2)} ${result.data.to}`
              : "Result will appear here"}
        </p>
      </form>
    </div>
  );
}

export default UnitConverter;
