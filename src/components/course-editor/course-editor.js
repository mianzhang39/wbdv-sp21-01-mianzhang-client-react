import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicTabs from "./topic-tabs";
import topicReducer from "../../reducers/topic-reducer";
import WidgetList from "../widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params, courseTitle}) => {
    const {layout, courseId, moduleId} = useParams();
    return(
        <Provider store={store}>
            <h1>
                {/*<Link to={`/courses/${layout}`}>*/}
                {/*    <i className="fas fa-arrow-left"></i>*/}
                {/*</Link>*/}
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-times"></i>
                </Link>
                {courseTitle}
                {/*<i className="fas fa-times float-right"*/}
                {/*   onClick={() => history.goBack()}></i>*/}
            </h1>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <div className="row">
                        <LessonTabs/>
                    </div>
                    <div className="row">
                        <TopicTabs/>
                    </div>
                    <div className="row">
                        <WidgetList/>
                    </div>
                </div>
            </div>

        </Provider>)
}

export default CourseEditor



