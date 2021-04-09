import React, {useState} from "react";
import './question-color-bar.css'

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
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

            {(answer != "") && (answer != question.correct) &&
            <li className={`list-group-item
            ${
                ("true" == answer) && graded ? 'incorrect'
                    :
                    ("false" == answer) && graded ? 'correct'
                        : 'initial-highlight'}`}>

                <label>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("true")
                            setGraded(false)
                        }}
                        name={question._id}/>
                    true
                </label>
            </li>}

            {(answer != "") && (answer != question.correct) &&
            <li className={`list-group-item
            ${
                ("true" == answer) && graded ? 'correct'
                    :
                    ("false" == answer) && graded ? 'incorrect'
                        : 'initial-highlight'}`}>

                <label>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("false")
                            setGraded(false)
                        }}
                        name={question._id}/>
                    false
                </label>
            </li>}

            {(answer != "") && (answer == question.correct) &&
            <li className={`list-group-item
            ${
                ("true" == answer) && graded ? 'correct'
                    : 'initial-highlight'}`}>

                <label>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("true")
                            setGraded(false)
                        }}
                        name={question._id}/>
                    true
                </label>
            </li>}


            {(answer != "") && (answer == question.correct) &&
            <li className={`list-group-item
            ${
                    ("false" == answer) && graded ? 'correct'
                        : 'initial-highlight'}`}>

                <label>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("false")
                            setGraded(false)
                        }}
                        name={question._id}/>
                    false
                </label>
            </li>}

            {(answer == "") &&
            <li className="list-group-item initial-highlight">

                <label>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("true")
                            setGraded(false)
                        }}
                        name={question._id}/>
                    true
                </label>
            </li>}

            {(answer == "") &&
            <li className="list-group-item initial-highlight">

                <label>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("false")
                            setGraded(false)
                        }}
                        name={question._id}/>
                    false
                </label>
            </li>}












            {/*// <li className={`list-group-item*/}
            {/*// ${*/}
            {/*//     ("true" == answer) && (answer == question.correct) && graded ? 'correct'*/}
            {/*//         :*/}
            {/*//         ("true" == answer) && (answer != question.correct) && graded ? 'incorrect'*/}
            {/*//             : 'initial-highlight'}`}>*/}
            {/*//*/}
            {/*// <label>*/}
            {/*//     <input*/}
            {/*//         id = "1"*/}
            {/*//         type="radio"*/}
            {/*//         onClick={() => {*/}
            {/*//             setAnswer("true")*/}
            {/*//             setGraded(false)*/}
            {/*//         }}*/}
            {/*//         name={question._id}*/}
            {/*//         onChange={(e) => {console.log(e.target.value)}}/>*/}
            {/*//         true*/}
            {/*// </label>*/}
            {/*// </li>*/}



            {/*<li className={`list-group-item*/}
            {/*${*/}
            {/*    ("false" == answer) && (answer == question.correct) && graded ? 'correct'*/}
            {/*        :*/}
            {/*        ("false" == answer) && (answer != question.correct) && graded ? 'incorrect'*/}
            {/*            : 'initial-highlight'}`}>*/}
            {/*<label>*/}
            {/*    <input*/}
            {/*        id = "2"*/}
            {/*        type="radio"*/}
            {/*        onClick={() => {*/}
            {/*            setAnswer("false")*/}
            {/*            setGraded(false)*/}
            {/*        }}*/}
            {/*        name={question._id}/>*/}
            {/*        false*/}
            {/*</label>*/}
            {/*</li>*/}

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