import { Button } from '../ui/button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { useGetAllProductsQuery } from '@/redux/api/api'
import { TProduct } from '@/types'
import ProductCard from '../Product/ProductCard'
import { Link } from 'react-router-dom'
import ProductCardSkeleton from '../Product/ProductCardSkeleton'

const Featured = () => {
  // initialize aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    })
  })

  // get all products
  const { data: products, isLoading } = useGetAllProductsQuery({})

  return (
    <section className='container mb-7 md:mb-14'>
      <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8'>
        Top Picks for You
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-5'>
        {products?.data?.products
          ?.slice(0, 4)
          .map((product: TProduct, i: number) => (
            <div key={product?._id}>
              {isLoading ? (
                // if loading true ==> skeleton
                <ProductCardSkeleton />
              ) : (
                // if loading false ==> product card
                <ProductCard
                  id={product?._id}
                  name={product?.name}
                  images={product?.images}
                  price={product?.price}
                  delay={i * 150}
                />
              )}
            </div>
          ))}
      </div>
      <div className='text-center mt-8'>
        <Link to={'/products'}>
          <Button className='bg-secondary-500 text-white transition duration-300 ease-in-out transform hover:bg-secondary-600 hover:scale-105 hover:shadow-lg'>
            Explore More <ChevronDoubleRightIcon className='h-5 w-5 ml-1' />
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Featured
