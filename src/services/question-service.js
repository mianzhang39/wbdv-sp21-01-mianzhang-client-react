const QUESTION_URL = 'http://localhost:4000/api/questions';
const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const findQuestionById = (qid) => {
    return fetch(`${QUESTION_URL}/${qid}`)
        .then(response => response.json())
}

const updateAnswer = (quid, answer) => {
    fetch(`${QUESTION_URL}/${quid}`, {
        method: 'PUT',
        body: JSON.stringify(answer),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}


export default {
    findQuestionsForQuiz,
    updateAnswer,
    findQuestionById
}
