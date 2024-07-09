import MainNavbar from './MainNavbar'
import MobileNavbar from './MobileNavbar'

const SiteHeader = () => {
  return (
    <header className='w-full border-b'>
      <div className='flex h-14 items-center px-4'>
        <MainNavbar />
        <MobileNavbar />
      </div>
    </header>
  )
}

export default SiteHeader
