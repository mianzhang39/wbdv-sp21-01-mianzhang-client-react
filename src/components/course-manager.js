import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import "../course-list.css"
import CourseEditor from "./course-editor/course-editor";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        newCourse:'New Course',
        courseTitle:''
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

    findCourseById = (course) =>{
        courseService.findCourseById(course._id)
            .then(courses => this.setState({courses}))
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

    getCourseTitle = (title) => {
        this.setState({
            courseTitle:title
        })
    }


    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home fa-3x float-right"></i>
                </Link>



                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
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
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}
                        getCourseTitle = {this.getCourseTitle}
                        courseTitle = {this.state.courseTitle}
                    />
                    <div className="row">
                        <div className="col-12">
                            <button onClick={this.addCourse} className="float-right button2_color" >
                                <i className="fa fa-plus-circle fa-3x"></i>
                            </button>
                        </div>
                    </div>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
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
                        <div className="row">
                            <div className="col-12">
                                <button onClick={this.addCourse} className="float-right button2_color" >
                                    <i className="fa fa-plus-circle fa-3x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <CourseGrid
                        courses={this.state.courses}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props} courseTitle={this.state.courseTitle} />}>
                </Route>


            </div>

        )
    }
}