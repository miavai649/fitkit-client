import CustomerTestimonials from '@/components/About/CustomerTestimonials'
import TeamMember from '@/components/About/TeamMember'
import ContactInfo from '@/components/About/ContactInfo'

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
        <TeamMember />

        {/* customer testimonials */}
        <CustomerTestimonials />

        {/* contact information */}
        <ContactInfo />
      </div>
    </section>
  )
}

export default About
