const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => response.json())
        // .then(result => console.log(result))
}


// const createAttempt = (quizId, questions) => {
//     fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
//         method: 'POST',
//         body: JSON.stringify(questions),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())
//     // .then(result => console.log(result))
// }


export default {
    submitQuiz
}
