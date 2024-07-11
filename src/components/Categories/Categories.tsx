import { apparelImg, cardioImg, gearImg, weightsImg } from '@/assets'
import CategoryCard from './CategoryCard'

const categories = [
  { name: 'Weights', image: weightsImg },
  { name: 'Cardio', image: cardioImg },
  { name: 'Gear', image: gearImg },
  { name: 'Apparel', image: apparelImg }
]

const Categories = () => {
  return (
    <section className='container  mb-7 md:mb-14'>
      <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mb:mb-8'>
        Categories for You
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
        {categories.map((category, i) => (
          <CategoryCard
            key={category.name}
            image={category.image}
            name={category.name}
            idx={i * 150}
          />
        ))}
      </div>
    </section>
  )
}

export default Categories
