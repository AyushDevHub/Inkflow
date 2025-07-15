import { useState } from "react";

export default function NoteForm({ onClose, addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = () => {
        if (!content.trim()) return; 
        const newNote = {
            id: Date.now(),
            title,
            content,
        };
        addNote(newNote); 
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full text-xl font-medium mb-4 p-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your note..."
                    className="w-full text-base p-3 bg-gray-100 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                />

                <div className="flex justify-end gap-4 mt-4">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                    <button
                        className="text-gray-500 hover:underline px-4 py-2 rounded-xl transition"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
