import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseCard = (
    {
        course,
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
    <div className="card" style={{width: "18rem", margin: "15px"}}>
        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">
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
            </h5>
            <p className="card-text">Course Description</p>
            <Link to="/editor" className="btn btn-primary">
                Go somewhere
            </Link>
            {/*<i onClick={() => deleteCourse(course)} className="fas fa-trash float-right fa-2x"></i>*/}
            {
                editing &&
                <div><i onClick={() => saveCourse()} className="fas fa-check"></i>
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i></div>
            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit float-right fa-2x"></i>
            }



        </div>
    </div>

    )}


export default CourseCard

