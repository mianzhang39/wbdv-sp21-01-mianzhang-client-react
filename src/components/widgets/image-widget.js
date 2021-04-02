import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <div>
                    URL
                    <input
                        onChange={(e) => setWidget({...widget, src: e.target.value})}
                        value={widget.src}
                        className="form-control"/>
                    width
                    <input
                        onChange={(e) => setWidget({...widget, width: e.target.value})}
                        value={widget.width}
                        className="form-control"/>
                    height
                    <input
                        onChange={(e) => setWidget({...widget, height: e.target.value})}
                        value={widget.height}
                        className="form-control"/>
                </div>
            }

            {
                !editing &&

                <img
                    src={widget.src}
                    width = {widget.width}
                    height={widget.height}/>

            }
        </div>
    )
}

export default ImageWidget