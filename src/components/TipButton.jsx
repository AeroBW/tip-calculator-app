function TipButton({ tipAmount, setTip, setTipInput, setTipError }) {
  return (
    <button
      onClick={() => {
        setTip(tipAmount);
        setTipInput("");
        setTipError("");
      }}
      className="w-32 bg-veryDarkCyan text-2xl text-white focus:bg-strongCyan focus:text-veryDarkCyan"
    >
      {tipAmount}
    </button>
  );
}

export default TipButton;
