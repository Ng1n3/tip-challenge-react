import { useState } from "react";

function App() {
  return <Tipcalculator />;
}

function Tipcalculator() {
  const [bill, setBill] = useState(0);
  const [firstPercent, setfirstPercent] = useState(0);
  const [secondPercent, setSecondPercent] = useState(0);

  const tip = bill * ((firstPercent + secondPercent) / 2 / 100);

  function handleReset() {
    setBill(0);
    setfirstPercent(0);
    setSecondPercent(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={firstPercent} onSelect={setfirstPercent}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percentage={secondPercent} onSelect={setSecondPercent}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  const total = bill + tip;
  return (
    <h3>
      you pay {total} (${bill} + ${tip})
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
