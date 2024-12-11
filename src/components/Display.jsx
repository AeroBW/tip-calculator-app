function Display({ bill, tip, people, handleReset }) {
  let tipPerPerson = "0.00";
  let totalPerPerson = "0.00";

  if (bill && tip && people) {
    bill = Number(bill);
    tip = Number(tip.replace("%", ""));
    people = Number(people);

    tipPerPerson = (((tip / 100) * bill) / people).toFixed(2);
    totalPerPerson = ((bill + (tip / 100) * bill) / people).toFixed(2);
  }

  return (
    <div>
      <div>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>${tipPerPerson}</p>
      </div>

      <div>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>${totalPerPerson}</p>
      </div>

      <button
        onClick={handleReset}
        className="w-full bg-strongCyan py-2 text-center text-veryDarkCyan"
      >
        RESET
      </button>
    </div>
  );
}

export default Display;
