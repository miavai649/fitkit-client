const CustomerTestimonials = () => {
  return (
    <section className='my-8'>
      <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-center text-primary-500'>
        Customer Testimonials
      </h3>
      <div className='flex flex-wrap justify-center'>
        <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg max-w-md text-center transform transition-transform hover:scale-105'>
          <p className='text-gray-700 leading-relaxed'>
            "FitKit has truly transformed my workout experience. Their products
            are top-notch and their customer service is exceptional!"
          </p>
          <p className='text-gray-600 text-sm mt-2'>- Sarah M.</p>
        </div>
        <div className='m-4 p-6 bg-gray-200 rounded-lg shadow-lg max-w-md text-center transform transition-transform hover:scale-105'>
          <p className='text-gray-700 leading-relaxed'>
            "I've been using FitKit's gear for years now, and I can't imagine
            using anything else. They deliver quality and reliability every
            time."
          </p>
          <p className='text-gray-600 text-sm mt-2'>- Michael P.</p>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials
