import React, {useState} from "react";
import './question-color-bar.css'

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [graded, setGraded] = useState(false)
    const choices = ["false","true"]
    return (
        <div>
            <h4>
                {question.question}
                {
                    graded && answer == question.correct &&
                    <i className="fas fa-check check"></i>
                    // && console.log(answer,question.correct)

                }
                {
                    graded && answer != question.correct &&
                    <i className="fas fa-times times"></i>
                    // && console.log(answer,question.correct)
                }

            </h4>


            {/*// ${graded? ((answer == choice || choice == question.correct)? ((choice == question.correct)? 'correct' : 'incorrect'): 'initial-highlight'):'initial-highlight' }*/}

            <ul className='list-group'>
                {
                    choices.map((choice) => {
                        const RadioColor = (answer, choice,graded) => {
                            if (graded) {
                                if (choice == answer || choice == question.correct) {
                                    if (choice == question.correct){
                                        return 'correct'
                                    }
                                    else {
                                        return 'incorrect'
                                    }
                                }
                            }
                            else {
                                return 'initial-highlight'
                            }
                        }
                            return (
                                <label className={`list-group-item ${RadioColor(answer, choice,graded)}`}>
                                    <input
                                        onClick={() => {
                                            setAnswer(choice)
                                            setGraded(false)
                                        }}
                                        type="radio"
                                        name={question._id}
                                    />{choice}
                                </label>
                            )})}
            </ul>


            <label>
                Your answer: {answer}
            </label>

            <br/>

            <button
                class="btn btn-success"
                onClick={() => setGraded(true)}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion;