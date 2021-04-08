import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [selectedOption, setSelectedOption] = useState("")
    const [graded, setGraded] = useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {
                    graded && answer == question.correct &&
                    <i className="fas fa-check"></i>

                }
                {
                    graded && answer != question.correct &&
                    <i className="fas fa-times"></i>
                }

            </h4>
            {question.correct}

            <label className="form-control">
                <input
                    id = "1"
                    type="radio"
                    onClick={() => {
                        setAnswer("true")
                        setSelectedOption("1")
                        setGraded(false)
                    }}
                    name={question._id}
                    onChange={(e) => {console.log(e.target.value)}}/>
                    True
            </label>

            <label
                className="form-control">
                <input
                    id = "2"
                    type="radio"
                    onClick={() => {
                        setAnswer("false")
                        setSelectedOption("2")
                        setGraded(false)
                    }}
                    name={question._id}/>
                    False
            </label>

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