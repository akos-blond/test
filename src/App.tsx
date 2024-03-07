import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./Game";
import Instructions from "./Instructions";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route exact path="/" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
