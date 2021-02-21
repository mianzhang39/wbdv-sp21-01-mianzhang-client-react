import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

                <div className="mb-3 row">
                    <div className="col-3 d-block">
                        Title
                    </div>

                    <div className="col-md-3 d-none d-md-block font">
                        Owned by
                        <i className="fa fa-sort-down"></i>
                    </div>

                    <div className="col-lg-3 d-none d-lg-block font">
                        Last modified
                    </div>

                    <div className="col-1 d-block">
                        <i className="fas fa-folder fa-2x"></i>
                    </div>

                    <div className="col-1 d-block">
                        <i className="fas fa-sort-alpha-up-alt fa-2x"></i>
                    </div>

                    <div className="col-1 d-block">
                        <Link to="/courses/grid">
                            <i className="fa fa-th fa-2x"></i>
                        </Link>
                    </div>
                </div>


                <table className="table">
                    <thead></thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}