import { Divider } from '.'

export const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <Divider className="my-5" />
      <h2 className="text-primary-500 text-lg">{title}</h2>
      <Divider className="my-5" />
    </div>
  )
}
