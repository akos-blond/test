import { Dispatch, SetStateAction, createContext, useState} from 'react';

export interface GuessedLettersContextInterface {
    guessedLetters: string[];
    setGuessedLetters: Dispatch<SetStateAction<string[]>>;
}

const defaultState = {
    guessedLetters: [],
    setGuessedLetters: () => {}
} as GuessedLettersContextInterface;


export const GuessedLettersContext = createContext<GuessedLettersContextInterface>(defaultState);

type GuessedLettersProviderProps = {
    children: React.ReactNode;
}

export default function GuessedLettersProvider({children}: GuessedLettersProviderProps)
{
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    return (
        <GuessedLettersContext.Provider value={{guessedLetters, setGuessedLetters}}>
            {children}
        </GuessedLettersContext.Provider>
    );
} 