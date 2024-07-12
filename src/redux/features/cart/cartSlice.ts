import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export type TProduct = {
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

const initialState: TProduct[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if product already exists in cart
      const existingProduct = state.find(
        (item) => item._id === action.payload._id
      )
      if (existingProduct) {
        if (existingProduct.orderQuantity < existingProduct.quantity) {
          existingProduct.orderQuantity += 1
          existingProduct.orderPrice =
            existingProduct.orderQuantity * existingProduct.price
        } else {
          toast.error('Cannot add more than available quantity.')
        }
      } else {
        state.push({
          ...action.payload,
          orderQuantity: 1,
          orderPrice: action.payload.price
        })
      }

      // product added into redux local state
      // state.push({
      //   ...action.payload,

      //   orderQuantity: 1,
      //   orderPrice: action.payload.price
      // })
    }
  }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
