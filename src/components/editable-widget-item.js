import React, {useState} from 'react'
import HeadingWidget from "./widgets/heading-widget";
import ParagraphWidget from "./widgets/paragraph-widget";
import ImageWidget from "./widgets/image-widget";
import ListWidget from "./widgets/list-widget";

const GeneralWidget = (
    {
        deleteItem,
        updateItem,
        item
    }) => {
    const [widget, setWidget] = useState(item)
    const [id, setId] = useState(false)

    return (
        <div>
            {
                id === widget.id &&
                <div>
                    <i onClick={() => deleteItem(item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateItem(item.id, widget)
                    }} className="fas fa-check float-right"></i>
                </div>
            }


            {
                id !== widget.id &&
                <>
                    <h1> {item.id} {item.type} Widget</h1>
                    <i onClick={() => {
                        setId(item.id)
                        // setEditing(true)
                    }} className="fas fa-cog float-right"></i>
                </>
            }


            {
                item.type === "HEADING" &&
                <HeadingWidget
                    setWidget={setWidget}
                    editing={item.id === id}
                    widget={widget}/>
            }
            {
                item.type === "PARAGRAPH" &&
                <ParagraphWidget
                    setWidget={setWidget}
                    editing={item.id === id}
                    widget={widget}/>
            }

            {
                item.type === "LIST" &&
                <ListWidget
                    setWidget={setWidget}
                    editing={item.id === id}
                    widget={widget}/>
            }
            {
                item.type === "IMAGE" &&
                <ImageWidget
                    setWidget={setWidget}
                    editing={item.id === id}
                    widget={widget}/>
            }
        </div>
    )
}

export default GeneralWidget
