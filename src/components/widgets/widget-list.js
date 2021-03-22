import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import widgetActions from "../actions/widget-actions";
import {connect} from "react-redux";
import GeneralWidget from "../editable-widget-item";


const WidgetList = (
    {
        widgets = [],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }) => {
    const {layout,courseId, moduleId, lessonId, topicId, widgetId} = useParams()
    useEffect(() => {
        if(topicId !== "undefined" || typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            <GeneralWidget
                                updateItem={updateWidget}
                                deleteItem={deleteWidget}
                                item = {_widget}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}


const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
})

export default connect(stpm, dtpm)(WidgetList)