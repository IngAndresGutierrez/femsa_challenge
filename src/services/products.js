/*** import externals ***/
import axios from "axios"

const BASE_URL = "https://6222994f666291106a29f999.mockapi.io"

export const getProductsService = () => {
  return axios.get(`${BASE_URL}/api/v1/products`)
}
