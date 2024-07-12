import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { TFilterDropdownMenuProps } from '@/types'

const FilteringDropdownMenu = ({
  selectedCategories,
  handleCategory
}: TFilterDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='border border-primary'>
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedCategories.includes('weights')}
          onCheckedChange={(checked) => handleCategory('weights', checked)}>
          Weights
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCategories.includes('cardio')}
          onCheckedChange={(checked) => handleCategory('cardio', checked)}>
          Cardio
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCategories.includes('gear')}
          onCheckedChange={(checked) => handleCategory('gear', checked)}>
          Gear
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCategories.includes('apparel')}
          onCheckedChange={(checked) => handleCategory('apparel', checked)}>
          Apparel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilteringDropdownMenu
