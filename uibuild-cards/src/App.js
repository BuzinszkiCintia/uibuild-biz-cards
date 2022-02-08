import "./App.css";
import data from "./data.json";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card data={data.datas} />
    </div>
  );
}

export default App;
