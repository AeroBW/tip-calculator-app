function TipButton({ tipAmount, tip, setTip, setTipInput, setTipError }) {
  let isSelected = tip === tipAmount || tip.concat("%") === tipAmount;
  return (
    <button
      onClick={() => {
        setTip(tipAmount);
        setTipInput("");
        setTipError("");
      }}
      className={`${isSelected ? "bg-strongCyan text-veryDarkCyan" : "bg-veryDarkCyan text-white"} rounded-md text-2xl`}
    >
      {tipAmount}
    </button>
  );
}

export default TipButton;
