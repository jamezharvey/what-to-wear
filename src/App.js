import "./App.css";
import { Route, Routes } from "react-router-dom";
import Advice from "./components/advice";
import Home from "./components/home";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<Advice />} />
      </Routes>
    </div>
  );
}

export default App;
