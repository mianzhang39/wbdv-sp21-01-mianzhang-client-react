const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
                    // {
                    //     title: "New Module",
                    //     _id: (new Date()).getTime()
                    // }
                ]
            }
            return newState
        case "DELETE_MODULE":
            // alert("delete the module " + action.moduleToDelete.title)
            const newState1 = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if(m._id === action.module._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default moduleReducer







// const initialState = {
//     modules: [
//         {title: 'CS5610', _id: '123'},
//         {title: 'CS3200', _id: '234'},
//         {title: 'CS5200', _id: '345'},
//     ],
//     asdf: 111,
//     dfgdfgdfg: 345345
// }
//
// const moduleReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CREATE_MODULE":
//             // const newModule = {
//             //     title: "New Module",
//             //     _id: (new Date()).getTime()
//             // }
//             return {
//                 ...state,
//                 modules: [
//                     ...state.modules,
//                     action.module
//                 ]
//             }
//         case "DELETE_MODULE":
//             return {
//                 ...state,
//                 modules: state.modules.filter(module => {
//                     if(module._id !== action.moduleToDelete._id) {
//                         return true
//                     } else {
//                         return false
//                     }
//                 })
//             }
//         case "UPDATE_MODULE":
//             return {
//                 ...state,
//                 modules: state.modules.map(module => {
//                     if(module._id === action.updateModule._id) {
//                         return action.updateModule
//                     } else {
//                         return module
//                     }
//                 })
//             }
//         case "FIND_MODULES_FOR_COURSE":
//             return {
//                 ...state,
//                 modules: action.modules
//             }
//         default:
//             return state
//     }
// }
//
// export default moduleReducer