import React from "react"
import Question from "./Question"
import data from "./data"

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

    return <div>{questions}</div>
}
