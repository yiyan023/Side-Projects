import React from "react";
import { useAppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
    const { board, setBoard, correctWord, currAttempt, onSelectLetter } = useAppContext();
    const letter = board[letterPos][attemptVal];
    
    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);
    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost? "almost" : "error");

    return (
        <div className="letter" id={letterState}>{letter}</div>
    )
}

export default Letter