import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <h1>
        <i className="fas fa-arrow-left"
           onClick={() => history.goBack()}></i>
        Course Editor
        <Link to="/courses/table">
            <i className="fas fa-times float-right"></i>
        </Link>
    </h1>

// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor

