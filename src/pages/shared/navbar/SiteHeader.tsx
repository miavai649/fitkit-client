import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import MainNavbar from './MainNavbar'
import MobileNavbar from './MobileNavbar'

const SiteHeader = () => {
  return (
    <header className='w-full border-b bg-primary-500 shadow-lg p-4'>
      <div className='flex h-14 justify-between items-center px-8 container mx-auto'>
        <div className='flex justify-between items-center '>
          {/* mobile view navigation bar */}
          <MobileNavbar />
          <div className='hidden md:flex'>
            <h2 className='md:text-center text-4xl font-extrabold tracking-wide'>
              <span className='text-white'>Fit</span>
              <span className='text-secondary-500'>K</span>
              <span className='text-white'>it</span>
            </h2>
          </div>
        </div>

        <div className='flex md:hidden'>
          <h2 className='md:text-center text-4xl font-extrabold tracking-wide'>
            <span className='text-white'>Fit</span>
            <span className='text-secondary-500'>K</span>
            <span className='text-white'>it</span>
          </h2>
        </div>

        {/* main navigation bar */}
        <MainNavbar />

        <div>
          <button>
            <ShoppingBagIcon className='size-6 text-white hover:text-secondary-500 text-lg' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
