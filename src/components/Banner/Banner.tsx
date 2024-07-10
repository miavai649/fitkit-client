import { bannerImg } from '@/assets'

const Banner = () => {
  return (
    <div className='relative w-full h-[400px] md:h-[500px] lg:h-[750px] overflow-hidden m-0'>
      <img
        src={bannerImg}
        alt='Banner Image'
        width={1600}
        height={900}
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-75'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
          Elevate Your Fitness Journey
        </h2>
        <p className='text-xl md:text-2xl lg:text-3xl text-white'>
          Discover premium equipment and accessories for all your workout needs.
        </p>
      </div>
    </div>
  )
}

export default Banner
