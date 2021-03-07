import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import './course-table/course-table.css';


const CourseGrid = ({courses,deleteCourse,updateCourse}) =>
    <div>

        <table className="table">
            <thead>
            <tr>
                <th className="d-none d-sm-table-cell">Recent Docoments</th>
                <th className="d-none d-sm-table-cell">Owned by me<i className="fa fa-sort-down"></i></th>
                <th className="d-block right-fixed">
                    <i className="fas fa-folder fa-2x"></i>
                    <i className="fas fa-sort-alpha-up-alt fa-2x"></i>
                    <Link to="/courses/table/">
                        <i className="fas fa-list fa-2x"></i>
                    </Link></th>
            </tr>
            </thead>
        </table>

        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                )
            }
        </div>

    </div>

export default CourseGrid