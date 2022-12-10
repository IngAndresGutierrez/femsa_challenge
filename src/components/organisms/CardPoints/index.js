/*** import externals ***/
import React from "react"
import { Text, Card } from "@rneui/themed"
import { View, ScrollView } from "react-native"

/*** import internals ***/
import { styles } from "./styles"
import { getNameCurrentMonth } from "../../../utils/dates"

const CardPoints = ({ totalPoints }) => {
  const currentMonth = getNameCurrentMonth()

  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <Card containerStyle={styles.cardContainer}>
          <Card.Title style={styles.title}>{currentMonth}</Card.Title>
          <Text style={styles.points}>{`${totalPoints} pts`}</Text>
        </Card>
      </View>
    </ScrollView>
  )
}

export default CardPoints
