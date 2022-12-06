import "./App.css";
import { Menubar } from "primereact/menubar";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="App">
      <Menubar
        className="bg-blue-600 p-3 text-3xl text-white"
        start={"Prime React"}
      />
      <Counter />
    </div>
  );
};

export default App;
