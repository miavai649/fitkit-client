import MainLayout from '@/components/layout/MainLayout'
import About from '@/pages/about/About'
import Cart from '@/pages/cart/Cart'
import CategoryProducts from '@/pages/categoryProducts/CategoryProducts'
import Checkout from '@/pages/checkout/Checkout'
import Home from '@/pages/home/Home'
import ProductDetails from '@/pages/ProductDetails/ProductDetails'
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
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/product-management',
        element: <ProductManagement />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
])

export default router
