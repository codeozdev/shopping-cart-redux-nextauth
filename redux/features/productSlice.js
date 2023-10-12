import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '@/utils/status'

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
}

export const getProducts = createAsyncThunk('getproducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return await res.json()
})

export const getCategoryProducts = createAsyncThunk('getcategory', async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  return await res.json()
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCEEDED
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED
      })

      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCEEDED
        state.products = action.payload
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED
      })
  },
})

export default productSlice.reducer
