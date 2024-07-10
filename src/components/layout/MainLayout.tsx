import Footer from '@/pages/shared/Footer'
import SiteHeader from '@/pages/shared/navbar/SiteHeader'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
