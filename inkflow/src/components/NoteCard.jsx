export default function NoteCard({ id, title, content, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all relative">
      <h2 className="font-bold text-lg mb-1">{title}</h2>
      <p className="text-sm text-gray-700">{content}</p>

      <div className="absolute top-2 right-2 flex gap-2">
        <button onClick={() => onEdit(id)} className="text-blue-500 hover:text-blue-700">
          <i className="bx bx-edit text-lg"></i>
        </button>
        <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700">
          <i className="bx bx-trash text-lg"></i>
        </button>
      </div>
    </div>
  );
}
