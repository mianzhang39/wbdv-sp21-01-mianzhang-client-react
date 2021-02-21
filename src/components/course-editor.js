import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
<div>
    <h1>
        <i className="fas fa-arrow-left"
           onClick={() => history.goBack()}></i>
        Course Editor
        <Link to="/courses/table">
            <i className="fas fa-times float-right"></i>
        </Link>
    </h1>


<div className="wbdv-sticky-nav-bar">
    <div className="row">
        <div className="col-1">
            <i className="fa fa-times fa-2x"></i>
        </div>

        <div className="col-2">
            <h4>
                CS5610 - WebDev
            </h4>
        </div>

        <div className="col-8">
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <a className="nav-link  tabfont_color" href="#">
                        Build
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Pages
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  tabfont_color" href="#">
                        Theme
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  tabfont_color" href="#">
                        Store
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  tabfont_color" href="#">
                        Apps
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  tabfont_color" href="#">
                        Settings
                    </a>
                </li>
            </ul>
        </div>

        <div className="col-1">
            <i className="fa fa-plus fa-2x"></i>
        </div>
    </div>
</div>


<div className="row">
    <div className="col-4 lhs_bar">

        <ul className="list-group">
            <li className="list-group-item item">
                Module 1 - JQuery
                <i className="pull-right fa fa-times"></i>
            </li>



                <li className="list-group-item item">
                    Module 2 - React
                    <i className="pull-right fa fa-times"></i>
                </li>



                    <li className="list-group-item item">
                        Module 3 - Redux
                        <i className="pull-right fa fa-times"></i>
                    </li>


                        <li className="list-group-item item">
                            Module 4 - Native
                            <i className="pull-right fa fa-times"></i>
                        </li>


                            <li className="list-group-item item">
                                Module 5 - Angular
                                <i className="pull-right fa fa-times"></i>
                            </li>



                                <li className="list-group-item item">
                                    Module 6 - Node
                                    <i className="pull-right fa fa-times"></i>
                                </li>


                                    <li className="list-group-item active">
                                        Module 7 - Mongo
                                        <i className="pull-right fa fa-times"></i>
                                    </li>



                                        <li>
                                            <i className="fa fa-plus float-right tabfont_color"></i>
                                        </li>
        </ul>

    </div>

    <div className="col-8 rhs_pills">
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item ">
                <a className="nav-link pills" href="#">
                    Topic 1
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Topic 2
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link pills" href="#">
                    Topic 3
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link pills" href="#">
                    Topic 4
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                    <i className="fa fa-plus"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
</div>



export default CourseEditor

