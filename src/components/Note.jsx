import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

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
            <button onClick={handleEdit}> <EditOutlinedIcon /> </button>
            <button onClick={handleDelete}> <DeleteOutlinedIcon /> </button>
        </div>
    );
}

export default Note;