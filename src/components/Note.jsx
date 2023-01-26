import React from "react";

function Note(props){
    
    function handleDelete(){
        props.onDelete(props.id);
    }

    function handleEdit(){
        props.onEdit(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Note;