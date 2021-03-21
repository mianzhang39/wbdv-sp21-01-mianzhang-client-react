import React, {useState} from 'react'
import HeadingWidget from "./widgets/heading-widget";
import ParagraphWidget from "./widgets/paragraph-widget";

const GeneralWidget = (
    {
        deleteItem,
        updateItem,
        editing,
        item_widget
    }) => {
    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] = useState({})
    return (
        <div>
            {
                item_widget.id === widget.id &&
                <div>
                    <i onClick={() => deleteItem(item_widget)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {updateItem(widget)}} className="fas fa-check float-right"></i>
                </div>
            }
            {
                item_widget.id !== widget.id &&
                <div>
                <h1>{item_widget.type} Widget</h1>
                <h1>{item_widget.text}</h1>
                <i onClick={() => setWidget(item_widget)} className="fas fa-cog float-right"></i>
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
                    widget={item_widget}/>
            }
        </div>
    )
}

export default GeneralWidget
