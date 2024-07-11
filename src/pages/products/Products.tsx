import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type Checked = DropdownMenuCheckboxItemProps['checked']

const Products = () => {
  // filter states
  const [showStatusBar, setShowStatusBar] = useState<Checked>(false)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)
  // sorting states
  const [position, setPosition] = useState('bottom')

  // search state
  const [search, setSearch] = useState('')

  return (
    <section className='container'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center'>
        Discover Our Wide Range of Products
      </h2>
      <div className='flex justify-between'>
        {/* Filter button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='border border-primary'>
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}>
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}>
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}>
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className='flex gap-2'>
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
              <Button variant='outline'>Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}>
                <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='bottom'>
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='right'>
                  Right
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
