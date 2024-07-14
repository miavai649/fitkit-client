import { useCallback, useState } from 'react'
import FilteringDropdownMenu from '@/components/FilteringDropdownMenu/FilteringDropdownMenu'
import SearchBar from '@/components/SearchBar/SearchBar'
import SortingDropdownMenu from '@/components/SortingDropdownMenu/SortingDropdownMenu'
import { useGetAllProductsQuery } from '@/redux/api/api'
import ProductCard from '@/components/Product/ProductCard'
import { TProduct } from '@/types'
import ProductCardSkeleton from '@/components/Product/ProductCardSkeleton'
import Pagination from '@/components/pagination/Pagination'
import { Button } from '@/components/ui/button'

const Products = () => {
  // filter states array
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  // sorting states string
  const [sort, setSort] = useState('')
  // search state string
  const [searchTerm, setSearchTerm] = useState('')
  // pagination states
  const [page, setPage] = useState(1)

  // get all products api fetched from rtk query
  const { data: products, isLoading } = useGetAllProductsQuery({
    searchTerm,
    categories: selectedCategories,
    sort,
    page
  })

  const handleCategory = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((item) => item !== category)
    )
  }

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

  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        Discover Our Wide Range of Products
      </h2>
      <div className='flex flex-col md:flex-row justify-between mb-4 md:mb-8 gap-4'>
        <div className='flex flex-col sm:flex-row gap-3'>
          {/* Filter button */}
          <FilteringDropdownMenu
            selectedCategories={selectedCategories}
            handleCategory={handleCategory}
          />

          {/* Clear filtering */}
          <Button
            className='bg-primary text-white'
            onClick={() => setSelectedCategories([])}>
            Clear Filter
          </Button>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
          {/* Search bar */}
          <SearchBar
            searchTerm={searchTerm}
            debouncedSearch={debouncedSearch}
          />

          {/* Sorting product */}
          <SortingDropdownMenu sort={sort} setSort={setSort} />
        </div>
      </div>

      {/* Product grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-8'>
        {products?.data?.products?.map((product: TProduct, i: number) => (
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
      {/* Pagination */}
      <Pagination
        totalItems={products?.data?.total}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </section>
  )
}

export default Products
