import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        newCourse:'New Course'
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        // alert('add course')
        const newCourse = {
            title: 'New Course',
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }


    addCourseWithTitle = (courseTitle) => {
        const newCourse = {
            title: courseTitle,
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }



    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home fa-3x float-right"></i>
                </Link>

                <div className="wbdv-sticky-nav-bar">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2 d-none d-sm-block">
                            <h4>
                                Course Manager
                            </h4>
                        </div>
                        <div className="col-8">
                            <input className="form-control"
                                   onChange={(e) => this.setState(
                                       {...this.state,newCourse: e.target.value})}
                                   placeholder="New Course Title"
                                    value={this.state.newCourse} a/>

                        </div>
                        <div className="col-1">
                            <button onClick={() => {
                                this.addCourseWithTitle(this.state.newCourse)
                                this.setState({...this.state,newCourse:''})
                            }
                                }>
                                <i className="fa fa-plus-circle fa-3x button1_color"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid
                        courses={this.state.courses}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}

                <div className="row">
                    <div className="col-12">
                        <button onClick={this.addCourse} className="float-right">
                            <i className="fa fa-plus-circle fa-3x"></i>
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}
// export default CourseManager