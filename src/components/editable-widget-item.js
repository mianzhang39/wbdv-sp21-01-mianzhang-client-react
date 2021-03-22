import React, {useState} from 'react'
import HeadingWidget from "./widgets/heading-widget";
import ParagraphWidget from "./widgets/paragraph-widget";

const GeneralWidget = (
    {
        deleteItem,
        updateItem,
        item_widget
    }) => {
    const [widget, setWidget] = useState({})
    const [editing, setEditing] = useState(false)
    return (
        <div>
            {
                item_widget.id === widget.id &&
                <div>
                    <i onClick={() => deleteItem(item_widget)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateItem(widget)
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>
                </div>
            }
            {
                item_widget.id !== widget.id &&
                <div>
                <h1>{item_widget.type} Widget</h1>


                {item_widget.size === 1 && <h1>{item_widget.text}</h1>}
                {item_widget.size === 2 && <h2>{item_widget.text}</h2>}
                {item_widget.size === 3 && <h3>{item_widget.text}</h3>}
                {item_widget.size === 4 && <h4>{item_widget.text}</h4>}
                {item_widget.size === 5 && <h5>{item_widget.text}</h5>}
                {item_widget.size === 6 && <h6>{item_widget.text}</h6>}


                <i onClick={() => {
                    setWidget(item_widget)
                    setEditing(true)
                }} className="fas fa-cog float-right"></i>
                </div>
            }

            {
                item_widget.type === "HEADING" &&
                <HeadingWidget
                    setWidget={setWidget}
                    editing={item_widget.id === widget.id}
                    widget={widget}/>
            }
            {
                item_widget.type === "PARAGRAPH" &&
                <ParagraphWidget
                    setWidget={setWidget}
                    editing={item_widget.id === widget.id}
                    widget={widget}/>
            }
        </div>
    )
}

export default GeneralWidget
