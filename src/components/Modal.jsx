import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {children}
        <button className="mt-2 bg-gray-500 text-white p-2 rounded" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
