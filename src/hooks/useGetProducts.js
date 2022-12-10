/*** import externals ***/
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

/*** import internals ***/
import { getProductsService } from "../services/products"
import { saveProducts } from "../redux/reducers/productsReducer"

export const useGetProducts = () => {
  const [productsList, setProductsList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getProductsFunction()
  }, [])

  const getProductsFunction = () => {
    getProductsService()
      .then((response) => {
        setProductsList(response.data)
        dispatch(saveProducts(response.data))
      })
      .catch((error) => console.error(error))
  }

  return { productsList }
}
