import { useState } from "react";
import Navbar from "./components/NavBar";
import NoteForm from "./components/NoteForm";
import NoteGrid from "./components/NoteGrid";

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto"></main>
      {isFormVisible && <NoteForm onClose={() => setIsFormVisible(false)} />}
      <button
        className=" flex justify-center fixed bottom-20 right-10 z-50 bg-blue-800 hover:bg-blue-700 text-white rounded-full w-16 h-16 p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={() => {
          setIsFormVisible(true);
        }}>
        <i className="bxr  bx-plus text-3xl font-bold"></i>
      </button>
    </div>
  );
}
