import React, { useState } from "react"
import "./quiz.css"

export default function Question(props){

    const answer = props.correctAnswer
    let aChecker = false;
    let bChecker = false;
    let cChecker = false;
    let dChecker = false;
    let [response, setResponse] = useState('None');

    //Definitely a better way to do this, but this will work for now
    if(answer=='a'){
        aChecker = true;
    }
    else if(answer=='b'){
        bChecker = true;
    }
    else if(answer=='c'){
        cChecker = true;
    }
    else if (answer=='d'){
        dChecker = true;
    }

    function correct(checker){
        if(checker==true){
            //console.log("This is the right answer")
            setResponse('Correct')
        }
        else{
            //console.log("This is the wrong answer")
            setResponse('Incorrect')
        }
    }

    //Initially displays the questions and answers normally
    if(response=="None"){
        return(
            <div className="question">
                <h2>{props.question}</h2>
                <div className="question-choices">
                    <button className="choice-1" type='button' onClick={() => {correct(aChecker)}}>A: {props.a}</button>
                    <button className="choice-2" type='button' onClick={() => {correct(bChecker)}}>B: {props.b}</button>
                    <button className="choice-3" type='button' onClick={() => {correct(cChecker)}}>C: {props.c}</button>
                    <button className="choice-4" type='button' onClick={() => {correct(dChecker)}}>D: {props.d}</button>
                </div>
            </div>
        )
    }
    //Displays question and a green correct response
    else if(response=="Correct"){
        return(
            <div className="response">
                <h2>{props.question}</h2>
                <h2 className="response-message1">Correct</h2>
            </div>
        )
    }
    //Displays question and a red incorrect response
    else if(response=="Incorrect"){
        return(
            <div className="response">
                <h2>{props.question}</h2>
                <h2 className="response-message2">Incorrect</h2>
            </div>
        )
    }
}