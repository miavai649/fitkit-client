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
import { PlusIcon } from '@heroicons/react/24/outline'

const AddProductModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className='mr-2 h-4 w-4 text-white' /> Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Fill in the details of the new product you want to add. Click save
            when you're done.
          </DialogDescription>
        </DialogHeader>
        <form>
          {/* product name */}
          <div className='grid gap-4 py-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <input
                id='name'
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                required
              />
            </div>

            {/* product description */}
            <div className='grid gap-2'>
              <Label htmlFor='description'>Description</Label>
              <input
                id='description'
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                required
              />
            </div>

            {/* product price and category */}
            <div className='grid gap-2 md:grid-cols-2 md:gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='price'>Price</Label>
                <input
                  id='price'
                  type='number'
                  className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='category'>Category</Label>
                <select
                  id='category'
                  className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'>
                  <option value='weights'>Weights</option>
                  <option value='cardio'>Cardio</option>
                  <option value='gear'>Gear</option>
                  <option value='apparel'>Apparel</option>
                </select>
              </div>
            </div>

            {/* product quantity and stock status  */}
            <div className='grid gap-2 md:grid-cols-2 md:gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='quantity'>Quantity</Label>
                <input
                  id='quantity'
                  type='number'
                  className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='stock'>Stock Status</Label>
                <select
                  id='stock'
                  className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'>
                  <option value='in-stock'>In Stock</option>
                  <option value='out-stock'>Out of Stock</option>
                </select>
              </div>
            </div>

            {/* product images */}
            <div className='grid gap-2'>
              <Label htmlFor='images'>Images 1</Label>
              <input
                id='images'
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images'>Images 2</Label>
              <input
                id='images'
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images'>Images 3</Label>
              <input
                id='images'
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='images'>Images 4</Label>
              <input
                id='images'
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
                required
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
