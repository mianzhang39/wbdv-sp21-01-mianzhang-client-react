const initialState = {
    questions: []
}

const questionReducer = (state=initialState, action) => {
    switch (action.type) {

        case "FIND_ALL_QUESTIONS_FOR_QUIZ":
            return {
                ...state,
                questions: action.questions
            }

        default:
            return state
    }
}

export default questionReducer
