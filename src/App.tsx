import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./components/Game";
import Instructions from "./Instructions";
import ChoosingWordLength from "./components/ChoosingWordLength";
import { useContext } from "react";
import { WordToGuessContext } from "./contexts/WordToGuessContext";
import { GuessedLettersContext } from "./contexts/GuessedLettersContext";

function App() {
  const wordToGuess = useContext(WordToGuessContext);
  const {guessedLetters, setGuessedLetters} = useContext(GuessedLettersContext);
  return (
    <div className="container">
      <BrowserRouter>
        <WordToGuessContext.Provider value={wordToGuess}>
          <GuessedLettersContext.Provider value={{guessedLetters, setGuessedLetters}}>
            <Routes>
              <Route path="/game" element={<Game />} />
              <Route path="/" element={<Instructions />} />
              <Route path="/choosing" element={<ChoosingWordLength />} />
            </Routes>
          </GuessedLettersContext.Provider>
        </WordToGuessContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
