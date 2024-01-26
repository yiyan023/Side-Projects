import React, { useContext } from "react";
import { AppContext, useAppContext } from "../App";

const Key = ({keyVal, bigKey }) => {

    const { board, setBoard, currAttempt, setCurrAttempt } = useAppContext();

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            if (currAttempt.letter !== 5) return;
            setCurrAttempt({letter: 0, attempt: currAttempt.attempt + 1});
        }
        else if (keyVal === "DELETE") {
            if (currAttempt.letter === 0) return;
            const newBoard = [...board]
            newBoard[currAttempt.letter-1][currAttempt.attempt]=""
            setBoard(newBoard);
            setCurrAttempt({... currAttempt, letter: currAttempt.letter - 1});
        }
        else {
            if (currAttempt.letter > 4) return;
            const newBoard = [...board];
            newBoard[currAttempt.letter][currAttempt.attempt]=keyVal;
            setBoard(newBoard);
            setCurrAttempt({... currAttempt, letter: currAttempt.letter + 1});
        }
        
    };

    return (
        <div className='key' id={ bigKey && 'big'} onClick={selectLetter}>{keyVal}</div>
    )
}

export default Key