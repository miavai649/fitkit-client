import { TCategoryCardProps } from '@/types'

const CategoryCard = ({ image, name }: TCategoryCardProps) => {
  return (
    <div className='relative w-full h-[280px] overflow-hidden'>
      <img
        src={image}
        alt='Category Image'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-75'></div>
      <div className='absolute bottom-0 left-0 p-4'>
        <h3 className='text-white text-3xl font-bold'>{name}</h3>
      </div>
    </div>
  )
}

export default CategoryCard
