/*** import externals ***/
import { useEffect, useState } from "react"

/*** import internals ***/
import { getProductsService } from "../services/products"

export const useGetProducts = () => {
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    getProductsFunction()
  }, [])

  const getProductsFunction = () => {
    getProductsService()
      .then((response) => {
        setProductsList(response.data)
      })
      .catch((error) => console.error(error))
  }

  return { productsList }
}
