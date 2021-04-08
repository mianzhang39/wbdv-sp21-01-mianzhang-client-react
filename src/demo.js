// {
//     question.choices.filter((choice) => {
//         if ({choice} == answer) {
//             return(
//                 <label className="form-control correct" >
//                     <input
//                         type="radio"
//                         name={question._id}
//                         id = {choice}
//                         onClick={() => setAnswer(choice)}
//                     />
//                     {choice}
//                 </label>
//             )
//         } else {
//             return(
//                 <label className="form-control incorrect" >
//                     <input
//                         type="radio"
//                         name={question._id}
//                         id = {choice}
//                         onClick={() => setAnswer(choice)}
//                     />
//                     {choice}
//                 </label>
//             )
//         }
//
//     })
// }


topics: state.topics.filter(topic => {
    if(topic._id === action.topicToDelete._id) {
        return false
    } else {
        return true
    }
})