export default function Filters({ setFilter }) {
    return (
      <div className="flex gap-2 my-4">
        <button onClick={() => setFilter("all")} className="bg-blue-500 text-white px-3 py-1 rounded">
          Todas
        </button>
        <button onClick={() => setFilter("pending")} className="bg-yellow-500 text-white px-3 py-1 rounded">
          Pendientes
        </button>
        <button onClick={() => setFilter("completed")} className="bg-green-500 text-white px-3 py-1 rounded">
          Completadas
        </button>
      </div>
    );
  }
  