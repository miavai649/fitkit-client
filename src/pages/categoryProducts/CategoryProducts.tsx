import ProductCard from '@/components/Product/ProductCard'
import ProductCardSkeleton from '@/components/Product/ProductCardSkeleton'
import { useGetCategoryProductsQuery } from '@/redux/api/api'
import { TProduct } from '@/types'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
  const { category } = useParams()
  const { data: products, isLoading } = useGetCategoryProductsQuery({
    category
  })
  console.log('🚀 ~ CategoryProducts ~ products:', products)
  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        {category?.toUpperCase()}
      </h2>
      {/* Product grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-8'>
        {products?.data?.map((product: TProduct, i: number) => (
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
                delay={i * 10}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryProducts
