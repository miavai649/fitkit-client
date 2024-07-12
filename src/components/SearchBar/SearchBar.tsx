import { TSearchBarProps } from '@/types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = ({ searchTerm, debouncedSearch }: TSearchBarProps) => {
  return (
    <div className='flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-primary-300 focus-within:border-primary'>
      <input
        type='search'
        className='w-full px-4 py-2 text-primary-400 focus:outline-none border-none'
        placeholder='Search products...'
        defaultValue={searchTerm}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <button
        type='submit'
        className={`flex items-center justify-center px-4 py-2 text-white transition-colors duration-300 bg-primary-300 `}
        style={{ height: '40px' }}>
        <MagnifyingGlassIcon className='h-5 w-5' />
      </button>
    </div>
  )
}

export default SearchBar
