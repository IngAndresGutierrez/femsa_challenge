/*** import externals ***/
import React from "react"
import { Button } from "@rneui/themed"

/*** import internals ***/
import {
  filterWins,
  filterRedemption,
} from "../../../redux/reducers/productsReducer"

const ButtonsFilterPoints = () => {
  const { productsList } = useSelector(state.products)

  const filterWinsFunction = () => {
    const productsListFiltered = productsList.filter(
      (product) => product.is_redemption !== false
    )

    dispatch(filterWins(productsListFiltered))
  }

  const filterRedemptionsFunction = () => {
    const productsListFiltered = productsList.filter(
      (product) => product.is_redemption === false
    )

    dispatch(filterRedemption(productsListFiltered))
  }

  return (
    <Stack row align="center" spacing={4}>
      <Button title="Ganados" onPress={filterWinsFunction} />
      <Button title="Canjeados" onPress={filterRedemptionsFunction} />
    </Stack>
  )
}

export default ButtonsFilterPoints
