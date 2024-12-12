function Input({ name, label, error, onChange, src, value }) {
  const outlineNormal = "outline-strongCyan";
  const outlineError = "outline-red-500";
  let outline = outlineNormal;
  outline = error ? outlineError : outlineNormal;

  return (
    <div>
      <p className="mb-2 text-darkGrayishCyan">{label}</p>
      <div className="relative">
        <input
          name={name}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="0"
          className={`${outline} w-full rounded-md bg-veryLightGrayishCyan px-4 py-1 text-right text-2xl text-veryDarkCyan`}
        />
        <img src={src} className="absolute left-[10px] top-[10px]" />
      </div>
      <p className="text-red-500 mt-1 text-right">{error}</p>
    </div>
  );
}

export default Input;
