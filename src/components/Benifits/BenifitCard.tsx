import { TBenefitCardProps } from '@/types'

const BenefitCard = ({ icon, title, description, img }: TBenefitCardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col'>
      <img
        src={img}
        alt={title}
        className='w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover'
      />
      <div className='p-4 md:p-6 flex flex-col flex-grow'>
        <div className='text-primary mb-2 md:mb-4'>{icon}</div>
        <h3 className='text-xl md:text-2xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-700 text-sm md:text-base flex-grow'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default BenefitCard
