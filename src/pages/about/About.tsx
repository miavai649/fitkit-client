import CustomerTestimonials from '@/components/About/CustomerTestimonials'
import TeamMember from '@/components/About/TeamMember'
import { cmo, founder, hpd } from '@/assets'

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO & Founder',
    image: founder,
    description:
      'John has over 10 years of experience in the fitness industry and is passionate about helping others achieve their fitness goals.'
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

const About = () => {
  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center text-red-600 animate-fade-in'>
        About Us
      </h2>
      <div className='px-4 md:px-8 lg:px-12 text-gray-900'>
        {/* company overview */}
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-primary-500'>
            Company Overview
          </h3>
          <p className='leading-relaxed'>
            Welcome to FitKit, your number one source for all things fitness.
            We're dedicated to providing you the best of fitness equipment and
            accessories, with a focus on dependability, customer service, and
            uniqueness.
          </p>
        </section>
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-primary-500'>
            Our History
          </h3>
          <p className='leading-relaxed'>
            Founded in 2024, FitKit has come a long way from its beginnings.
            When we first started out, our passion for eco-friendly and
            high-quality fitness products drove us to start our own business.
          </p>
        </section>
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-primary-500'>
            Our Mission
          </h3>
          <p className='leading-relaxed'>
            Our mission is to provide the best fitness equipment and accessories
            to help our customers achieve their fitness goals. We believe in
            offering products that are not only effective but also sustainable
            and eco-friendly.
          </p>
        </section>
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-primary-500'>
            Our Vision
          </h3>
          <p className='leading-relaxed'>
            Our vision is to become a global leader in the fitness industry,
            known for our commitment to quality, sustainability, and customer
            satisfaction. We aim to inspire and empower people to lead
            healthier, more active lives.
          </p>
        </section>

        {/* Team members */}
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
                <p className='text-gray-600 text-sm mt-2'>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* customer testimonials */}
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-center text-primary-500'>
            Customer Testimonials
          </h3>
          <div className='flex flex-wrap justify-center'>
            <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg max-w-md text-center transform transition-transform hover:scale-105'>
              <p className='text-gray-700 leading-relaxed'>
                "FitKit has truly transformed my workout experience. Their
                products are top-notch and their customer service is
                exceptional!"
              </p>
              <p className='text-gray-600 text-sm mt-2'>- Sarah M.</p>
            </div>
            <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg max-w-md text-center transform transition-transform hover:scale-105'>
              <p className='text-gray-700 leading-relaxed'>
                "I've been using FitKit's gear for years now, and I can't
                imagine using anything else. They deliver quality and
                reliability every time."
              </p>
              <p className='text-gray-600 text-sm mt-2'>- Michael P.</p>
            </div>
          </div>
        </section>

        {/* contact information */}
        <div className='mb-12'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-center text-primary-500'>
            Contact Us
          </h3>
          <div className='text-gray-900'>
            <p className='leading-relaxed mb-4 text-center'>
              We value your feedback and inquiries. Contact us through the
              following channels:
            </p>
            <div className='flex flex-col items-center space-y-4'>
              <p className='leading-relaxed'>
                <strong>Email:</strong> info@fitkit.com
              </p>
              <p className='leading-relaxed'>
                <strong>Phone:</strong> +1-123-456-7890
              </p>
              <p className='leading-relaxed'>
                <strong>Address:</strong> 123 Fitness Ave, New York, NY, 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
