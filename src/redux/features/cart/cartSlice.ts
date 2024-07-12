import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export type TCartProduct = {
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

const initialState: TCartProduct[] = []

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
    },
    increaseQuantity: (state, action) => {
      const findProductById = state.find((item) => item._id === action.payload)
      if (findProductById) {
        findProductById.orderQuantity += 1
        findProductById.orderPrice =
          findProductById.orderQuantity * findProductById.price
      }
    },
    decreaseQuantity: (state, action) => {
      const findProductById = state.find((item) => item._id === action.payload)
      if (findProductById) {
        findProductById.orderQuantity -= 1
        findProductById.orderPrice =
          findProductById.orderQuantity * findProductById.price
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload)
    }
  }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions

export default cartSlice.reducer
