import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Note from "./Note";
import notesData from "../notes";

function App(){
    return <div>
        <Header />
        {notesData.map(note => <Note key = {note.key} {...note}/>)}
        <Footer />
    </div>;
}

export default App;