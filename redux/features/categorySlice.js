import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const getCategories = createAsyncThunk('category', async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  return await res.json()
})

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  },
})

export default categorySlice.reducer
