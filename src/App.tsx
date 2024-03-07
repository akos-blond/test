import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./Game";
import Instructions from "./Instructions";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Game />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
