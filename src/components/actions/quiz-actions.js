

import quizService from "../../services/quiz-service"

export const FIND_QUIZ_BY_ID = "FIND_QUIZ_BY_ID"
export const FIND_ALL_QUIZZES = "FIND_ALL_QUIZZES"
// export const FIND_QUIZZES_FOR_COURSE = "FIND_QUIZZES_FOR_COURSE"

export const findQuizById = (dispatch, quizId) => {
    quizService.findQuizById(quizId)
        .then(quizzes => dispatch({
            type: FIND_QUIZ_BY_ID,
            quizzes: quizzes
        }))
}

export const findAllQuizzes = (dispatch) => {
    quizService.findAllQuizzes()
        .then(quizzes => dispatch({
            type: FIND_ALL_QUIZZES,
            quizzes: quizzes
        }))
}

// export const findQuizzesForCourse = (dispatch, courseId) => {
//     quizService.findQuizzesForCourse(courseId)
//         .then(quizzes => dispatch({
//             type: FIND_QUIZZES_FOR_COURSE,
//             quizzes: quizzes
//         }))
// }

const quizActions = {
    findQuizById,
    findAllQuizzes
    // findQuizzesForCourse
}

export default quizActions