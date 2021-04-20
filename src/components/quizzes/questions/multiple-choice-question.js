import React,{useState} from "react";
import './question-color-bar.css'
import questionService from "../../../services/question-service";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [graded, setGraded] = useState(false)
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
                    const RadioColor = (answer, choice,graded) => {
                            if (graded) {
                                if (choice == answer || choice == question.correct){
                                    if (choice == question.correct){
                                        return 'correct'}
                                    else { return 'incorrect'}
                                }
                                else {
                                    return 'initial-highlight'
                                }
                            }
                            else {
                                return 'initial-highlight'
                            }
                    }
                    return (
                    <label className={`list-group-item 
                    
                           
                            ${RadioColor(answer, choice,graded)}
                            `}>

                    <input
                    onClick={() => {
                    setAnswer(choice)
                    setGraded(false)
                }}
                    type="radio"
                    name={question._id}
                    value = {choice}
                    />{choice}
                    </label>
                )})
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
                    questionService.updateAnswer(question._id, answer)
                }}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion;