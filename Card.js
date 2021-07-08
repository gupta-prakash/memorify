import React, { useState } from 'react'
import '../App.css';

const Card = props => {
    const [showEdit, setShowEdit] = useState(false)
    const toggleShowEdit = () => setShowEdit(!showEdit)

    // const[edit_save,setEdit_save]=useState('Edit');    
    // if(showEdit){
    //     setEdit_save("Save")

    // }else{
    //     setEdit_save("Edit")
    // }

    const fontColor={
        color:null
    }
    if(props.light_dark) fontColor.color='black'
    else fontColor.color='white' ;

    return (
        <div>
            <div className="card">
                <img src={props.avatar} alt="card Avatar"></img>
                <div className="container">
                    <h4 className="title" style={fontColor}>{props.title}</h4>
                    <p className="description" style={fontColor}>{props.description} <span id="readMore" onClick={props.onReadMore}>...read more</span> </p>

                    {showEdit && <div>
                        <div>
                            <input className="inputTitle" type="text" id="title" value={props.title} onChange={props.onChangeInputTitle}></input>
                        </div>
                        <div>
                            <textarea className="inputDescription" value={props.fullDescription} id="description" onChange={props.onChangeInputDescription}></textarea>
                        </div>
                    </div>}

                    <div>
                        <button className="btn editButton" onClick={toggleShowEdit}>Edit</button>
                        <button className="btn deleteButton" onClick={props.onDelete}>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
