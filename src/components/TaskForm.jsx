import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskTitle.trim()) {
      addTask({
        title: taskTitle,
        description: taskDescription,
        status: "pendiente",
      })
      setTaskTitle("")
      setTaskDescription("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <Input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Título de la tarea..."
        className="shadow-sm bg-slate-900/50 border-slate-600 text-slate-100 placeholder:text-slate-400 focus-visible:ring-emerald-400"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Descripción de la tarea..."
        className="w-full min-h-[100px] rounded-md shadow-sm bg-slate-900/50 border-slate-600 text-slate-100 placeholder:text-slate-400 focus-visible:ring-emerald-400 p-3"
      />
      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
        <Plus className="w-4 h-4 mr-2" />
        Agregar Tarea
      </Button>
    </form>
  )
}
