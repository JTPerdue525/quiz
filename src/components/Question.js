import React, { useState } from "react"
import { getCorrectCount, updateCorrectCount } from "./Results";
import "./quiz.css"

export default function Question(props){

    const answer = props.correctAnswer
    let aChecker = false;
    let bChecker = false;
    let cChecker = false;
    let dChecker = false;
    let [response, setResponse] = useState('None');

    //Defines correct answer in this scope
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
            //Set state variable to correct if user chooses the right choice           
            setResponse('Correct');
            let temp = getCorrectCount(); //gets correctCount
            updateCorrectCount(temp+1); //updates correctCount allowing correctCount to be saved across each question
        }
        else{
            //Sets state variable to incorrect if user chooses the wrong choice
            setResponse('Incorrect');
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