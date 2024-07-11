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
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
