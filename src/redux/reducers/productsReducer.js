/*** import externals ***/
import { createSlice } from "@reduxjs/toolkit"

const productsReducer = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    saveProducts(state) {
      console.log("To do", state)
    },
    filterWins(state) {
      console.log("To do", state)
    },
    filterRedemption(state) {
      console.log("To do", state)
    },
  },
})

export const { filterWins, filterRedemption, saveProducts } =
  productsReducer.actions
export default productsReducer.reducer
