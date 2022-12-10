/*** import externals ***/
import React from "react"
import { ScrollView } from "react-native"
import { ListItem, Icon } from "@rneui/themed"

/*** import internals ***/
import { styles } from "./styles"

const MovementsList = ({ productsList }) => {
  const renderMovementsList = productsList?.map((product) => (
    <ListItem key={product.id}>
      <Icon name={product.icon} />
      <ListItem.Content>
        <ListItem.Title>{product.product}</ListItem.Title>
        <ListItem.Title>{product.createdAt}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ))

  return <ScrollView style={styles.container}>{renderMovementsList}</ScrollView>
}

export default MovementsList
