import React from 'react'

const HeadingWidget = ({widget, setWidget,editing}) => {


    return(

    <div>




        {/*<label>Heading</label>*/}

        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
        {widget.size === 4 && <h4>{widget.text}</h4>}
        {widget.size === 5 && <h5>{widget.text}</h5>}
        {widget.size === 6 && <h6>{widget.text}</h6>}

        {
            editing &&
            <div>
                <input onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))} value={widget.text}
                       className="form-control"/>
                <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))}
                        value={widget.size}
                        className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
                <select onChange={(e) => setWidget(widget => ({...widget, type: (e.target.value)}))}
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
            <>
                {/*{widget.text}*/}
                {widget.size === 1 && <h1>{widget.text}</h1>}
                {widget.size === 2 && <h2>{widget.text}</h2>}
                {widget.size === 3 && <h3>{widget.text}</h3>}
                {widget.size === 4 && <h4>{widget.text}</h4>}
                {widget.size === 5 && <h5>{widget.text}</h5>}
                {widget.size === 6 && <h6>{widget.text}</h6>}
            </>
        }
    </div>
)}
export default HeadingWidget