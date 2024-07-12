import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  console.log('🚀 ~ ProductDetails ~ id:', id)

  return (
    <div>
      <h1>This is ProductDetails component</h1>
    </div>
  )
}

export default ProductDetails
