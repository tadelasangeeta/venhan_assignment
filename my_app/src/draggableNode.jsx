// draggableNode.js
import React, { useState } from "react"

export const DraggableNode = ({ id, label, icon: Icon, type }) => {
  const [isDragging, setIsDragging] = useState(false)

  const onDragStart = (event, type) => {
    const appData = { nodeType: type, label }
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData))
    event.dataTransfer.effectAllowed = "move"
    setIsDragging(true)
  }

  return (
    <div
      id={id}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={() => setIsDragging(false)}
      className={`flex h-[60px] min-w-[80px] cursor-grab flex-col items-center justify-center rounded-lg 
        bg-white border border-gray-200 shadow-sm hover:bg-gray-50 
        transition-colors active:cursor-grabbing ${
          isDragging ? "ring-2 ring-blue-500 ring-offset-2" : ""
        }`}
    >
      <Icon className="mb-1.5 h-5 w-5 text-gray-600" />
      <span className="text-xs text-gray-600 font-medium">{label}</span>
    </div>
  )
}