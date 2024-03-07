import HangmanDrawing from "./HangmanDrawing";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  let navigate = useNavigate();

  const handleToNewGame = () => {
    navigate('/game')
  }
  return (
    <div style={{ textAlign: "center", padding: "2vw" }}>
      <h1>The Hangman</h1>
      <HangmanDrawing />
      <h2>Game instructions</h2>
      <p className="game-instructions">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        quisquam excepturi est consectetur, incidunt voluptate eveniet tempore
        blanditiis quis dolorum odio, possimus minima. <br />
        <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Suscipit, eveniet modi aut aliquam veniam possimus ab magnam atque quas
        asperiores!
      </p>

      <button className="btn-start" onClick={handleToNewGame}>GOT IT!</button>
    </div>
  );
};

export default Instructions;
