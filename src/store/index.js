import {configureStore} from '@reduxjs/toolkit'
import ProductsReducer from './products'
import ProductReducer from './product'
import LikedProductsReducer from './likedProduct'

export default configureStore({
  reducer: {
    products: ProductsReducer,
    product: ProductReducer,
    likedProducts: LikedProductsReducer
  }
})