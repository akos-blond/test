import { useCallback, useEffect, useState } from "react";
import words from "./hangman_words.json";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import "./index.css";
import HangmanDrawing from "./HangmanDrawing";
import { useNavigate } from "react-router-dom";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

const Game = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  let navigate = useNavigate();

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 10;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

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
    navigate('/choosing')
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
          {isWinner && <p style={{ color: "lime" }}>You've won</p>}
          {isLoser && <p style={{ color: "red" }}>You've lost</p>}
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
            <button className="btn-end">END GAME</button>
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
