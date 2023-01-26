import React,{useState} from "react";
import Header from "./Header";
// import Footer from "./Footer";
// import CreateNote from "./CreateNote";
import Note from "./Note";

function App(){
    
    ///////////////////// declaration of all use states /////////////////////////////////////////


    // use state of collection of all notes
    // const [allNotes,setAllNotes]=useState([]);
    const [allNotes,setAllNotes]=useState(()=>{
        console.log("fetching data from local storage");
        return (JSON.parse(localStorage.getItem("allNotes")) || []);
    });

    // use state of single note that is to be added or edited
    const [note,setNote]=useState({title: "",content: "",});


    //////////////////////////////// use Effects //////////////////////////////////

    React.useEffect(()=>{
        console.log("storing in the local storage");
        localStorage.setItem("allNotes",JSON.stringify(allNotes));
    },[allNotes])


    ///////////////////////// handling events functions  ///////////////////////////////////////

    function handleAdd(event){
        if(note.title==="" && note.content===""){
            alert("empty note");    
        }
        else{
            if(note.title===""){
                let minLen=Math.min(note.content.length,5);
                note.title=note.content.substring(0,minLen);
            }
            addNote(note)
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


    /////////////////////////////////////  Note-> Add Edit Delete functions ///////////////////////////////////

    function addNote(noteToAdd){ // provide a note{title: "", content: ""} this will add to the collection of notes(allNotes)
        let newID=new Date().valueOf().toString();
        noteToAdd={
            ...noteToAdd,
            id: newID
        }
        console.log("added note : ",noteToAdd);
        setAllNotes(prevValue=>{
            return( [...prevValue,noteToAdd] );
        });
    }

    function deleteNote(idToDelete){ // provide an ID of a note, this will remove from the collection of notes(allNotes)
        console.log("to delete : "+idToDelete);
        setAllNotes(prevValue=>{
            return(
                prevValue.filter((note)=>{return note.id!==idToDelete;})
            );
        })
    }

    function editNote(idToEdit){ // provide an ID of a note, this will remove from the collection of notes(allNotes) and write the title and content in the Note
        console.log("to edit : "+idToEdit);
        let noteToEdit=allNotes.find((note)=>{
            return note.id===idToEdit;
        });
        setNote({
            title: noteToEdit.title,
            content: noteToEdit.content
        });
        deleteNote(idToEdit);
    }


    //////////////////////////////////////  /////////////////////////////////////////////////////////////

    // function CreateNote(){
    //     return(
    //         <div>
    //             <form>
    //                 <input 
    //                 type="text"
    //                 name="title"
    //                 placeholder="Title"
    //                 onChange={handleChange}
    //                 value={note.title}
    //                 />
    //                 <textarea
    //                 name="content"
    //                 rows="3"
    //                 placeholder="Write a note..."
    //                 onChange={handleChange}
    //                 value={note.content} 
    //                 />
    //                 <button onClick={handleAdd}>Add</button>
    //             </form>
    //         </div>
    //     );
    // }

    /////////////////////////////////////////// return function ////////////////////////////////////////////////////
    return(
        <div>
            <Header />

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

            {allNotes.map((note,idx)=>{
                return(
                    <Note
                    id={note.id}
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                    onEdit={editNote}
                    />
                );
            })}

            {/* <Footer /> */}

        </div>
    );
}

export default App;