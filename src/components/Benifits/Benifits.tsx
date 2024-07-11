import { achiveGoal, happyWorkout, healthyLife, highQuality } from '@/assets'
import {
  CheckCircleIcon,
  HeartIcon,
  SparklesIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'
import BenifitCard from './BenifitCard'

const benefits = [
  {
    icon: <CheckCircleIcon className='h-8 w-8 md:h-10 md:w-10 text-primary' />,
    title: 'High Quality Equipment',
    description:
      'Our products are made from durable materials to ensure long-lasting use.',
    img: highQuality
  },
  {
    icon: <HeartIcon className='h-8 w-8 md:h-10 md:w-10 text-primary' />,
    title: 'Boosts Health',
    description: 'Regular use improves your overall health and well-being.',
    img: healthyLife
  },
  {
    icon: <TrophyIcon className='h-8 w-8 md:h-10 md:w-10 text-primary' />,
    title: 'Achieve Your Goals',
    description:
      'Designed to help you reach your fitness milestones efficiently.',
    img: achiveGoal
  },
  {
    icon: <SparklesIcon className='h-8 w-8 md:h-10 md:w-10 text-primary' />,
    title: 'Enjoy Your Workouts',
    description: 'Make your fitness journey enjoyable and satisfying.',
    img: happyWorkout
  }
]

const Benefits = () => {
  return (
    <section className='py-8 md:py-16 bg-primary-100 mb-5 md:mb-14'>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold  mb-2 md:mb-4'>
          Unleash Your Potential
        </h2>
        <p className='text-base md:text-xl text-primary-400 mb-4 md:mb-8'>
          Achieve your fitness goals with our state-of-the-art equipment and
          accessories.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
          {benefits.map((benefit, index) => (
            <BenifitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              img={benefit.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
