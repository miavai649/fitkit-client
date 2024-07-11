import { dumbbells } from '@/assets'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'

const Featured = () => {
  return (
    <div className='container mb-7 md:mb-14'>
      <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8'>
        Top Picks for You
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-5'>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 hover:bg-primary-600 text-white'>
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 hover:bg-primary-600 text-white'>
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 hover:bg-primary-600 text-white'>
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-primary-500 rounded-lg shadow-lg overflow-hidden'>
          <CardHeader className='p-0'>
            <img
              src={dumbbells}
              className='w-full h-64 object-cover rounded-t-lg overflow-hidden'
            />
          </CardHeader>
          <CardContent className='p-4'>
            {/* <div className='flex items-center justify-between'>
              <p className='text-xl font-bold text-white'>$44.99</p>
            </div> */}
            <CardTitle className='mt-2 text-xl font-semibold text-white flex justify-between'>
              Dumbbells
              <p className='text-xl font-bold text-white'>$44.99</p>
            </CardTitle>
          </CardContent>
          <CardFooter className='p-4 pt-2'>
            <Button className='w-full bg-secondary-500 hover:bg-primary-600 text-white'>
              View details
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className='text-center mt-8'>
        <Button className='bg-secondary-500 hover:bg-secondary-600 text-white'>
          Explore More
        </Button>
      </div>
    </div>
  )
}

export default Featured
