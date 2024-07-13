const About = () => {
  return (
    <section className='container mb-7 md:mb-14'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center text-red-600'>
        About Us
      </h2>
      <div className='px-4 md:px-8 lg:px-12 text-gray-900'>
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>
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
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>
            Our History
          </h3>
          <p className='leading-relaxed'>
            Founded in 2024, FitKit has come a long way from its beginnings.
            When we first started out, our passion for eco-friendly and
            high-quality fitness products drove us to start our own business.
          </p>
        </section>
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>
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
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>
            Our Vision
          </h3>
          <p className='leading-relaxed'>
            Our vision is to become a global leader in the fitness industry,
            known for our commitment to quality, sustainability, and customer
            satisfaction. We aim to inspire and empower people to lead
            healthier, more active lives.
          </p>
        </section>
        <section className='my-8'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>
            Meet Our Team
          </h3>
          <div className='flex flex-wrap justify-center'>
            <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg w-64 text-center'>
              <img
                src='/path-to-image.jpg'
                alt='Team Member 1'
                className='w-24 h-24 mx-auto rounded-full mb-4'
              />
              <h4 className='text-xl font-semibold mb-2'>John Doe</h4>
              <p className='text-gray-700'>CEO & Founder</p>
              <p className='text-gray-600 text-sm mt-2'>
                John has over 10 years of experience in the fitness industry and
                is passionate about helping others achieve their fitness goals.
              </p>
            </div>
            <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg w-64 text-center'>
              <img
                src='/path-to-image.jpg'
                alt='Team Member 2'
                className='w-24 h-24 mx-auto rounded-full mb-4'
              />
              <h4 className='text-xl font-semibold mb-2'>Jane Smith</h4>
              <p className='text-gray-700'>Chief Marketing Officer</p>
              <p className='text-gray-600 text-sm mt-2'>
                Jane has a background in marketing and is dedicated to spreading
                the word about FitKit’s amazing products.
              </p>
            </div>
            <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg w-64 text-center'>
              <img
                src='/path-to-image.jpg'
                alt='Team Member 3'
                className='w-24 h-24 mx-auto rounded-full mb-4'
              />
              <h4 className='text-xl font-semibold mb-2'>Mark Johnson</h4>
              <p className='text-gray-700'>Head of Product Development</p>
              <p className='text-gray-600 text-sm mt-2'>
                Mark leads our product development team, ensuring that our
                products meet the highest standards of quality and innovation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
