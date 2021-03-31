import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                 widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                 widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input
                        onChange={(e) => {
                            setWidget({...widget, ordered: e.target.value == 'on'})}}
                        type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        rows={10}
                        value={widget.text}
                        className="form-control">
                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget