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
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useUpdateProductMutation } from '@/redux/api/api'
import { toast } from 'sonner'
import { useState } from 'react'
import { TProduct, TUpdateProductModalProps } from '@/types'

const UpdateProductModal = ({ product }: TUpdateProductModalProps) => {
  // console.log('🚀 ~ UpdateProductModal ~ product:', product)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>()

  const [updateProduct] = useUpdateProductMutation()

  const [open, setOpen] = useState(false)

  const onSubmit = async (data: TProduct) => {
    // converting price and quantity to number
    data.price = parseFloat(data.price.toString())
    data.quantity = parseInt(data.quantity.toString(), 10)

    // exclude empty string from images array
    data.images = data.images.filter((img) => img.trim() !== '')

    try {
      const res = await updateProduct({ id: product?._id, data }).unwrap()
      if (res?.success) {
        toast.success(res?.message)
        setOpen(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          size='icon'
          className='ml-4 border-blue-500 cursor-pointer text-blue-500 hover:text-blue-700 '>
          <PencilSquareIcon className='h-4 w-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[400px] md:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Fill in the details of the selected product you want to Update.
            Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-4 py-4'>
            {/* product name */}
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                defaultValue={product?.name}
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
                defaultValue={product?.description}
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
                    defaultValue={product?.price}
                    type='number'
                    {...register('price', {
                      required: 'Price is required'
                    })}
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
                  defaultValue={product?.category}
                  {...register('category')}
                  className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}>
                  <option
                    value='weights'
                    selected={product?.category === 'weights'}>
                    Weights
                  </option>
                  <option
                    value='cardio'
                    selected={product?.category === 'cardio'}>
                    Cardio
                  </option>
                  <option value='gear' selected={product?.category === 'gear'}>
                    Gear
                  </option>
                  <option
                    value='apparel'
                    selected={product?.category === 'apparel'}>
                    Apparel
                  </option>
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
                    defaultValue={product?.quantity}
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
                  defaultValue={product?.stock}
                  {...register('stock')}
                  className={`p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}>
                  <option
                    value='in-stock'
                    selected={product?.stock === 'in-stock'}>
                    In Stock
                  </option>
                  <option
                    value='out-stock'
                    selected={product?.stock === 'out-stock'}>
                    Out of Stock
                  </option>
                </select>
              </div>
            </div>

            {/* product images */}
            <div className='grid gap-2'>
              <Label htmlFor='images1'>Image 1</Label>
              <Input
                id='images1'
                defaultValue={product?.images[0]}
                {...register('images.0', {
                  required: 'At least one image is required'
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
                defaultValue={product?.images[1]}
                {...register('images.1')}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images3'>Image 3</Label>
              <Input
                id='images3'
                defaultValue={product?.images[2]}
                {...register('images.2')}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images4'>Image 4</Label>
              <Input
                id='images4'
                defaultValue={product?.images[3]}
                {...register('images.3')}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit' onClick={() => setOpen(false)}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateProductModal
