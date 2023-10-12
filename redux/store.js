import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/features/cartSlice'
import categoryReducer from '@/redux/features/categorySlice'
import productReducer from '@/redux/features/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoryReducer,
    products: productReducer,
  },
})
