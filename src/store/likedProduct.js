import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchLikedProducts = createAsyncThunk(
  'likedProducts/fetchLikedProducts',
  async () => {
    const response = await fetch(`https://6346a21f9eb7f8c0f8811913.mockapi.io/products?like=true`)

    const likedProducts = await response.json()

		return likedProducts
  }
)

const likedProducts = createSlice({
  name: 'likedProducts',
  initialState: {
    likedProducts: [],
    likedProductsStatus: null,
    likedProductsError: null,
  },
  reducers: {},
  extraReducers: {
    [fetchLikedProducts.pending]: (state) => {
      state.likedProductsStatus = 'loading'
      state.likedProductsError = null
    },
    [fetchLikedProducts.fulfilled]: (state, action) => {
      state.likedProductsStatus = 'resolved'
			state.likedProducts = action.payload
    },
    [fetchLikedProducts.rejected]: (state, action) => {
      state.likedProductsStatus = 'rejected'
      state.likedProductsError = action.payload
    },
  }
})

export default likedProducts.reducer