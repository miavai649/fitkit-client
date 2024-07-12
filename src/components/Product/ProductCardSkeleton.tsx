import { Skeleton } from '../ui/skeleton'

const ProductCardSkeleton = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-48 md:h-64  rounded-lg' />
      <div className='space-y-2'>
        <Skeleton className='h-12' />
      </div>
    </div>
  )
}

export default ProductCardSkeleton
