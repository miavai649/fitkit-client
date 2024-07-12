import { useGetCategoryProductsQuery } from '@/redux/api/api'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
  const { category } = useParams()
  const { data } = useGetCategoryProductsQuery({
    category
  })
  console.log('🚀 ~ CategoryProducts ~ data:', data)
  return (
    <div>
      <h1>This is CategoryProducts component</h1>
    </div>
  )
}

export default CategoryProducts
