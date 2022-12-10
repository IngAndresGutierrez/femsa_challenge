/*** import externals ***/
import React from "react"
import { View } from "react-native"

/*** import internals ***/
import CardPoints from "../../organisms/CardPoints"
import { getTotalPoints } from "../../../utils/points"
import MovementsList from "../../organisms/MovementsList"
import { useGetProducts } from "../../../hooks/useGetProducts"
import ButtonsFilterPoints from "../../organisms/ButtonsFilerPoints"

const HomeLayout = ({ navigation }) => {
  const { productsList } = useGetProducts()
  const totalPoints = getTotalPoints(productsList)

  return (
    <View>
      <CardPoints totalPoints={totalPoints} />
      <MovementsList navigation={navigation} />
      <ButtonsFilterPoints />
    </View>
  )
}

export default HomeLayout
