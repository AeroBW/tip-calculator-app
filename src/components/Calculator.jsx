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
const outlineNormal = "outline-strongCyan";
const outlineError = "outline-red-500";
let outline = outlineNormal;

function Calculator() {
  const [bill, setBill] = useState("");
  const [billError, setBillError] = useState("");
  const [billInput, setBillInput] = useState("");
  function handleBillChange({ target }) {
    if (!billRegex.test(target.value) && target.value !== "") {
      if (target.value === "0") {
        setBillError("Can't be zero");
        setBill("");
        setBillInput(target.value);
        return;
      }
      setBillError("Invalid number");
      setBill("");
      setBillInput(target.value);

      return;
    }
    setBillError("");
    setBill(target.value);
    setBillInput(target.value);
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
        setTip("");
        setTipInput(target.value);
        return;
      }
      setTipError("Invalid number");
      setTip("");
      setTipInput(target.value);
      return;
    }
    setTipError("");
    setTip(target.value);
    setTipInput(target.value);
  }

  const [people, setPeople] = useState("");
  const [peopleError, setPeopleError] = useState("");
  const [peopleInput, setPeopleInput] = useState("");
  function handlePeopleChange({ target }) {
    if (!peopleRegex.test(target.value) && target.value !== "") {
      if (target.value === "0") {
        setPeopleError("Can't be zero");
        setPeople("");
        setPeopleInput(target.value);
        return;
      }
      if (/^[1-9]\d*$/.test(target.value) && Number(target.value) > 100) {
        setPeopleError("Max 100 person");
        setPeople("");
        setPeopleInput(target.value);
        return;
      }
      setPeopleError("Invalid number");
      setPeople("");
      setPeopleInput(target.value);
      return;
    }
    setPeopleError("");
    setPeople(target.value);
    setPeopleInput(target.value);
  }

  function handleReset() {
    setBill("");
    setBillInput("");
    setTip("");
    setTipInput("");
    setPeople("");
    setPeopleInput("");
  }

  outline = tipError ? outlineError : outlineNormal;

  return (
    <main className="m-auto grid max-w-[975px] gap-8 rounded-t-xl bg-white p-8 sm:w-[90%] sm:grid-cols-2 sm:rounded-xl">
      <div className="space-y-6">
        <Input
          name="Bill"
          label="Bill"
          error={billError}
          onChange={handleBillChange}
          value={billInput}
          src={dollarIcon}
        />

        <div>
          <p className="mb-2 text-darkGrayishCyan">Select Tip %</p>
          <div className="grid auto-rows-fr grid-cols-2 gap-4 lg:grid-cols-3">
            {tipAmounts.map((tipAmount) => (
              <TipButton
                key={tipAmount}
                tipAmount={tipAmount}
                tip={tip}
                setTip={setTip}
                setTipInput={setTipInput}
                setTipError={setTipError}
              />
            ))}
            <input
              name="tip"
              onChange={handleTipChange}
              value={tipInput}
              type="text"
              placeholder="Custom"
              className={`${outline} max-w-full rounded-md bg-veryLightGrayishCyan px-4 py-1 text-center text-2xl text-veryDarkCyan`}
            />
          </div>
          <p className="mt-1 text-right text-red-500">{tipError}</p>
        </div>

        <Input
          name="people"
          label="Number of People"
          error={peopleError}
          onChange={handlePeopleChange}
          value={peopleInput}
          src={personIcon}
        />
      </div>

      <Display
        bill={bill}
        tip={tip}
        people={people}
        handleReset={handleReset}
      />
    </main>
  );
}

export default Calculator;
