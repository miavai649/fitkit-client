import Footer from '@/pages/shared/Footer'
import SiteHeader from '@/pages/shared/navbar/SiteHeader'
import { useAppSelector } from '@/redux/hooks'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const { cart } = useAppSelector((state) => state)

  window.onbeforeunload = function (event) {
    if (cart.length > 0) {
      event.preventDefault()
      event.returnValue = ''
    }
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <SiteHeader />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
