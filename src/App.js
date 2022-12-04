import "./App.css";
import { Button } from "primereact/button";

const App = () => {
  return (
    <div className="App">
      <h2>App Component</h2>
      <Button label="Click" icon="pi pi-check" />

      <Button label="Primary" />
      <Button label="Secondary" className="p-button-secondary" />
      <Button label="Success" className="p-button-success" />
      <Button label="Info" className="p-button-info" />
      <Button label="Warning" className="p-button-warning" />
      <Button label="Danger" className="p-button-danger" />
    </div>
  );
};

export default App;
