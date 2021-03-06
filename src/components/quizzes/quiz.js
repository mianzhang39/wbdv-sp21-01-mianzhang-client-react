import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizzesService from "../../services/quizzes-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[])
    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
            <button
                className="btn btn-success float-right"
                onClick={() => {
                    quizzesService.submitQuiz (quizId, questions)
                }}>
                Submit
            </button>
        </div>
    );
}

export default Quiz;
