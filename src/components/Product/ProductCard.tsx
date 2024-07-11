import { dumbbells } from '@/assets'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import { TProductCardProps } from '@/types'

const ProductCard = ({ images, name, price, delay }: TProductCardProps) => {
  return (
    <Card
      className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'
      data-aos='fade-up'
      data-aos-delay={delay}>
      <CardHeader className='p-0'>
        <img
          src={images[0]}
          className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
        />
      </CardHeader>
      <CardContent className='p-4'>
        <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
          {name}
          <p className='text-xl font-bold text-white'>${price}</p>
        </CardTitle>
      </CardContent>
      <CardFooter className='p-4 pt-2'>
        <Button className='w-full bg-secondary-500 text-white transition-all duration-300 ease-out transform hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl'>
          View details
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
