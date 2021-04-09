import React,{useState} from "react";
import './question-color-bar.css'

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [graded, setGraded] = useState(false)
    const [highlight, setHighlight] = useState("initial-highlight")
    return (
        <div>
            <h4>
                {question.question}
                {
                    graded && answer === question.correct &&
                    <i className="fas fa-check check"></i>

                }
                {
                    graded && answer !== question.correct &&
                    <i className="fas fa-times times"></i>
                }
            </h4>


            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <>
                                {(answer != "") && (answer != question.correct) &&
                                <label className={`list-group-item
                                        ${(choice == question.correct) && graded ? 'correct'
                                    :
                                    (choice == answer) && graded ? 'incorrect'
                                        : 'initial-highlight'}`}>

                                    <input
                                        onClick={() => {
                                            setAnswer(choice)
                                            setGraded(false)
                                        }}
                                        type="radio"
                                        name={question._id}/>{choice}
                                </label>
                                }

                                {(answer != "") && (answer == question.correct) &&
                                <label className={`list-group-item
                            ${
                                    (choice == answer) && (answer == question.correct) && graded ? 'correct'
                                        : 'initial-highlight'}`}>

                                    <input
                                        onClick={() => {
                                            setAnswer(choice)
                                            setGraded(false)
                                        }}
                                        type="radio"
                                        name={question._id}/>{choice}
                                </label>
                                }
                                {answer == "" &&
                                <label className="list-group-item initial-highlight">

                                    <input
                                        onClick={() => {
                                            setAnswer(choice)
                                            setGraded(false)
                                        }}
                                        type="radio"
                                        name={question._id}/>{choice}
                                </label>
                                }


                            </>


                            // <li className={`list-group-item
                            // ${
                            //     (choice == answer) && (answer == question.correct) && graded ? 'correct'
                            //         :
                            //         (choice == answer) && (answer != question.correct) && graded ? 'incorrect'
                            //     :  'initial-highlight'}`}>
                            //
                            //
                            //     <label><input
                            //         onClick={() => {
                            //             setAnswer(choice)
                            //             setGraded(false)
                            //         }}
                            //         type="radio"
                            //         name={question._id}/>{choice}</label>
                            // </li>

                        )
                    })
                }
            </ul>

            <label>
                Your answer: {answer}
            </label>

            <br/>

            <button
                className="btn btn-success"
                onClick={() => {
                    setGraded(true)
                    // {
                    //     answer === question.correct &&
                    //     setHighlight("correct")}
                    // {answer !== question.correct &&
                    // setHighlight("incorrect")
                    // }
                    // console.log("2",answer,question.correct)
                }}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion;