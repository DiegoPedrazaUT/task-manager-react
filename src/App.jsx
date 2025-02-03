import { useLocalStorage } from "./hooks/useLocalStorage"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { ListTodo } from "lucide-react"

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", [])

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto max-w-2xl p-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ListTodo className="w-8 h-8 text-emerald-400" />
          <h1 className="text-4xl font-bold text-white">Gestor de Tareas</h1>
          <div className="relative">
            <img
              src="https://www.icegif.com/wp-content/uploads/2022/11/icegif-818.gif"
              alt="Checkmark animation"
              className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
            />
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-slate-700 p-6">
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  )
}

export default App