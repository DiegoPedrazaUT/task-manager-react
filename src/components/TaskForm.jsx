import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      addTask({ text: taskText })
      setTaskText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Añadir nueva tarea..."
        className="flex-grow shadow-sm bg-slate-900/50 border-slate-600 text-slate-100 placeholder:text-slate-400 focus-visible:ring-emerald-400"
      />
      <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
        <Plus className="w-4 h-4 mr-2" />
        Agregar
      </Button>
    </form>
  )
}