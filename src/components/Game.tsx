import "../index.css";
import { useContext, useEffect } from "react";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import HangmanDrawing from "./HangmanDrawing";
import { useNavigate } from "react-router-dom";
import { WordToGuessContext } from "../contexts/WordToGuessContext";
import { GuessedLettersContext } from "../contexts/GuessedLettersContext";

const Game = () => {
  const wordToGuess = useContext(WordToGuessContext);
  const { guessedLetters, setGuessedLetters } = useContext(
    GuessedLettersContext
  );

  let navigate = useNavigate();

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 10;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((currentLetters: string[]) => [
      ...currentLetters,
      letter,
    ]);
    console.log(guessedLetters);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  const handleNewGame = () => {
    navigate("/choosing");
    setGuessedLetters([]);
  };

  const handleToInstructions = () => {
    navigate("/");
  };

  console.log(wordToGuess);
  return (
    <>
      <div className="instructions-btn-container">
        <button className="instructions-btn" onClick={handleToInstructions}>
          INSTRUCTIONS →{" "}
        </button>
      </div>
      <div className="content-container">
        <div className="drawing-container">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        </div>
        <div className="word-and-keyboard">
          <h1>The Hangman</h1>
          <div style={{ textAlign: "end", fontWeight: "bold" }}>
            Incorrect Guesses: {incorrectLetters.length}
          </div>
          {isWinner && (
            <p style={{ color: "lime", fontWeight: "bold" }}>You've won</p>
          )}
          {isLoser && (
            <p style={{ color: "red", fontWeight: "bold" }}>You've lost</p>
          )}
          <p style={{ visibility: isWinner || isLoser ? "hidden" : "visible" }}>
            It's a {wordToGuess.length} letter word
          </p>

          <HangmanWord
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
          <p>Play with a word</p>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
          <div className="btn-container">
            <button className="btn-end" onClick={handleToInstructions}>
              END GAME
            </button>
            <button className="btn-start" onClick={handleNewGame}>
              START NEW GAME
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
