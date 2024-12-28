import React, { useMemo } from "react"
import {
  FileInputIcon,
  FileOutputIcon,
  FileText,
  BrainCircuit,
  FileType,
  Save,
} from "lucide-react"
import { DraggableNode } from "./draggableNode"

export const PipelineToolbar = () => {
  const nodes = useMemo(
    () => [
      { id: "input", label: "Input", icon: FileInputIcon, type: "customInput" },
      {
        id: "output",
        label: "Output",
        icon: FileOutputIcon,
        type: "customOutput",
      },
      { id: "text", label: "Text", icon: FileText, type: "text" },
      { id: "llm", label: "LLM", icon: BrainCircuit, type: "llm" },
      {
        id: "textToFile",
        label: "Text to File",
        icon: FileType,
        type: "textToFile",
      },
      { id: "fileSave", label: "File Save", icon: Save, type: "fileSave" },
    ],
    []
  )

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white border-b border-gray-200">
      <div className="flex flex-wrap gap-4">
        {nodes.map((tool) => (
          <DraggableNode key={tool.id} {...tool} />
        ))}
      </div>
      <div className="text-base text-gray-500">
        Developed by{" "}
        <a
          href="https://www.faiz-shaikh.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold hover:underline"
        >
          Faiz Shaikh
        </a>
      </div>
    </div>
  )
}