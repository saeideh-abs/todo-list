import { useForm } from 'react-hook-form'
import { object, string, infer as zInfer } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea, ErrorMessage } from '@/components'
import { useTodoStore } from '@/store/todo'
import { IconPlus } from '@/icons'

const formSchema = object({
  title: string().min(1, { message: 'Title is required' }),
  content: string(),
})

export const TodoInputBox = () => {
  const addTodo = useTodoStore(state => state.addTodo)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<zInfer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const onFormSubmit = (data: zInfer<typeof formSchema>) => {
    addTodo({
      ...data,
      id: Date.now(),
      completed: false,
    })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col items-center mx-auto gap-4 w-full md:w-[500px]"
    >
      <p className="text-primary-700 font-medium self-start">Add new Todo</p>
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

      <Button
        color="secondary"
        className="self-end"
        type="submit"
        iconLeft={<IconPlus className="w-6 h-6 text-white" />}
      >
        Add
      </Button>
    </form>
  )
}
