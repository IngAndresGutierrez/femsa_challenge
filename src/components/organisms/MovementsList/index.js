/*** import externals ***/
import React from "react"
import { ScrollView } from "react-native"
import { useSelector } from "react-redux"
import { ListItem, Icon } from "@rneui/themed"

/*** import internals ***/
import { styles } from "./styles"
import { verifyRedemption } from "../../../utils/points"

const MovementsList = ({ navigation }) => {
  const { productsList } = useSelector(state.products)

  const onViewDetail = (product) => {
    navigation.navigate("Detail", { product })
  }

  const renderMovementsList = productsList?.map((product) => (
    <ListItem key={product.id} onPress={() => onViewDetail(product)}>
      <Icon name={product.icon} />
      <ListItem.Content>
        <ListItem.Title>
          {product.product} {verifyRedemption(product)}
        </ListItem.Title>
        <ListItem.Title>{product.createdAt}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ))

  return <ScrollView style={styles.container}>{renderMovementsList}</ScrollView>
}

export default MovementsList
