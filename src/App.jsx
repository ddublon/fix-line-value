import GreenLine from "./GreenLine";
import "./App.css";
import Chart from "./Chart";

const App = () => {
  let maxRange = 0.93853465;
  let minRange = 0.8013635;
  return (
    <div
      style={{
        margin: "150px auto",
        position: "relative",
        border: "1px black solid",
        height: "500px",
      }}
    >
      <Chart numGraphs={1} />
      <GreenLine maxRange={maxRange} minRange={minRange} />
    </div>
  );
};

export default App;
