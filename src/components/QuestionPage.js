import React from "react"
import { Link } from "react-router-dom"
import Question from "./Question"
import data from "./data"
import "./quiz.css"

export default function QuestionPage(){

    const questions = data.map(item =>{
        return(
        <Question
            key={item.id}
            question={item.question}
            a={item.a}
            b={item.b}
            c={item.c}
            d={item.d}
            correctAnswer={item.correctAnswer}
        />
        )
    })

    return (
        <div className="questions-container">
            <div className="questions">
                <h1 className="questions-title">Click on the answers to the following questions.</h1>
                {questions}
            </div>
            <Link to="/res">
                <button type="button" className="see-results">See Results</button>
            </Link>
        </div>
    )
}
