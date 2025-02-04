import { useState } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import Filters from "./components/Filters"
import Modal from "./components/Modal"
import { ListTodo } from "lucide-react"

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const [editingTask, setEditingTask] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [filter, setFilter] = useState("todas")

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, status: "pendiente" }])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "completada" ? "pendiente" : "completada" } : task,
      ),
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setEditTitle(task.title)
    setEditDescription(task.description)
  }

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, title: editTitle, description: editDescription } : task,
        ),
      )
      setEditingTask(null)
      setEditTitle("")
      setEditDescription("")
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "todas") return true
    if (filter === "pendientes") return task.status === "pendiente"
    if (filter === "completadas") return task.status === "completada"
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto max-w-2xl p-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ListTodo className="w-8 h-8 text-emerald-400" />
          <h1 className="text-4xl font-bold text-white">Gestor de Tareas</h1>
          <div className="relative">
            <img
              src="https://media1.tenor.com/m/B9IynPSc3AwAAAAd/pochita-dance-rainbow.gif"
              alt="Pochita bailando serrucho si señor"
              className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
            />
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-slate-700 p-6">
          <TaskForm addTask={addTask} />
          <Filters currentFilter={filter} setFilter={setFilter} />
          <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} onEdit={handleEditTask} />
        </div>
      </div>

      {editingTask && (
        <Modal isOpen={true} onClose={() => setEditingTask(null)} title="Editar Tarea">
          <div className="space-y-4">
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Título de la tarea..."
              className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md text-slate-200"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Descripción de la tarea..."
              className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md text-slate-200"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingTask(null)}
                className="px-4 py-2 bg-slate-700 text-slate-200 rounded-md hover:bg-slate-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App
