import { Link } from 'react-router-dom'
import { navbarItems } from './SiteHeader'

const MainNavbar = () => {
  return (
    <div className='mr-4 hidden md:flex items-center space-x-6'>
      {navbarItems.map((item, index) => (
        <Link key={index} to={item.path}>
          <button
            className='relative text-white font-medium transition-colors duration-200 
          hover:text-secondary-500 after:content-[""] after:absolute after:left-0 
          after:-bottom-1 after:w-0 after:h-[2px] after:bg-secondary-500 
          after:transition-all after:duration-300 hover:after:w-full'>
            {item.label}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default MainNavbar
