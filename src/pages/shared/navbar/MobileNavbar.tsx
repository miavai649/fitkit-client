import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu as MenuIcon } from 'lucide-react'

const mainNavItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon className='text-white' />
        </Button>
      </SheetTrigger>

      <SheetContent side='left'>
        <div className='flex flex-col items-center gap-4'>
          {mainNavItems.map((item, index) => (
            <button
              key={index}
              className='relative text-black font-medium transition-colors duration-200 
                     hover:text-secondary-500 after:content-[""] after:absolute after:left-0 
                     after:-bottom-1 after:w-0 after:h-[2px] after:bg-secondary-500 
                     after:transition-all after:duration-300 hover:after:w-full'>
              {item.name}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
