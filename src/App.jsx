import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="grid min-h-dvh place-content-center bg-[#c5e4e7]">
      <img
        src="/images/logo.svg"
        alt="SPLITTER"
        className="m-auto py-8 sm:pt-0"
      />
      <Calculator />
    </div>
  );
}

export default App;
