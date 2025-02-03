import { useState } from "react"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import Modal from "../components/Modal"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export default function Home() {
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const [editingTask, setEditingTask] = useState(null)
  const [editText, setEditText] = useState("")

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setEditText(task.text)
  }

  const handleSaveEdit = () => {
    if (editText.trim()) {
      setTasks(tasks.map((task) => (task.id === editingTask.id ? { ...task, text: editText } : task)))
      setEditingTask(null)
      setEditText("")
    }
  }

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Gestor de Tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} onEdit={handleEditTask} />

      {editingTask && (
        <Modal isOpen={!!editingTask} onClose={() => setEditingTask(null)} title="Editar Tarea">
          <div className="space-y-4">
            <Input value={editText} onChange={(e) => setEditText(e.target.value)} placeholder="Editar tarea..." />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditingTask(null)}>
                Cancelar
              </Button>
              <Button onClick={handleSaveEdit}>Guardar</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

