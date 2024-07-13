import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useDeleteProductMutation } from '@/redux/api/api'
import { toast } from 'sonner'
const DeleteConfirmationModal = ({ id }: { id: string }) => {
  const [deleteProduct] = useDeleteProductMutation()

  const handleDelete = async () => {
    try {
      const res = await deleteProduct({ id }).unwrap()
      if (res?.success) {
        toast.success(res?.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={'outline'}
          size='icon'
          className='ml-4 border-secondary-500 cursor-pointer text-secondary-500 hover:text-secondary '>
          <TrashIcon className='h-4 w-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            Product and remove product data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteConfirmationModal
