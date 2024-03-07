import "./index.css";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) {
  return (
    <div
      className="keyboard"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(4vw, 1fr))",
        gap: "1vw",
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={"keyboard-btns " + `${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            disabled = { isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
