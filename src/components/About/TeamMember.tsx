import { cmo, founder, hpd } from '@/assets'

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO & Founder',
    image: founder,
    description:
      ' John has over 10 years of experience in the fitness industry and is passionate about helping others achieve their fitness goals.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Head of Product',
    image: hpd,
    description:
      "Jane is a passionate and creative woman who has worked in the fitness industry for over 8 years. She's always been driven to create innovative and sustainable products."
  },
  {
    id: 3,
    name: 'David Johnson',
    title: 'Marketing & Sales',
    image: cmo,
    description:
      "David is a creative and empathetic individual who has worked in the fitness industry for over 12 years. He's always been driven to help others achieve their fitness goals."
  }
]
const TeamMember = () => {
  return (
    <section className='my-8'>
      <h3 className='text-2xl md:text-3xl font-semibold text-center text-primary-500 mb-4'>
        Meet Our Team
      </h3>
      <div className='flex flex-wrap justify-center'>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg max-w-xs text-center'>
            <img
              src={member.image}
              alt={member.name}
              className='w-24 h-24 mx-auto rounded-full mb-4'
            />
            <h4 className='text-xl font-semibold mb-2 text-primary-500'>
              {member.name}
            </h4>
            <p className='text-gray-700'>{member.title}</p>
            <p className='text-gray-600 text-sm mt-2'>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamMember
