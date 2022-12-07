import "./App.css";
import React from "react";
import { Menubar } from "primereact/menubar";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="App">
      <Menubar
        className="bg-blue-600 p-3 text-3xl text-white"
        start={"Prime React"}
      />
      {/* <Counter /> */}
      {/* <Greet /> */}
      <UserList />
    </div>
  );
};

export default App;
