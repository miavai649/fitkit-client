import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useForm } from 'react-hook-form'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useAddProductMutation } from '@/redux/api/api'
import { toast } from 'sonner'
import { useState } from 'react'
import { TProduct } from '@/types'

const AddProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TProduct>()

  const [addProduct] = useAddProductMutation()

  const [open, setOpen] = useState(false)

  const onSubmit = async (data: TProduct) => {
    // converting price and quantity to number
    data.price = parseFloat(data.price.toString())
    data.quantity = parseInt(data.quantity.toString(), 10)

    // exclude empty string from images array
    data.images = data.images.filter((img) => img.trim() !== '')

    try {
      const res = await addProduct({ data }).unwrap()
      if (res?.success) {
        toast.success(res?.message)
        setOpen(false)
        reset()
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className='mr-2 h-4 w-4 text-white' /> Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full max-h-[80vh] overflow-y-auto p-4 sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]'>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Fill in the details of the new product you want to add. Click save
            when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-4 py-4'>
            {/* product name */}
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                {...register('name', { required: 'Name is required' })}
                className={`p-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              {errors.name && (
                <span className='text-red-500 text-xs'>
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* product description */}
            <div className='grid gap-2'>
              <Label htmlFor='description'>Description</Label>
              <Input
                id='description'
                {...register('description', {
                  required: 'Description is required'
                })}
                className={`p-2 border ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              {errors.description && (
                <span className='text-red-500 text-xs'>
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* product price and category */}
            <div className='grid gap-2 md:grid-cols-2 md:gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='price'>Price</Label>
                <div className='relative'>
                  <Input
                    id='price'
                    type='number'
                    {...register('price', { required: 'Price is required' })}
                    className={`p-2 border ${
                      errors.price ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                  {errors.price && (
                    <span className='absolute right-0 text-xs text-red-500 mt-1'>
                      {errors.price.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='category'>Category</Label>
                <select
                  id='category'
                  {...register('category')}
                  className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'>
                  <option value='weights'>Weights</option>
                  <option value='cardio'>Cardio</option>
                  <option value='gear'>Gear</option>
                  <option value='apparel'>Apparel</option>
                </select>
              </div>
            </div>

            {/* product quantity and stock status */}
            <div className='grid gap-2 md:grid-cols-2 md:gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='quantity'>Quantity</Label>
                <div className='relative'>
                  <Input
                    id='quantity'
                    type='number'
                    {...register('quantity', {
                      required: 'Quantity is required'
                    })}
                    className={`p-2 border ${
                      errors.quantity ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                  {errors.quantity && (
                    <span className='absolute right-0 text-xs text-red-500 mt-1'>
                      {errors.quantity.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='stock'>Stock Status</Label>
                <select
                  id='stock'
                  {...register('stock')}
                  className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'>
                  <option value='in-stock'>In Stock</option>
                  <option value='out-stock'>Out of Stock</option>
                </select>
              </div>
            </div>

            {/* product images */}
            <div className='grid gap-2'>
              <Label htmlFor='images1'>Image 1</Label>
              <Input
                id='images1'
                {...register('images.0', {
                  required: 'At least one image is required',
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: 'Please enter a valid URL'
                  }
                })}
                className={`p-2 border ${
                  errors.images?.[0] ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              {errors.images?.[0] && (
                <span className='text-red-500 text-xs'>
                  {errors.images[0].message}
                </span>
              )}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images2'>Image 2</Label>
              <Input
                id='images2'
                {...register('images.1')}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images3'>Image 3</Label>
              <Input
                id='images3'
                {...register('images.2')}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images4'>Image 4</Label>
              <Input
                id='images4'
                {...register('images.3')}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddProductModal
