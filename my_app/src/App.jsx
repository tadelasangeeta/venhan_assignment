import { PipelineToolbar } from "./toolbar"
import { PipelineUI } from "./ui"
import { SubmitButton } from "./submit"

export const App = () => {
  return (
    <div className="flex h-screen flex-col bg-white">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  )
}