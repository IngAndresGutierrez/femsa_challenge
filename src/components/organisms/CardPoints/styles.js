import { StyleSheet } from "react-native"
import { colors } from "../../../styles.js/colors"

export const styles = StyleSheet.create({
  viewContainer: {
    marginBottom: 30,
  },
  cardContainer: {
    flex: 1,
    height: 143,
    margin: 54,
    elevation: 5,
    borderRadius: 20,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowColor: colors.black,
    backgroundColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    color: colors.white,
  },
  points: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
})
