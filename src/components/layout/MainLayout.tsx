import Footer from '@/pages/shared/Footer'
import SiteHeader from '@/pages/shared/navbar/SiteHeader'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
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
