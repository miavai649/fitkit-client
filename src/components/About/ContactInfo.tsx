const ContactInfo = () => {
  return (
    <div className='mb-12'>
      <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-center text-primary-500'>
        Contact Us
      </h3>
      <div className='text-gray-900'>
        <p className='leading-relaxed mb-4 text-center'>
          We value your feedback and inquiries. Contact us through the following
          channels:
        </p>
        <div className='flex flex-col items-center space-y-4'>
          <p className='leading-relaxed'>
            <strong>Email:</strong> mahmudulhaquenoor@gmail.com
          </p>
          <p className='leading-relaxed'>
            <strong>Phone:</strong> +8801603491969
          </p>
          <p className='leading-relaxed'>
            <strong>Address:</strong> 123 Savar New Market, Savar, Dhaka, 1340
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
