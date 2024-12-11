import { useState } from "react";
import Display from "./Display";
import TipButton from "./TipButton";
import Input from "./Input";
import dollarIcon from "/images/icon-dollar.svg";
import personIcon from "/images/icon-person.svg";

const billRegex = /^([1-9]\d*|[1-9]\d*\.\d{1,2})$/;
const tipRegex = /^([1-9]\d?|0|100)%?$/;
const peopleRegex = /^([1-9]\d?|100)$/;
const tipAmounts = ["5%", "10%", "15%", "25%", "50%"];

function Calculator() {
  const [bill, setBill] = useState("");
  const [billError, setBillError] = useState("");
  function handleBillChange({ target }) {
    if (!billRegex.test(target.value) && target.value !== "") {
      if (target.value === "0") {
        setBillError("Can't be zero");
        setBill(null);
        return;
      }
      setBillError("Please input a valid number");
      setBill(null);
      return;
    }
    setBillError("");
    setBill(target.value);
  }

  const [tip, setTip] = useState("");
  const [tipError, setTipError] = useState("");
  const [tipInput, setTipInput] = useState("");
  function handleTipChange({ target }) {
    if (!tipRegex.test(target.value) && target.value !== "") {
      if (
        /^[1-9]\d*%?$/.test(target.value) &&
        Number(target.value.replace("%", "")) > 100
      ) {
        setTipError("Max 100%");
        setTip(null);
        setTipInput(target.value);
        return;
      }
      setTipError("Please input a valid number");
      setTip(null);
      setTipInput(target.value);
      return;
    }
    setTipError("");
    setTip(target.value);
    setTipInput(target.value);
  }

  const [people, setPeople] = useState("");
  const [peopleError, setPeopleError] = useState("");
  function handlePeopleChange({ target }) {
    if (!peopleRegex.test(target.value) && target.value !== "") {
      if (target.value === "0") {
        setPeopleError("Can't be zero");
        setPeople(null);
        return;
      }
      if (/^[1-9]\d*$/.test(target.value) && Number(target.value) > 100) {
        setPeopleError("Max 100 person");
        setPeople(null);
        return;
      }
      setPeopleError("Please input a valid number");
      setPeople(null);
      return;
    }
    setPeopleError("");
    setPeople(target.value);
  }

  function handleReset() {
    setBill("");
    setTip("");
    setTipInput("");
    setPeople("");
  }

  return (
    <>
      <div>
        <Input
          label="Bill"
          error={billError}
          onChange={handleBillChange}
          value={bill}
          src={dollarIcon}
        />

        <div className="flex justify-between">
          <p>Select Tip %</p>
          <p>{tipError}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {tipAmounts.map((tipAmount) => (
            <TipButton
              key={tipAmount}
              tipAmount={tipAmount}
              setTip={setTip}
              setTipInput={setTipInput}
              setTipError={setTipError}
            />
          ))}
          <input
            onChange={handleTipChange}
            value={tipInput}
            type="text"
            placeholder="Custom"
            className="w-32 bg-veryLightGrayishCyan px-4 py-1 text-right text-2xl font-bold text-veryDarkCyan"
          />
        </div>

        <Input
          label="Number of People"
          error={peopleError}
          onChange={handlePeopleChange}
          value={people}
          src={personIcon}
        />
      </div>

      <Display
        bill={bill}
        tip={tip}
        people={people}
        handleReset={handleReset}
      />
    </>
  );
}

export default Calculator;
