import NoteCard from "./NoteCard";

export default function NoteGrid({ notes }) {
    if (notes.length === 0) {
        return <p className="text-center text-gray-500">No notes yet.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes.map((note) => (
                <NoteCard key={note.id} title={note.title} content={note.content} />
            ))}
        </div>
    );
}
