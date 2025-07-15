export default function NoteCard({ title, content }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 transition hover:shadow-xl hover:scale-[1.01] duration-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{title}</h3>
<p className="text-sm text-gray-600 whitespace-pre-line line-clamp-5">
  {content}
</p>
    </div>
  );
}
