import { useState } from "react";
import Display from "./Display";

const billRegex = /^([1-9]\d*|[1-9]\d*\.\d{1,2})$/;
const tipRegex = /^([1-9]\d{0,1}|100)%?$/;
const peopleRegex = /^([1-9]\d{0,1}|100)$/;

function Form() {
  const [bill, setBill] = useState("");
  const [billError, setBillError] = useState("");
  function handleBillChange({ target }) {
    if (!billRegex.test(target.value) && target.value !== "") {
      setBillError("Please input a valid number");
      setBill(0);
      return;
    }
    setBillError("");
    setBill(target.value);
  }

  const [tip, setTip] = useState("");
  const [tipError, setTipError] = useState("");
  const [customTip, setCustomTip] = useState("");
  function handleTipChange({ target }) {
    if (!tipRegex.test(target.value) && target.value !== "") {
      setTipError("Please input a valid number");
      setTip(0);
      setCustomTip(target.value);
      return;
    }
    setTipError("");
    setTip(target.value);
    setCustomTip(target.value);
  }

  const [people, setPeople] = useState("");
  const [peopleError, setPeopleError] = useState("");
  function handlePeopleChange({ target }) {
    if (!peopleRegex.test(target.value) && target.value !== "") {
      setPeopleError("Please input a valid number");
      setPeople(0);
      return;
    }
    setPeopleError("");
    setPeople(target.value);
  }

  return (
    <>
      <div>
        <div className="flex justify-between">
          <p>Bill</p>
          <p>{billError}</p>
        </div>
        <div className="relative">
          <input
            onChange={handleBillChange}
            type="text"
            placeholder="0"
            className="w-full bg-veryLightGrayishCyan px-4 py-1 text-right text-2xl font-bold text-veryDarkCyan"
          />
          <img
            src="/images/icon-dollar.svg"
            className="absolute left-[10px] top-[10px]"
          />
        </div>
        <h1>BILL: {bill}</h1>

        <div className="flex justify-between">
          <p>Select Tip %</p>
          <p>{tipError}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              setTip("5%");
              setCustomTip("");
              setTipError("");
            }}
            className="w-32 bg-veryDarkCyan text-2xl text-white focus:bg-strongCyan focus:text-veryDarkCyan"
          >
            5%
          </button>
          <button
            onClick={() => {
              setTip("10%");
              setCustomTip("");
              setTipError("");
            }}
            className="w-32 bg-veryDarkCyan text-2xl text-white focus:bg-strongCyan focus:text-veryDarkCyan"
          >
            10%
          </button>
          <button
            onClick={() => {
              setTip("15%");
              setCustomTip("");
              setTipError("");
            }}
            className="w-32 bg-veryDarkCyan text-2xl text-white focus:bg-strongCyan focus:text-veryDarkCyan"
          >
            15%
          </button>
          <button
            onClick={() => {
              setTip("25%");
              setCustomTip("");
              setTipError("");
            }}
            className="w-32 bg-veryDarkCyan text-2xl text-white focus:bg-strongCyan focus:text-veryDarkCyan"
          >
            25%
          </button>
          <button
            onClick={() => {
              setTip("50%");
              setCustomTip("");
              setTipError("");
            }}
            className="w-32 bg-veryDarkCyan text-2xl text-white focus:bg-strongCyan focus:text-veryDarkCyan"
          >
            50%
          </button>
          <input
            onChange={handleTipChange}
            value={customTip}
            type="text"
            placeholder="Custom"
            className="w-32 bg-veryLightGrayishCyan px-4 py-1 text-right text-2xl font-bold text-veryDarkCyan"
          />
        </div>
        <h1>TIP: {tip}</h1>

        <div className="flex justify-between">
          <p>Number of People</p>
          <p>{peopleError}</p>
        </div>
        <div className="relative">
          <input
            onChange={handlePeopleChange}
            type="text"
            placeholder="0"
            className="w-full bg-veryLightGrayishCyan px-4 py-1 text-right text-2xl font-bold text-veryDarkCyan"
          />
          <img
            src="/images/icon-person.svg"
            className="absolute left-[10px] top-[10px]"
          />
        </div>
        <h1>PEOPLE: {people}</h1>
      </div>
      <Display bill={bill} tip={tip} people={people} />
    </>
  );
}

export default Form;
