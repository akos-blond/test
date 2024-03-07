import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ChoosingWordLength = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const filterByNumber = [8, 9, 10, 11, 12, 13];

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  useEffect(() => {
    if (selectedButton !== null) {
      console.log(`Selected button value: ${selectedButton}`);
    }
  }, [selectedButton]);

  const handleRandomButton = () => {
   const randomizedNumber = filterByNumber[Math.floor(Math.random() * filterByNumber.length)]

   setSelectedButton(randomizedNumber)
  }

  const handleToNewGame = () => {
    navigate("/game");
  };

  return (
    <div style={{ textAlign: "center", padding: "2vw" }}>
      <h1>The Hangman</h1>
      <p style={{ width: "40%", margin: "0 auto 7vw auto" }}>
        Let's play <strong>Hangman!</strong> <br /> How many letters do you want
        in your word?
      </p>

      <div className="word-length-btn-container">
        {filterByNumber.map((number) => (
          <button
            key={number}
            className="number-btn"
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="random-btn"
          onClick={() => handleRandomButton()}
        >
          Random
        </button>
      </div>

      <button className="btn-start" onClick={handleToNewGame}>
        LET'S PLAY!
      </button>
    </div>
  );
};

export default ChoosingWordLength;
