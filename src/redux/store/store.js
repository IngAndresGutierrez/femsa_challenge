/*** import externals ***/
import { configureStore } from "@reduxjs/toolkit"

/*** import internals ***/
import productsReducer from "../reducers/productsReducer"

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

export default store
