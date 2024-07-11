import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import FilteringDropdownMenu from '@/components/FilteringDropdownMenu/FilteringDropdownMenu'

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
    <section className='container'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        Discover Our Wide Range of Products
      </h2>
      <div className='flex justify-between'>
        {/* Filter button */}
        <FilteringDropdownMenu
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />

        <div className='flex gap-4'>
          {/* search bar */}
          <div className='flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-primary-300 focus-within:border-primary'>
            <input
              type='search'
              className='w-full px-4 py-2 text-primary-400 focus:outline-none border-none'
              placeholder='Search products...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type='submit'
              className={`flex items-center justify-center px-4 py-2 text-white transition-colors duration-300 ${
                search.length > 0
                  ? 'bg-secondary-500 hover:bg-secondary-600'
                  : 'bg-primary-300 cursor-not-allowed'
              }`}
              disabled={search.length === 0}
              style={{ height: '40px' }}>
              <MagnifyingGlassIcon className='h-5 w-5' />
            </button>
          </div>

          {/* sorting product */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='bg-primary text-white'>Sort</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>Price</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}>
                <DropdownMenuRadioItem value='asc'>
                  Low to High
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='desc'>
                  High to Low
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  )
}

export default Products
