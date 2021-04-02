

import widgetService from "../../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(topicId)
        .then(widget => dispatch({type: CREATE_WIDGET, widget: widget}))
}

export const updateWidget = (dispatch, id, newItem) => {

    widgetService.updateWidget(id, newItem)
        .then(status => dispatch({type: UPDATE_WIDGET, updateWidget: newItem}))
}

export const deleteWidget = (dispatch, widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
        .then(status => dispatch({type: DELETE_WIDGET, widgetToDelete: widgetToDelete}))
}

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))
}

const widgetActions = {
    createWidget, updateWidget, deleteWidget, findWidgetsForTopic
}

export default widgetActions