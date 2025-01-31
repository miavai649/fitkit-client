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
  handleCategory: (category: string, checked: boolean) => void
}

export type TSearchBarProps = {
  searchTerm: string
  debouncedSearch: (value: string) => void
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
  id: string
  name: string
  images: string[]
  price: number
  delay: number
}

export type TUpdateProductModalProps = {
  product: TProduct
}

export type TProductCart = {
  _id: string
  name: string
  price: number
  description: string
  images: string[]
  category: 'weights' | 'cardio' | 'gear' | 'apparel'
  quantity: number
  stock: 'in-stock' | 'out-stock'
  orderQuantity: number
  orderPrice: number
}

export type TPayment = {
  name: string
  email: string
  phone: string
  address: string
  cart: TProductCart[]
  totalPrice: number
}

export interface IPaginationProps {
  totalItems?: number
  currentPage: number
  onPageChange: (page: number) => void
}
