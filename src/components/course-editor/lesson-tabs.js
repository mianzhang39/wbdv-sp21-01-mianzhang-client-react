import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service';

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) => {
    const {layout,courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" || typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            {/*<h2>Lessons</h2>*/}
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                item={lesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (lesson) => {
        lessonService.updateLesson(lesson._id,lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (lesson) => {
        lessonService.deleteLesson(lesson._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete:lesson
            }))
    },
})

export default connect(stpm, dtpm)(LessonTabs)



// import React, {useEffect} from 'react'
// import {connect} from "react-redux";
// import EditableItem from "./editable-item";
// import {useParams} from "react-router-dom";
// import lessonService from '../services/lesson-service'
// import moduleService from "../services/module-service";
//
// const LessonTabs = (
//     {
//         myLessons=[],
//         createLessonForModule,
//         deleteLessons,
//         updateLessons,
//         findLessonsForModule,
//     }) => {
//     const {layout,courseId, moduleId, lessonId} = useParams();
//     useEffect(() => {
//         if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
//             findLessonsForModule(moduleId)
//         }
//     }, [moduleId])
//     return(
//         <div>
//             <h2>Lessons</h2>
//             <ul className="nav nav-pills">
//                 {
//                     myLessons.map(lesson =>
//                         <li className="nav-item">
//                             <EditableItem
//                                 active={lesson._id === lessonId}
//                                 updateItem={updateLessons}
//                                 deleteItem={deleteLessons}
//                                 to={`/courses/${layout}/${courseId}/${moduleId}/${lesson._id}`}
//                                 item={lesson}/>
//                         </li>
//                     )
//                 }
//                 <li>
//                     <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
//                 </li>
//             </ul>
//         </div>)}
//
// const stpm = (state) => ({
//     lessons: state.lessonReducer.lessons
// })
//
// const dtpm = (dispatch) => ({
//     findLessonsForModule: (moduleId) => {
//         lessonService.findLessonsForModule(moduleId)
//             .then(theLessons => dispatch({
//                 type: "FIND_LESSONS",
//                 lessons:theLessons
//             }))
//     },
//     createLessonForModule: (moduleId) => {
//         lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
//             .then(theActualLesson => dispatch({
//                 type: "CREATE_LESSON",
//                 lesson:theActualLesson
//             }))
//     },
//     updateLessons: (lesson) => {
//         lessonService.updateLesson(lesson._id,lesson)
//             .then(status => dispatch({
//                 type: "UPDATE_LESSON",
//                 lesson
//             }))
//     },
//     deleteLesson: (item) => {
//         moduleService.deleteModule(item._id)
//             .then(status => dispatch({
//                 type: "DELETE_LESSON",
//                 lessonToDelete:item
//             }))
//     },
//
//
// })
//
// export default connect(stpm, dtpm)(LessonTabs)


// ------------


// import React from 'react'
// import {connect} from "react-redux";
// import EditableItem from "./editable-item";
// import {useParams} from "react-router-dom";
//
// const LessonTabs = (
//     {
//         lessons=[]
//     }) => {
//     const {layout, courseId, moduleId, lessonId} = useParams();
//     return(<div>
//         <h2>Lesson Tabs</h2>
//         <ul className="nav nav-tabs">
//             {
//                 lessons.map(lesson =>
//                     <li className="nav-item">
//                         <EditableItem
//                             to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
//                             item={lesson}/>
//                     </li>
//                 )
//             }
//         </ul>
//     </div>)}
//
// const stpm = (state) => ({
//     lessons: state.lessonReducer.lessons
// })
// const dtpm = (dispatch) => ({
//     ewq: () => {}
// })
//
// const pm = connect(stpm, dtpm)
// export default pm(LessonTabs)