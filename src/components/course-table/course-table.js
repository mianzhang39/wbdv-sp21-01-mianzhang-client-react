import React from 'react'
import CourseRow from "../course-row/course-row";
import {Link} from "react-router-dom";
import './course-table.css';

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

                <table className="table tr-padding">
                    <thead>
                    <tr>
                        <th className="d-block">Title</th>
                        <th className="d-none d-md-table-cell">Owned by<i className="fa fa-sort-down"></i></th>
                        <th className="d-none d-lg-table-cell">Last modified</th>
                        <th className="d-block right-fixed">
                            <i className="fas fa-folder fa-2x"></i>
                            <i className="fas fa-sort-alpha-up-alt fa-2x"></i>
                            <Link to="/courses/grid/">
                                <i className="fa fa-th fa-2x"></i>
                            </Link></th>
                    </tr>
                    </thead>
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
                                owner={course.owner}
                                courseTitle = {this.courseTitle}
                                getCourseTitle = {this.props.getCourseTitle}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


// import React from 'react'
// import CourseRow from "../course-row";
// import {Link} from "react-router-dom";
//
// export default class CourseTable
//     extends React.Component {
//
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }
//
//     render() {
//         return(
//             <div>
//                 <Link to="/courses/grid">
//                     <i className="fas fa-2x fa-th float-right"></i>
//                 </Link>
//                 <h2>Course Table</h2>
//                 <table className="table">
//                     <tbody>
//                     {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
//                     {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
//                     {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
//                     {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
//                     {
//                         this.props.courses.map((course, ndx) =>
//                             <CourseRow
//                                 updateCourse={this.props.updateCourse}
//                                 deleteCourse={this.props.deleteCourse}
//                                 key={ndx}
//                                 course={course}
//                                 title={course.title}
//                                 owner={course.owner}
//                                 lastModified={course.lastModified}
//                             />)
//                     }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }





