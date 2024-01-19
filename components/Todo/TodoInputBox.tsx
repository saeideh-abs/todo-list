import { Button, Input } from '..'
import { Textarea } from '../Input/Textarea'

export const TodoInputBox = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Input placeholder="Enter the title..." className="w-full" />
      <Textarea placeholder="Enter the text..." className="w-full" rows={5} />

      <Button color="secondary" className="self-end">
        Add
      </Button>
    </div>
  )
}
