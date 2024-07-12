import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { TProductCardProps } from '@/types'
import { useEffect } from 'react'

const ProductCard = ({ images, name, price, delay }: TProductCardProps) => {
  // initialize aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    })
  })
  return (
    <Card
      className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'
      data-aos='fade-up'
      data-aos-delay={delay}>
      <CardHeader className='p-0'>
        <img
          src={images[0]}
          className='w-full h-48 md:h-64 object-cover rounded-t-lg overflow-hidden'
          alt={name}
        />
      </CardHeader>
      <CardContent className='p-3 md:p-4'>
        <CardTitle className='mt-2 text-lg md:text-xl font-semibold text-white flex justify-between'>
          {name}
          <p className='text-lg md:text-xl font-bold text-white'>${price}</p>
        </CardTitle>
      </CardContent>
      <CardFooter className='p-3 md:p-4 pt-2'>
        <Button className='w-full bg-secondary-500 text-white transition-all duration-300 ease-out transform hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl'>
          View details
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
