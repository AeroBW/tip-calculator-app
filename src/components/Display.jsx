function Display({ bill, tip, people }) {
  return (
    <div>
      <div>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        {/* <p>{tipPerPerson}</p> */}
      </div>

      <div>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        {/* <p>{totalPerPerson}</p> */}
      </div>
    </div>
  );
}

export default Display;
