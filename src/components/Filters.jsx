import { Button } from "@/components/ui/button"

export default function Filters({ currentFilter, setFilter }) {
  return (
    <div className="flex gap-2 mb-6">
      <Button
        variant={currentFilter === "todas" ? "default" : "outline"}
        onClick={() => setFilter("todas")}
        className="bg-slate-700 hover:bg-slate-600 text-white"
      >
        Todas
      </Button>
      <Button
        variant={currentFilter === "pendientes" ? "default" : "outline"}
        onClick={() => setFilter("pendientes")}
        className="bg-yellow-600 hover:bg-yellow-500 text-white"
      >
        Pendientes
      </Button>
      <Button
        variant={currentFilter === "completadas" ? "default" : "outline"}
        onClick={() => setFilter("completadas")}
        className="bg-emerald-600 hover:bg-emerald-500 text-white"
      >
        Completadas
      </Button>
    </div>
  )
}