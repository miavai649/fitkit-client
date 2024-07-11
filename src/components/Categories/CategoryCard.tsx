import { TCategoryCardProps } from '@/types'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CategoryCard = ({ image, name }: TCategoryCardProps) => {
  // initialize aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    })
  })

  return (
    <div data-aos='fade-left' data-aos-delay='10'>
      <div className='relative w-full h-[100px] md:h-[280px] overflow-hidden rounded-lg group cursor-pointer'>
        <img
          src={image}
          alt='Category Image'
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-75'></div>
        <div className='absolute bottom-0 left-0 p-4'>
          <h3 className='text-white text-3xl font-bold transition-transform duration-500 group-hover:translate-y-1'>
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
