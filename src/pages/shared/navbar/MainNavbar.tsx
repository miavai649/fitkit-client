import { Button } from '@/components/ui/button'

const mainNavItems = ['A', 'B', 'C']

const MainNavbar = () => {
  return (
    <div className='mr-4 hidden gap-2 md:flex'>
      {mainNavItems.map((item, index) => (
        <Button key={index} variant='link' className='text-white'>
          {item}
        </Button>
      ))}
    </div>
  )
}

export default MainNavbar
