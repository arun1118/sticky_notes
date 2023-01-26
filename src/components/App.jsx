import React,{useState} from "react";
import Header from "./Header";
// import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App(){
    
    // const [allNotes,setAllNotes]=useState([]);
    const [allNotes,setAllNotes]=useState(()=>{
        console.log("fetching data from local storage");
        return (JSON.parse(localStorage.getItem("allNotes")) || []);
    });

    React.useEffect(()=>{
        console.log("storing in the local storage");
        localStorage.setItem("allNotes",JSON.stringify(allNotes));
    },[allNotes])

    function addNote(noteToAdd){
        let newID=new Date().valueOf().toString();
        noteToAdd={
            ...noteToAdd,
            id: newID
        }
        console.log("added note : ");
        console.log(noteToAdd);
        setAllNotes(prevValue=>{
            return( [...prevValue,noteToAdd] );
        });
    }

    function deleteNote(idToDelete){
        console.log("to delete : "+idToDelete);
        setAllNotes(prevValue=>{
            return(
                prevValue.filter((note)=>{return note.id!==idToDelete;})
            );
        })
    }

    return(
        <div>
            <Header />
            <CreateNote onAdd={addNote}/>
            {allNotes.map((note,idx)=>{
                return(
                    <Note
                    id={note.id}
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                    />
                );
            })}
            {/* <Footer /> */}
        </div>
    );
}

export default App;