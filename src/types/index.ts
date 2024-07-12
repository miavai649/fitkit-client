export type TCategoryCardProps = {
  image: string
  name: string
  idx: number
}

export type TBenefitCardProps = {
  icon: JSX.Element
  title: string
  description: string
  img: string
}

export type TFilterDropdownMenuProps = {
  selectedCategories: string[]
  handleCategoryChange: (category: string, checked: boolean) => void
}

export type TSearchBarProps = {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}
export type TSortingDropdownMenuProps = {
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
}

export type TProduct = {
  _id: string
  name: string
  price: number
  description: string
  images: string[]
  category: 'weights' | 'cardio' | 'gear' | 'apparel'
  quantity: number
  stock: 'in-stock' | 'out-stock'
}

export type TProductCardProps = {
  name: string
  images: string[]
  price: number
  delay: number
}
