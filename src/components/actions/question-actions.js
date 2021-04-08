import questionService from "../../services/question-service"

export const FIND_ALL_QUESTIONS_FOR_QUIZ = "FIND_ALL_QUESTIONS_FOR_QUIZ"

export const findQuestionsForQuiz = (dispatch, qid) => {
    questionService.findQuestionsForQuiz(qid)
        .then(questions => dispatch({
            type: FIND_ALL_QUESTIONS_FOR_QUIZ,
            questions: questions
        }))
}

const questionActions = {
    findQuestionsForQuiz
}

export default questionActions