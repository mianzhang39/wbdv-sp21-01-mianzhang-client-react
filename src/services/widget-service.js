

export const createWidget = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())


export const findWidgetsForTopic = (topicid) =>
    fetch(`http://localhost:8080/api/topics/${topicid}/widgets`)
        .then(response => response.json())


export const updateWidget = (id, widget) =>
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())


export const deleteWidget = (id) =>
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "DELETE"
    }).then(response => response.json())


const api = {
    createWidget, findWidgetsForTopic,
    updateWidget, deleteWidget
};

export default api;




