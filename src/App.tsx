import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./Game";
import Instructions from "./Instructions";
import ChoosingWordLength from "./ChoosingWordLength";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Instructions />} />
          <Route path="/choosing" element={<ChoosingWordLength />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
