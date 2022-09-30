import "./App.css";
import { Route, Routes } from "react-router-dom";
import Advice from "./components/advice";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<Advice />} />
      </Routes>
    </div>
  );
}

export default App;
