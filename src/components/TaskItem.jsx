import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import { Trash2, Pencil } from "lucide-react"

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between p-3 bg-card rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <Checkbox checked={task.completed} onCheckedChange={() => onToggle(task.id)} />
        <span className={task.completed ? "line-through text-muted-foreground" : ""}>{task.text}</span>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" onClick={() => onEdit(task)}>
          <Pencil className="w-4 h-4 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onDelete(task.id)}>
          <Trash2 className="w-4 h-4 text-destructive" />
        </Button>
      </div>
    </div>
  )
}

