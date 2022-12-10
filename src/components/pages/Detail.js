/*** import externals ***/
import React from "react"
import DetailLayout from "../layouts/DetailLayout/DetailLayout"

const DetailScreen = ({ route }) => {
  return <DetailLayout productData={route.params.product} />
}

export default DetailScreen
