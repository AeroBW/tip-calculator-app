function Input({ label, error, onChange, src, value }) {
  return (
    <>
      <div className="flex justify-between">
        <p>{label}</p>
        <p>{error}</p>
      </div>
      <div className="relative">
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="0"
          className="w-full bg-veryLightGrayishCyan px-4 py-1 text-right text-2xl font-bold text-veryDarkCyan"
        />
        <img src={src} className="absolute left-[10px] top-[10px]" />
      </div>
    </>
  );
}

export default Input;
