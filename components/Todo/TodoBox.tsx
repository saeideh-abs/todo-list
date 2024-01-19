export type TodoBoxProps = {
  title: string
  content?: string
}

export const TodoBox = ({ title, content }: TodoBoxProps) => {
  return (
    <div className="w-full flex flex-col">
      <TodoBoxHeader title={title} />
      <TodoBoxBody content={content} />
    </div>
  )
}

const TodoBoxHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-secondary-500 text-secondary-contrast px-4 py-3 text-lg font-semibold rounded-t-lg">
      {title}
    </div>
  )
}

const TodoBoxBody = ({ content }: { content?: string }) => {
  return (
    <div className="shadow-lg px-4 py-4 rounded-b-lg border border-saGray-300">
      {content}
    </div>
  )
}
