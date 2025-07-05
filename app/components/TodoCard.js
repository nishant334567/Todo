export default function Todo({ title, description, added, deleteTodo }) {
  return (
    <div className="p-8 bg-emerald-600 text-amber-200 mt-4">
      <div className="flex gap-4 ">
        <p className="font-bold">Title: </p>
        <p>{title}</p>
      </div>
      <div className="flex gap-4">
        <p className="font-bold">Description: </p>
        <p>{description}</p>
      </div>
      {/* <div className="flex gap-4">
        <p className="font-bold">Added on : </p>
        <p>{added}</p>
      </div> */}
      <button
        className="text-red-500 font-extrabold border-2 px-4 py-2"
        onClick={() => deleteTodo(title)}
      >
        Delete
      </button>
    </div>
  );
}
