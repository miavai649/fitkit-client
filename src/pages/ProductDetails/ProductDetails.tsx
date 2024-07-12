import { useGetSingleProductsQuery } from '@/redux/api/api'
import { useParams } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const ProductDetails = () => {
  const { id } = useParams()

  const { data: product } = useGetSingleProductsQuery({ id })

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        {/* Product Images */}
        <div className='flex-1'>
          <div className='relative w-full h-64 md:h-96 overflow-hidden rounded-lg'>
            <img
              src={product?.data?.images[0]}
              alt={product?.data?.name}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex mt-4 gap-2'>
            {product?.data?.images?.map((image: string, index: number) => (
              <div
                key={index}
                className='relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg'>
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className='flex-1'>
          <h1 className='text-2xl md:text-3xl font-bold mb-2'>
            {product?.data?.name}
          </h1>
          <p className='text-xl md:text-2xl text-primary-600 mb-4'>
            ${product?.data?.price}
          </p>
          <p className='text-gray-700 mb-4'>{product?.data?.description}</p>

          <div className='mb-4'>
            <span className='inline-block bg-gray-200 text-gray-800 text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded'>
              Category: {product?.data?.category}
            </span>
            <span
              className={`inline-block text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ${
                product?.data?.stock === 'in-stock'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-red-200 text-red-800'
              }`}>
              {product?.data?.stock}
            </span>
          </div>

          <div className='mb-4'>
            <span className='text-gray-600'>Quantity Available: </span>
            <span className='text-gray-800 font-semibold'>
              {product?.data?.quantity}
            </span>
          </div>

          <button className='w-full md:w-auto bg-secondary-500 text-white py-2 px-4 rounded-md transition-all duration-300 ease-out transform hover:bg-secondary-600 hover:-translate-y-1 hover:shadow-lg'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
