import NoteCard from "./NoteCard";

export default function NoteGrid({ notes, onNoteClick }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 px-4">
      {notes.map((note) => (
        <div key={note.id} className="break-inside-avoid mb-4">
          <NoteCard
            title={note.title}
            content={note.content}
            onClick={() => onNoteClick(note)} 
          />
        </div>
      ))}
    </div>
  );
}
