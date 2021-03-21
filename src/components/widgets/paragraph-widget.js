import React from 'react'
import HeadingWidget from "./heading-widget";

const ParagraphWidget = ({widget, setWidget, editing}) =>
    <div>

        { widget.type === "HEADING" &&
        <HeadingWidget
            setWidget={setWidget}
            editing={ 1 === 1 }
            widget={widget}/>
        }


        {
            editing &&
            <div>
            <textarea
                onChange={(e) => setWidget({...widget, text: e.target.value})}
                value={widget.text}
                className="form-control"></textarea>
            <select onChange={(e) => setWidget(widget => ({...widget, type : (e.target.value)}))}
                    value={widget.type}
                    className="form-control">
                <option value={"HEADING"}>Heading</option>
                <option value={"PARAGRAPH"}>Paragraph</option>
                <option>Video</option>
                <option>Image</option>
                <option>link</option>
                <option>List</option>
                <option>HTML</option>
            </select>

            </div>
        }
        {
            !editing &&
            <p>
                {widget.text}
            </p>
        }
    </div>


export default ParagraphWidget