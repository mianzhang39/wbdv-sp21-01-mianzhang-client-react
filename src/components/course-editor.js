import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    return(
        <Provider store={store}>
            <h1>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor {courseId} {moduleId}
                <i className="fas fa-times float-right"
                   onClick={() => history.goBack()}></i>
            </h1>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                </div>
            </div>
        </Provider>)
}

export default CourseEditor
// import React from 'react'
// import {Link} from "react-router-dom";
//
// const CourseEditor = ({history}) =>
// <div>
//
//
// <div className="wbdv-sticky-nav-bar">
//     <div className="row">
//         <div className="col-1">
//             <i className="fa fa-times fa-2x"></i>
//         </div>
//
//         <div className="col-2">
//             <h4>
//                 CS5610 - WebDev
//             </h4>
//         </div>
//
//
//
//         <div className="col-1">
//             <i className="fa fa-plus fa-2x"></i>
//         </div>
//     </div>
// </div>
//
//
// <div className="row">

//     <div className="col-8 rhs_pills">
//         <ul className="nav nav-pills nav-fill">
//             <li className="nav-item ">
//                 <a className="nav-link pills" href="#">
//                     Topic 1
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                     Topic 2
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link pills" href="#">
//                     Topic 3
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link pills" href="#">
//                     Topic 4
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
//                     <i className="fa fa-plus"></i>
//                 </a>
//             </li>
//         </ul>
//     </div>
// </div>
// </div>
// export default CourseEditor