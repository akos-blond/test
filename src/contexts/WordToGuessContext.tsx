import { createContext } from "react";
import words from "../hangman_words.json";

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

export const WordToGuessContext = createContext(getWord());