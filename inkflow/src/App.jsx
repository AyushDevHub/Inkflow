import { useState } from "react";
import Navbar from "./components/NavBar";
import NoteForm from "./components/NoteForm";
import NoteGrid from "./components/NoteGrid";
import NoteCard from "./components/NoteCard";
import NoteView from "./components/NoteView";

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">
      <NoteGrid notes={notes} onNoteClick={(note) => setSelectedNote(note)} />
        {selectedNote && (
  <NoteView
    note={selectedNote}
    onClose={() => setSelectedNote(null)}
  />
)}

      </main>
      {isFormVisible && <NoteForm onClose={() => setIsFormVisible(false)}
      addNote={addNote}
      />
      }
      {!selectedNote && (
  <button
    className="flex justify-center fixed bottom-20 right-10 z-50 bg-blue-800 hover:bg-blue-700 text-white rounded-full w-16 h-16 p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
    onClick={() => {
      setIsFormVisible(true);
    }}
  >
    <i className="bx bx-plus text-3xl font-bold"></i>
  </button>
)}

    </div>
  );
}
