import { useAppSelector } from '@/redux/hooks'

const Cart = () => {
  const { cart } = useAppSelector((state) => state)

  return (
    <div className='pt-10'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center'>
        Cart Items
      </h1>
      <div className='mx-auto max-w-4xl px-4 md:flex md:space-x-4'>
        {/* products */}
        <div className='rounded-lg md:w-2/3'>
          {cart?.map((product) => (
            <div
              key={product?._id}
              className='mb-4 rounded-lg bg-primary p-4 shadow-md sm:flex sm:justify-start'>
              <img
                src={product?.images[0]}
                alt='product-image'
                className='w-full h-40 object-cover rounded-lg md:w-24 md:h-24'
              />
              <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-3 sm:mt-0'>
                  <h2 className='text-lg font-bold text-white'>
                    {product?.name}
                  </h2>
                  <p className='text-sm text-white'>$ {product?.price}</p>
                </div>
                <div className='mt-3 flex justify-between sm:space-y-4 sm:mt-0 sm:block sm:space-x-4'>
                  <div className='flex items-center border-gray-100'>
                    <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                      {' '}
                      -{' '}
                    </span>
                    <input
                      className='h-8 w-8 border bg-white text-center text-xs outline-none'
                      type='text'
                      value={product?.orderQuantity}
                      min='1'
                    />
                    <span className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                      {' '}
                      +{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* sub total */}
        <div className='mt-6 h-full rounded-lg border bg-white p-4 shadow-md md:mt-0 md:w-1/3'>
          <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>Subtotal</p>
            <p className='text-gray-700'>$129.99</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-700'>Shipping</p>
            <p className='text-gray-700'>$4.99</p>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <div className=''>
              <p className='mb-1 text-lg font-bold'>$134.98 USD</p>
              <p className='text-sm text-gray-700'>including VAT</p>
            </div>
          </div>
          <button className='mt-4 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
