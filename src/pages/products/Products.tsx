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

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((item) => item !== category)
    )
  }

  console.log(selectedCategories)

  // sorting states
  const [position, setPosition] = useState('')
  console.log('🚀 ~ Products ~ position:', position)

  // search state
  const [search, setSearch] = useState('')
  console.log('🚀 ~ Products ~ search:', search)

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
          <SearchBar search={search} setSearch={setSearch} />

          {/* sorting product */}
          <SortingDropdownMenu position={position} setPosition={setPosition} />
        </div>
      </div>
      {/* Product grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-8'>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 text-white transition-all duration-300 ease-out transform hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl'>
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 text-white transition-all duration-300 ease-out transform hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl'>
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 text-white transition-all duration-300 ease-out transform hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl'>
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 text-white transition-all duration-300 ease-out transform hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl'>
              View details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default Products
