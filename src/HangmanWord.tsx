import "./index.css";

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({guessedLetters,  wordToGuess }: HangmanWordProps) {

  return (
    <>
      <div className="the-word-container">
        {wordToGuess.split("").map((letter, index) => (
          <span className="the-word" key={index}>
            <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
          </span>
        ))}
      </div>
    </>
  );
}
