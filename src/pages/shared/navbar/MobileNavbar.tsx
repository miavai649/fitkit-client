import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu as MenuIcon } from 'lucide-react'
import { navbarItems } from './SiteHeader'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden hover:bg-primary-500 '>
          <MenuIcon className='text-white hover:text-secondary-500' />
        </Button>
      </SheetTrigger>

      <SheetContent side='left'>
        <div className='flex flex-col items-center gap-4'>
          {navbarItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <button
                onClick={() => {
                  setOpen(false)
                }}
                className='relative text-black font-medium transition-colors duration-200 
          hover:text-secondary-500 after:content-[""] after:absolute after:left-0 
          after:-bottom-1 after:w-0 after:h-[2px] after:bg-secondary-500 
          after:transition-all after:duration-300 hover:after:w-full'>
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
