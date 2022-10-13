import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const response = await fetch(`https://6346a21f9eb7f8c0f8811913.mockapi.io/products/${id}`)

    const product = await response.json()

		console.log(product);

    return product
  }
)

const product = createSlice({
  name: 'product',
  initialState: {
    product: null,
    productStatus: null,
    productError: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.productStatus = 'loading'
      state.productError = null
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.productStatus = 'resolved'
      state.product = action.payload
    },
    [fetchProduct.rejected]: (state, action) => {
      state.productStatus = 'rejected'
      state.productError = action.payload
    },
  }
})

// const { addProduct } = products.actions

export default product.reducer