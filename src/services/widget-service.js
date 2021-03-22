const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidget = (topicId) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())


export const findWidgetsForTopic = (topicid) =>
    fetch(`${WIDGET_URL}/topics/${topicid}/widgets`)
        .then(response => response.json())


export const updateWidget = (id, widget) =>
    fetch(`${WIDGET_URL}/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())


export const deleteWidget = (id) =>
    fetch(`${WIDGET_URL}/widgets/${id}`, {
        method: "DELETE"
    }).then(response => response.json())


const api = {
    createWidget, findWidgetsForTopic,
    updateWidget, deleteWidget
};

export default api;




