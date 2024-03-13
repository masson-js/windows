import { Windows } from "./components/windows";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Windows />
      </div>
    </BrowserRouter>
  );
}

export default App;
