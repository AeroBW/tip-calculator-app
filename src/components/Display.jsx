function Display({ bill, tip, people, handleReset }) {
  let tipPerPerson = "0.00";
  let totalPerPerson = "0.00";
  let isDisabled = true;

  if (bill && tip && people) {
    bill = Number(bill);
    tip = Number(tip.replace("%", ""));
    people = Number(people);

    tipPerPerson = (((tip / 100) * bill) / people).toFixed(2);
    totalPerPerson = ((bill + (tip / 100) * bill) / people).toFixed(2);
    isDisabled = false;
  }

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-veryDarkCyan px-4 py-6 sm:gap-8 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white">Tip Amount</p>
          <p className="text-sm text-grayishCyan">/ person</p>
        </div>
        <p className="text-2xl text-strongCyan sm:text-3xl md:text-4xl">
          ${tipPerPerson}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-white">Total</p>
          <p className="text-sm text-grayishCyan">/ person</p>
        </div>
        <p className="text-2xl text-strongCyan sm:text-3xl md:text-4xl">
          ${totalPerPerson}
        </p>
      </div>

      <button
        disabled={isDisabled}
        onClick={handleReset}
        className={`${isDisabled ? "opacity-25" : ""} w-full rounded-md bg-strongCyan py-2 text-center text-veryDarkCyan sm:mt-auto`}
      >
        RESET
      </button>
    </div>
  );
}

export default Display;
