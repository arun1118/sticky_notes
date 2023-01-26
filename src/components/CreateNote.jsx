import React,{useState} from "react";

function CreateNote(props){

    const [note,setNote]=useState({title: "",content: "",});

    function handleAdd(event){
        if(note.title==="" && note.content===""){
            alert("empty note");    
        }
        else{
            if(note.title===""){
                let minLen=Math.min(note.content.length,5);
                note.title=note.content.substring(0,minLen);
            }
            props.onAdd(note);
        }
        setNote({title: "",content: "",});
        event.preventDefault();
    }

    function handleChange(event){
        const {name,value} = event.target;

        setNote(prevValue=>{
            return(
                {
                    ...prevValue,
                    [name]: value
                }
            );
        });
    }

    return(
        <div>
            <form>
                <input 
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={note.title}
                />
                <textarea
                name="content"
                rows="3"
                placeholder="Write a note..."
                onChange={handleChange}
                value={note.content} 
                />
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;