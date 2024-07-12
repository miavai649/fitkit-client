import { useState } from 'react'
import FilteringDropdownMenu from '@/components/FilteringDropdownMenu/FilteringDropdownMenu'
import SearchBar from '@/components/SearchBar/SearchBar'
import SortingDropdownMenu from '@/components/SortingDropdownMenu/SortingDropdownMenu'
import { dumbbells } from '@/assets'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useGetAllProductsQuery } from '@/redux/api/api'
import ProductCard from '@/components/Product/ProductCard'
import { TProduct } from '@/types'

const Products = () => {
  // filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  // sorting states
  const [sort, setSort] = useState('')
  // search state
  const [searchTerm, setSearchTerm] = useState('')

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((item) => item !== category)
    )
  }

  // get all products api fetched from rtk query
  const {
    data: products,
    error,
    isLoading
  } = useGetAllProductsQuery({
    searchTerm,
    categories: selectedCategories,
    sort
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        Discover Our Wide Range of Products
      </h2>
      <div className='flex justify-between mb-4 mb:mb-8'>
        {/* Filter button */}
        <FilteringDropdownMenu
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />

        <div className='flex gap-4'>
          {/* search bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* sorting product */}
          <SortingDropdownMenu sort={sort} setSort={setSort} />
        </div>
      </div>
      {/* Product grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-8'>
        {products?.data?.map((product: TProduct, i: number) => (
          <ProductCard
            key={product?._id}
            name={product?.name}
            images={product?.images}
            price={product?.price}
            delay={i * 10}
          />
        ))}
      </div>
    </section>
  )
}

export default Products
