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
import FilteringDropdownMenu from '@/components/FilteringDropdownMenu/FilteringDropdownMenu'
import SearchBar from '@/components/SearchBar/SearchBar'

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
          <SearchBar search={search} setSearch={setSearch} />

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
