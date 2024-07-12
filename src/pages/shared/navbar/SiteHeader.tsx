import MainNavbar from './MainNavbar'
import MobileNavbar from './MobileNavbar'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/redux/hooks'
import { ShoppingCart } from 'lucide-react'

export const navbarItems = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/products',
    label: 'Products'
  },
  {
    path: '/product-management',
    label: 'Product Management'
  },
  {
    path: '/about',
    label: 'About Us'
  }
]

const SiteHeader = () => {
  const { cart } = useAppSelector((state) => state)

  return (
    <header className='w-full border-b bg-primary-500 shadow-lg p-4 m-0 sticky z-20 top-0'>
      <div className='flex h-14 justify-between items-center px-8 container mx-auto'>
        <div className='flex justify-between items-center '>
          {/* mobile view navigation bar */}
          <MobileNavbar />

          {/* logo position for main navigation bar */}
          <div className='hidden md:flex'>
            <Link to={'/'}>
              <h2 className='md:text-center text-4xl font-extrabold tracking-wide'>
                <span className='text-white'>Fit</span>
                <span className='text-secondary-500'>K</span>
                <span className='text-white'>it</span>
              </h2>
            </Link>
          </div>
        </div>

        {/* logo position for mobile navigation bar */}
        <div className='flex md:hidden'>
          <Link to={'/'}>
            <h2 className='md:text-center text-4xl font-extrabold tracking-wide'>
              <span className='text-white'>Fit</span>
              <span className='text-secondary-500'>K</span>
              <span className='text-white'>it</span>
            </h2>
          </Link>
        </div>

        {/* main navigation bar */}
        <MainNavbar />

        <div className='relative'>
          <Link to={'/cart'} className='text-body text-2xl flex items-center'>
            <ShoppingCart className='size-6 text-white hover:text-secondary-500 text-lg' />
            {cart.length > 0 && (
              <div className='ml-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center -top-2 -right-2 absolute'>
                {cart.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
