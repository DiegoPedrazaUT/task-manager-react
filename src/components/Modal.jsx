export default function Modal({ children, isOpen, onClose, title }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-200">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
