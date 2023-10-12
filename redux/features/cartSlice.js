import { createSlice } from '@reduxjs/toolkit'

const MAX_QUANTITY = 10

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id)
      if (!existingItem) {
        state.push({ ...action.payload, quantity: 1 })
      } else {
        existingItem.quantity += 1
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    increment: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload)
      if (existingItem) {
        if (existingItem.quantity < MAX_QUANTITY) {
          existingItem.quantity += 1
        }
      }
    },
    decrement: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        }
      }
    },
  },
})

export const { addItem, remove, increment, decrement } = cartSlice.actions
export default cartSlice.reducer
