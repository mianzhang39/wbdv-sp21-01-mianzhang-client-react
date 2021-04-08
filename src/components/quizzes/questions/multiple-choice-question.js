import React,{useState} from "react";
import './multiple-choice-question.css'

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [graded, setGraded] = useState(false)
    const [highlight, setHighlight] = useState("initial-highlight")
    return(
        <div>
            <h4>
                {question.question}
                {
                    graded && answer === question.correct &&
                    <i className="fas fa-check"></i>
                    // && console.log("hello", `${highlight}`,graded, answer,question.correct)
                        // && console.log("hello",highlight)

                }
                {
                    graded && answer !== question.correct &&
                    <i className="fas fa-times"></i>
                    // && console.log("hello", `${highlight}`, graded, answer,question.correct)
                    // && console.log("hello",highlight)
                }
            </h4>

                {/*{*/}
                {/*    graded && answer == question.correct &&*/}
                {/*    // console.log(answer, highlight) &&*/}
                {/*    question.choices.filter((choice) =>{*/}
                {/*        if ({choice} == answer) {*/}
                {/*            return(*/}
                {/*                <input*/}
                {/*                    type="radio"*/}
                {/*                    name={question._id}*/}
                {/*                    value =  {choice}*/}
                {/*                    className={`${highlight}`}/>*/}
                {/*            )}*/}
                {/*        else {*/}
                {/*            return true*/}
                {/*        }*/}
                {/*    })*/}
                {/*}*/}


            {question.correct}
            {/*{*/}
            {/*    question.choices.filter((choice) => {*/}
            {/*        if ({choice} == answer) {*/}
            {/*            return(*/}
            {/*                <label className="form-control correct" >*/}
            {/*                    <input*/}
            {/*                        type="radio"*/}
            {/*                        name={question._id}*/}
            {/*                        onClick={() => setAnswer(choice)}*/}
            {/*                    />*/}
            {/*                    {choice}*/}
            {/*                </label>*/}
            {/*            )*/}
            {/*        } else {*/}
            {/*            return(*/}
            {/*                <label className="form-control incorrect" >*/}
            {/*                    <input*/}
            {/*                        type="radio"*/}
            {/*                        name={question._id}*/}
            {/*                        onClick={() => setAnswer(choice)}*/}
            {/*                    />*/}
            {/*                    {choice}*/}
            {/*                </label>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    })*/}
            {/*}*/}

                question.choices.map((choice) => {
                if(({choice} === answer) && (answer === question.correct)) {
                return  <label className={`form-control ${"correct"}`}> <input
            type="radio"
            name={question._id}
            id = {choice}
            onClick={() => {
            setAnswer(choice)
            setGraded(false)
        }}/>
        {choice}
            </label>}
            else if (({choice} === answer) && (answer !== question.correct)) {
            return  <label className={`form-control ${"incorrect"}`}>
            <input
            type="radio"
            name={question._id}
            id = {choice}
            onClick={() => {
            setAnswer(choice)
            setGraded(false)
        }}/>
        {choice}
            </label>}
            else {return <label className={`form-control ${"initial-highlight"}`}>
            <input
            type="radio"
            name={question._id}
            id = {choice}
            onClick={() => {
            setAnswer(choice)
            setGraded(false)
        }}/>
        {choice}
            </label>}
                })

            <label>
                Your answer: {answer}
            </label>

            <br/>

            <button
                className="btn btn-success"
                onClick={() => {
                    setGraded(true)
                    {
                        answer === question.correct &&
                        setHighlight("correct")}
                    {answer !== question.correct &&
                    setHighlight("incorrect")
                    }
                }}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion;