import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";

const CourseGrid = ({courses,deleteCourse,updateCourse}) =>
    <div>

        <div className="mb-5 row">
            <div className="col-3 d-block">
                Recent Documents
            </div>

            <div className="col-4 d-none d-md-block font">
                Owned by me
                <i className="fa fa-sort-down"></i>
            </div>

            <div className="col-1 d-block">
                <i className="fas fa-folder fa-2x float-right"></i>
            </div>

            <div className="col-1 d-block">
                <i className="fas fa-sort-alpha-up-alt fa-2x float-right"></i>
            </div>

            <div className="col-1 d-block float-right">
                <Link to="/courses/table">
                    <i className="fa fa-th fa-2x"></i>
                </Link>
            </div>
        </div>

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