import { useForm } from 'react-hook-form'
import { object, string, infer as zInfer } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea, ErrorMessage } from '@/components'

const formSchema = object({
  title: string().min(1, { message: 'Title is required' }),
  content: string().nullable(),
})

export const TodoInputBox = ({
  onSubmit,
}: {
  onSubmit: (data: zInfer<typeof formSchema>) => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<zInfer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const onFormSubmit = (data: zInfer<typeof formSchema>) => {
    onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col items-center gap-4 w-full"
    >
      <div className="w-full">
        <Input
          placeholder="Enter the title..."
          className="w-full"
          {...register('title')}
          error={!!errors.title}
        />
        <ErrorMessage className="self-start" text={errors.title?.message} />
      </div>

      <Textarea
        placeholder="Enter the text..."
        className="w-full"
        rows={5}
        {...register('content')}
      />

      <Button color="secondary" className="self-end" type="submit">
        Add
      </Button>
    </form>
  )
}
