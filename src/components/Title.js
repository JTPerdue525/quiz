import React from "react"
import { Link } from "react-router-dom"
import "./quiz.css"

export default function Title(){
    return(
        <div className= "title-container">
            <div className = "title">
                <h1>Pop Culture Trivia Game</h1>
                <h3>Created By: James Perdue</h3>
                <Link to="/qpage">
                    <button type="button">Start The Game</button>
                </Link>
            </div>
        </div>
    )
}
