import AddProductModal from '@/components/AddProductModal/AddProductModal'
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal/DeleteConfirmationModal'
import Pagination from '@/components/pagination/Pagination'
import SearchBar from '@/components/SearchBar/SearchBar'
import Spinner from '@/components/Spinner/Spinner'
import UpdateProductModal from '@/components/UpdateProductModal/UpdateProductModal'
import { useGetAllProductsQuery } from '@/redux/api/api'
import { TProduct } from '@/types'
import { useCallback, useState } from 'react'

const ProductManagement = () => {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const { data: products, isLoading } = useGetAllProductsQuery({
    searchTerm,
    page
  })
  // console.log('🚀 ~ ProductManagement ~ products:', products)

  const debounce = (func: any, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value)
    }, 800),
    []
  )

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        Product Management
      </h2>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4'>
        <AddProductModal />

        <div>
          <SearchBar
            searchTerm={searchTerm}
            debouncedSearch={debouncedSearch}
          />
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
          {products?.data?.products?.map((product: TProduct) => (
            <tbody key={product?._id}>
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
                    className='w-12 h-12 object-cover rounded-lg border mx-auto'
                    src={product?.images[0]}
                    alt=''
                  />
                </th>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {product?.name}
                </th>
                <td className='px-6 py-4'>${product?.price}</td>
                <td className='px-6 py-4'>{product?.category.toUpperCase()}</td>
                <td className='px-6 py-4 flex items-start gap-2 justify-center'>
                  <UpdateProductModal product={product} />

                  <DeleteConfirmationModal id={product?._id} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {/* pagination  */}
      <Pagination
        totalItems={products?.data?.total}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </section>
  )
}

export default ProductManagement
