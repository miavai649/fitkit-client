import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='text-white bg-primary py-6 '>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h5 className='text-lg font-bold text-white'>FitKit</h5>
              <p>&copy; 2024 FitKit. All rights reserved.</p>
            </div>
            <div className='flex space-x-4'>
              <Link to={'/about'}>
                <a className='hover:text-secondary-500'>About</a>
              </Link>
              <a
                href='mailto:mahmudulhaquenoor@gmail.com'
                className='hover:text-secondary-500'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
