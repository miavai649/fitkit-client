import { cardioImg, gearImg, highQuality, weightsImg } from '@/assets'
import {
  CheckCircleIcon,
  HeartIcon,
  SparklesIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: <CheckCircleIcon className='h-12 w-12 text-primary' />,
    title: 'High Quality Equipment',
    description:
      'Our products are made from durable materials to ensure long-lasting use.',
    img: highQuality
  },
  {
    icon: <HeartIcon className='h-12 w-12 text-primary' />,
    title: 'Boosts Health',
    description: 'Regular use improves your overall health and well-being.',
    img: cardioImg
  },
  {
    icon: <TrophyIcon className='h-12 w-12 text-primary' />,
    title: 'Achieve Your Goals',
    description:
      'Designed to help you reach your fitness milestones efficiently.',
    img: gearImg
  },
  {
    icon: <SparklesIcon className='h-12 w-12 text-primary' />,
    title: 'Enjoy Your Workouts',
    description: 'Make your fitness journey enjoyable and satisfying.',
    img: weightsImg
  }
]

const Benefits = () => {
  return (
    <section className='py-16 bg-primary-100 mb-7 md:mb-14'>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold lg:text-4xl mb-2 md:mb-4'>
          Unleash Your Potential
        </h2>
        <p className='text-lg md:text-xl text-gray-700 mb-4 mb:mb-8'>
          Achieve your fitness goals with our state-of-the-art equipment and
          accessories.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img
                src={benefit.img}
                alt={benefit.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <div className='text-primary mb-4'>{benefit.icon}</div>
                <h3 className='text-2xl font-semibold mb-2'>{benefit.title}</h3>
                <p className='text-gray-700'>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
