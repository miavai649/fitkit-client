import { apparelImg, cardioImg, gearImg, weightsImg } from '@/assets'
import CategoryCard from './CategoryCard'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Weights', image: weightsImg, value: 'weights' },
  { name: 'Cardio', image: cardioImg, value: 'cardio' },
  { name: 'Gear', image: gearImg, value: 'gear' },
  { name: 'Apparel', image: apparelImg, value: 'apparel' }
]

const Categories = () => {
  return (
    <section className='container  mb-7 md:mb-14'>
      <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mb:mb-8'>
        Categories for You
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
        {categories.map((category, i) => (
          <Link key={i} to={`/products/category/${category.value}`}>
            <CategoryCard
              image={category.image}
              name={category.name}
              idx={i * 150}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
