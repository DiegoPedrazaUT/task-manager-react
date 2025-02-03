import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center p-8 bg-slate-900/30 rounded-lg border border-dashed border-slate-600">
        <p className="text-slate-400">No hay tareas pendientes</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700 shadow-sm hover:shadow-md transition-all hover:border-slate-600"
        >
          <div className="flex items-center gap-3">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              className="border-slate-600 data-[state=checked]:bg-emerald-600"
            />
            <span className={`${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>{task.text}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteTask(task.id)}
            className="hover:bg-red-900/20 hover:text-red-400 text-slate-400"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </li>
      ))}
    </ul>
  )
}