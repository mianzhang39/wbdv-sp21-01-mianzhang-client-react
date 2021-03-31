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
    const [widget, setWidget] = useState({})
    // const [editing, setEditing] = useState(false)

    return (
        <div>
            {
                item.id === widget.id &&
                <div>
                    <i onClick={() => deleteItem(item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateItem(item.id, widget)
                        // setEditing(false)
                    }} className="fas fa-check float-right"></i>
                </div>
            }
            {/*{*/}
            {/*    item.id !== widget.id && item.type === 'LIST' && item.ordered &&*/}
            {/*    <div>*/}
            {/*    <h1> {item.id} {item.type} Widget</h1>*/}
            {/*    <i onClick={() => {*/}
            {/*        setWidget(item)*/}
            {/*        // setEditing(true)*/}
            {/*    }} className="fas fa-cog float-right"></i>*/}
            {/*    </div>*/}
            {/*}*/}

            {/*{*/}
            {/*    item.id !== widget.id && item.type === 'LIST' && !item.ordered &&*/}
            {/*    <div>*/}
            {/*        <h1> {item.id} {item.type} Widget</h1>*/}
            {/*        <i onClick={() => {*/}
            {/*            setWidget(item)*/}
            {/*            // setEditing(true)*/}
            {/*        }} className="fas fa-cog float-right"></i>*/}
            {/*    </div>*/}
            {/*}*/}


            {
                item.id !== widget.id &&
                <>
                    <h1> {item.id} {item.type} Widget</h1>
                    <i onClick={() => {
                        setWidget(item)
                        // setEditing(true)
                    }} className="fas fa-cog float-right"></i>
                </>
            }






            {/*{*/}
            {/*    item.id !== widget.id && item.type !== 'LIST' &&*/}
            {/*    <div>*/}
            {/*        <h1> {item.id} {item.type} Widget</h1>*/}

            {/*        {item.size === 1 && <h1>{item.text}</h1>}*/}
            {/*        {item.size === 2 && <h2>{item.text}</h2>}*/}
            {/*        {item.size === 3 && <h3>{item.text}</h3>}*/}
            {/*        {item.size === 4 && <h4>{item.text}</h4>}*/}
            {/*        {item.size === 5 && <h5>{item.text}</h5>}*/}
            {/*        {item.size === 6 && <h6>{item.text}</h6>}*/}


            {/*        <i onClick={() => {*/}
            {/*            setWidget(item)*/}
            {/*            // setEditing(true)*/}
            {/*        }} className="fas fa-cog float-right"></i>*/}
            {/*    </div>*/}
            {/*}*/}


            {
                item.type === "HEADING" &&
                <HeadingWidget
                    setWidget={setWidget}
                    editing={item.id === widget.id}
                    widget={widget}/>
            }
            {
                item.type === "PARAGRAPH" &&
                <ParagraphWidget
                    setWidget={setWidget}
                    editing={item.id === widget.id}
                    widget={widget}/>
            }

            {
                item.type === "LIST" &&
                <ListWidget
                    setWidget={setWidget}
                    editing={item.id === widget.id}
                    widget={widget}/>
            }
            {
                item.type === "IMAGE" &&
                <ImageWidget
                    setWidget={setWidget}
                    editing={item.id === widget.id}
                    widget={widget}/>
            }
        </div>
    )
}

export default GeneralWidget
