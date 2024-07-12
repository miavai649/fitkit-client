import { createSlice } from '@reduxjs/toolkit'

type TCart = {
  id: string
  name: string
  price: number
  coverImg: string
  quantity: number
  orderQuantity: number
}

const initialState: TCart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
