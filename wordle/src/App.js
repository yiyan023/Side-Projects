import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt ] = useState({ attempt: 0, letter: 0});
  const [gameOver, setGameOver ] = useState({ gameOver: false, guessedWord: false})

  const correctWord = "SMASH";

  return (
    <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, correctWord, setGameOver, gameOver }}>
      {children}
    </AppContext.Provider>
  );
};

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Birdle</h1>
      </nav>
      <div className='game'>
        <AppContextProvider>
          <Board />
          <Keyboard />
        </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
