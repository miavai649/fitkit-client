import MainLayout from '@/components/layout/MainLayout'
import About from '@/pages/about/About'
import CategoryProducts from '@/pages/categoryProducts/CategoryProducts'
import Home from '@/pages/home/Home'
import ProductManagement from '@/pages/productManagement/ProductManagement'
import Products from '@/pages/products/Products'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/category/:category',
        element: <CategoryProducts />
      },
      {
        path: '/product-management',
        element: <ProductManagement />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

export default router
