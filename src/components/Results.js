import React from "react"
import { Link } from "react-router-dom"
import data from "./data"
import "./quiz.css"

export let correctCount=0; //Best solution that I found to show correct answer count

export function reset(){  //Resets coorrect counter to 0 when button is pressed TODO: activate when page is left
    correctCount = 0;
}

export function getCorrectCount(){ //getter
    return correctCount;
}

export function updateCorrectCount(update){ //setter
    correctCount = update;
}

export default function Results(){
    return(
        <div className="results-container">
            <div className="results">
                <h1>Your score is {correctCount}/{data.length}</h1>
                <Link to="/">
                    <button type="button" onClick={() => {reset()}}>Retry</button>
                </Link>
            </div>
        </div>
    )
}