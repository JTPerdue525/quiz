import React from "react"
import Title from "./components/Title"
import Question from "./components/Question";
import data from "./data"

//Link to question using routes perhaps
function App() {

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
    <div>
      <Title />
      {questions}
    </div>
  )
}

export default App;
