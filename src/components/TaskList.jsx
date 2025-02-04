import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2, Pencil } from "lucide-react"

export default function TaskList({ tasks, toggleTask, deleteTask, onEdit }) {
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
          className="flex flex-col p-4 bg-slate-900/50 rounded-lg border border-slate-700 shadow-sm hover:shadow-md transition-all hover:border-slate-600"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.status === "completada"}
                onCheckedChange={() => toggleTask(task.id)}
                className="border-slate-600 data-[state=checked]:bg-emerald-600"
              />
              <div className="flex flex-col">
                <span className={`${task.status === "completada" ? "line-through text-slate-500" : "text-slate-200"}`}>
                  {task.title}
                </span>
                <p className="text-sm text-slate-400">{task.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(task)}
                className="hover:bg-emerald-900/20 hover:text-emerald-400 text-slate-400"
              >
                <Pencil className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(task.id)}
                className="hover:bg-red-900/20 hover:text-red-400 text-slate-400"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                task.status === "completada" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {task.status === "completada" ? "Completada" : "Pendiente"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

