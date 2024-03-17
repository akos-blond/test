import "../index.css";

const BODY_PARTS = [
  <path key="part1" d="M1,11 h8" />,
  <path key="part2" d="M9,11 v-10" />,
  <path key="part3" d="M9,1 h-4" />,
  <path key="part4" d="M5,1 v2" />,
  <circle key="part5" cx="5" cy="4" r="1" />,
  <path key="part6" d="M5,5 v3" />,
  <path key="part7" d="M5,5 l-2,2" />,
  <path key="part8" d="M5,5 l2,2" />,
  <path key="part9" d="M5,8 l-2,2" />,
  <path key="part10" d="M5,8 l2,2" />,
];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  const displayedParts = BODY_PARTS.slice(0, numberOfGuesses);

  return (
    <svg className="drawing" viewBox="0 0 10 12">
      {displayedParts}
    </svg>
  );
};

export default HangmanDrawing;