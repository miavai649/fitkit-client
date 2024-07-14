import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useOrderProductMutation } from '@/redux/api/api'
import { TPayment } from '@/types'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { orderComplete } from '@/redux/features/cart/cartSlice'

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TPayment>()

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const { cart } = useAppSelector((state) => state)

  const [orderProduct] = useOrderProductMutation()

  const subTotalPrice = cart.reduce((acc, item) => acc + item.orderPrice, 0)

  const shippingCost = 4.99
  const totalPrice = (subTotalPrice + shippingCost).toFixed(2)

  const onSubmit: SubmitHandler<TPayment> = async (formData) => {
    const orderData = {
      ...formData,
      cart,
      totalPrice
    }

    try {
      const res = await orderProduct({ data: orderData }).unwrap()
      if (res?.success) {
        toast.success('Order Placed Successfully')
        navigate('/success')
        dispatch(orderComplete())
      }
    } catch (error) {
      console.log(error)
    }

    // Optionally clear form fields after submission
    // reset(); // Uncomment if you want to use reset() function from react-hook-form
  }

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            {...register('name', { required: true })}
            placeholder='John Doe'
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200`}
          />
          {errors.name && (
            <span className='text-red-500 text-sm'>Name is required</span>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='text'
            id='email'
            {...register('email', { required: true })}
            placeholder='john.doe@example.com'
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200`}
          />
          {errors.email && (
            <span className='text-red-500 text-sm'>Email is required</span>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700'>
            Phone Number
          </label>
          <input
            type='text'
            id='phone'
            {...register('phone', { required: true })}
            placeholder='1234567890'
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200`}
          />
          {errors.phone && (
            <span className='text-red-500 text-sm'>
              Phone number is required
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='address'
            className='block text-sm font-medium text-gray-700'>
            Delivery Address
          </label>
          <input
            type='text'
            id='address'
            {...register('address', { required: true })}
            placeholder='123 Street, City, Country'
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200`}
          />
          {errors.address && (
            <span className='text-red-500 text-sm'>
              Delivery address is required
            </span>
          )}
        </div>

        {/* Total Price Section */}
        <div className='mb-4'>
          <label className='block text-lg font-medium text-gray-700'>
            Total Price
          </label>
          <div className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800'>
            ${totalPrice}
          </div>
        </div>

        <div className='mt-6'>
          <button
            type='submit'
            className='w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600'>
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
