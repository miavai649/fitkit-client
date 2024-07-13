import AddProductModal from '@/components/AddProductModal/AddProductModal'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetAllProductsQuery } from '@/redux/api/api'
import { TProduct } from '@/types'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ProductManagement = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({})
  // console.log('🚀 ~ ProductManagement ~ products:', products)

  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        Product Management
      </h2>
      <div className='flex justify-between items-center mb-4 mb:mb-8'>
        <AddProductModal />

        <div>
          <p className='text-lg font-semibold'>
            {products?.data?.length}{' '}
            {products?.data?.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>
      </div>
      <div className=' relative overflow-x-auto sm:rounded-lg my-10 mt-8'>
        <table className='w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 border'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Image
              </th>
              <th scope='col' className='px-6 py-3'>
                Product name
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Category
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>

          {/* products */}
          {products?.data?.map((product: TProduct) => (
            <React.Fragment key={product?._id}>
              {isLoading ? (
                <Skeleton className='h-48 md:h-64  rounded-lg' />
              ) : (
                <tbody>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 text-center dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {product?._id.slice(-4)}
                    </th>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      <img
                        className='w-12 h-12 object-cover rounded-full mx-auto'
                        src={product?.images[0]}
                        alt=''
                      />
                    </th>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {product?.name}
                      Dumbbells
                    </th>
                    <td className='px-6 py-4'>${product?.price}</td>
                    <td className='px-6 py-4'>
                      {product?.category.toUpperCase()}
                    </td>
                    <td className='px-6 py-4 flex items-start gap-2 justify-center'>
                      <Button
                        variant={'outline'}
                        size='icon'
                        className='ml-4 border-blue-500 cursor-pointer text-blue-500 hover:text-blue-700 '
                        // onClick={() => dispatch(removeFromCart(product?._id))}
                      >
                        <PencilSquareIcon className='h-4 w-4' />
                      </Button>
                      <Button
                        variant={'outline'}
                        size='icon'
                        className='ml-4 border-secondary-500 cursor-pointer text-secondary-500 hover:text-secondary '
                        // onClick={() => dispatch(removeFromCart(product?._id))}
                      >
                        <TrashIcon className='h-4 w-4' />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              )}
            </React.Fragment>
          ))}
        </table>
      </div>
    </section>
  )
}

export default ProductManagement
