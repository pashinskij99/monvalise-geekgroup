import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchLikedProducts } from "./likedProduct";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (page = 1) => {
    const response = await fetch(`https://6346a21f9eb7f8c0f8811913.mockapi.io/products?orderby=top&order=desc&page=${page}&limit=6`)

    const products = await response.json()

    return products
  }
)

export const postProduct = createAsyncThunk(
  'products/postProduct',
  async (formUser, {rejectWithValue, dispatch}) => {
    try {
      const response = await fetch('https://6346a21f9eb7f8c0f8811913.mockapi.io/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formUser)
      })

      const data = await response.json()

      dispatch(fetchProducts())

    } catch (error) {

    }
  }
)

export const likeProducts = createAsyncThunk(
  'products/toggleProducts',
  async (id, {rejectWithValue, dispatch, getState}) => {
		const productFind = getState().products.products.find(product => product.id === id) 

    const response = await fetch(`https://6346a21f9eb7f8c0f8811913.mockapi.io/products/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				like: !productFind.like
			})
		})

    dispatch(likeProduct({id}))
    dispatch(fetchLikedProducts())
  }
)

export const changePriceProducts = createAsyncThunk(
  'products/changePriceProducts',
  async (arg, {rejectWithValue, dispatch, getState}) => {
		const productFind = getState().products.products.find(product => product.id === arg.id) 

    const response = await fetch(`https://6346a21f9eb7f8c0f8811913.mockapi.io/products/${arg.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				price: {
          before: productFind.price.after,
          after: arg.price,
        } 
			})
		})

    const data = await response.json()

    dispatch(changePriceProduct(data)) 

  }
)

const products = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {
    addProduct(state, action){
      state.products.push(action.payload)
    },
    likeProduct(state, action){
      const likedProduct = state.products.find(product => product.id === action.payload.id)
      likedProduct.like = !likedProduct.like
    },
    changePriceProduct(state, action) {
      const findProduct = state.products.find(product => product.id === action.payload.id)
      console.log({
        payload: action.payload
      });
      findProduct.price = action.payload.price
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.products = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [changePriceProducts.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [changePriceProducts.fulfilled]: (state) => {
      state.status = 'resolved'
    },
    [changePriceProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [likeProducts.pending]: (state) => {
      state.error = null
    },
    [likeProducts.rejected]: (state, action) => {
      state.error = action.payload
    },
  }
})

const { addProduct, likeProduct, changePriceProduct } = products.actions

export default products.reducer