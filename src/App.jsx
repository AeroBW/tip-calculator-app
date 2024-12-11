import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="bg-[#c5e4e7]">
      <img src="/images/logo.svg" alt="SPLITTER" className="m-auto py-8" />
      <main className="rounded-t-xl bg-white p-4">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
