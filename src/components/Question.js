import React from "react"

export default function Question(props){

    const answer = props.correctAnswer
    let aChecker = false;
    let bChecker = false;
    let cChecker = false;
    let dChecker = false;

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
            console.log("This is the right answer")
        }
        else{
            console.log("This is the wrong answer")
        }
    }


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