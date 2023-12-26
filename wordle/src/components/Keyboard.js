import React, { useCallback, useContext, useEffect, useState } from "react";
import Key from "./Key";
import { AppContext, useAppContext } from "../App";

const Keyboard = () => {
  const { board, setBoard, currAttempt, setCurrAttempt } = useAppContext();

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      if (currAttempt.letter !== 5) return;
      setCurrAttempt({letter: 0, attempt: currAttempt.attempt + 1});
    }
    else if (event.key === "Backspace") {
      if (currAttempt.letter === 0) return;
      const newBoard = [...board]
      newBoard[currAttempt.letter-1][currAttempt.attempt]=""
      setBoard(newBoard);
      setCurrAttempt({... currAttempt, letter: currAttempt.letter - 1});
    }
    else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          if (currAttempt.letter > 4) return;
          const newBoard = [...board];
          newBoard[currAttempt.letter][currAttempt.attempt]=key;
          setBoard(newBoard);
          setCurrAttempt({... currAttempt, letter: currAttempt.letter + 1});
        }
      })

      keys2.forEach((key) => {
        if (event.key.toLowerCase() ===key.toLowerCase()) {
          if (currAttempt.letter > 4) return;
          const newBoard = [...board];
          newBoard[currAttempt.letter][currAttempt.attempt]=key;
          setBoard(newBoard);
          setCurrAttempt({... currAttempt, letter: currAttempt.letter + 1});
        }
      })

      keys3.forEach((key) => {
        if (event.key.toLowerCase() ===key.toLowerCase()) {
          if (currAttempt.letter > 4) return;
          const newBoard = [...board];
          newBoard[currAttempt.letter][currAttempt.attempt]=key;
          setBoard(newBoard);
          setCurrAttempt({... currAttempt, letter: currAttempt.letter + 1});
        }
      })
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard]);

  return (
    <div className='keyboard'>
      <div className='line1'>{keys1.map((key) =>{ return <Key keyVal={key}/>})}</div>
      <div className='line2'>{keys2.map((key) =>{ return <Key keyVal={key}/>})}</div>
      <div className='line3'>
        <Key keyVal={"ENTER"} bigKey/>
        {keys3.map((key) =>{ return <Key keyVal={key}/>})}
        <Key keyVal={"DELETE"} bigKey/>
      </div>
    </div>
  )
}

export default Keyboard