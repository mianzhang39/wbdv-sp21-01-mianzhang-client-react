import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className="d-none d-md-table-cell">{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }


            </td>
        </tr>)
}

export default CourseRow


// <div className="mb-3 row">
//     <div className="col-sm-3">
//         <a href="../course-editor/course-editor.template.client.html">
//             <i className="fa fa-file"></i>
//             CS4550 Software Engineering Undergraduate
//         </a>
//     </div>
//     <div className="col-sm-3 d-none d-sm-block">
//         me
//     </div>
//     <div className="col-sm-3 d-none d-sm-block">
//         6:45PM
//     </div>
//     <div className="col-sm-1 d-none d-sm-block">
//     </div>
//     <div className="col-sm-1 d-none d-sm-block">
//     </div>
//     <div className="col-1">
//         <i className="fa fa-times"></i>
//     </div>
// </div>
//
//     return(
//         <div className="mb-3 row">
//             <div className="col-sm-3">
//                 {
//                     !editing &&
//                     <Link to="/editor">
//                         {course.title}
//                     </Link>
//                 }
//                 {
//                     editing &&
//                     <input
//                         className="form-control"
//                         onChange={(e) => setTitle(e.target.value)}
//                         value={title}/>
//                 }
//             </div>
//             <div className="col-sm-3 d-none d-sm-block">{course.owner}</div>
//             <div className="col-sm-3 d-none d-sm-block">{course.lastModified}</div>
//             <td>
//                 <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
//                 {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}
//
//                 {
//                     editing &&
//                     <i onClick={() => saveCourse()} className="fas fa-check"></i>
//                 }
//
//                 {
//                     !editing &&
//                     <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
//                 }
//
//
//             </td>
//         </div>)
//     }
//
//     export default CourseRow