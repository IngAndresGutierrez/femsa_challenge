/*** import externals ***/
import React from "react"
import { Image } from "@rneui/themed"
import { View, Text, ActivityIndicator } from "react-native"

/*** import internals ***/
import { styles } from "./styles"

const DetailLayout = ({ productData }) => {
  const { image, product, points, createdAt } = productData

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product}</Text>
      <Image
        source={{ uri: image }}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.titleDetail}>Detalles del producto:</Text>
      <Text style={styles.date}>Comprado el {createdAt}</Text>
      <Text style={styles.titlePoints} testID="titlePoints">
        Con esta compra acumulaste:
      </Text>
      <Text style={styles.points}>{points}</Text>
    </View>
  )
}

export default DetailLayout
