export const getTotalPoints = (productsList) => {
  let totalPoints = 0
  let totalPointsWithFormat = ""

  productsList?.forEach((product) => {
    totalPoints += product.points
  })

  totalPointsWithFormat = totalPoints
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  return totalPointsWithFormat
}

export const verifyRedemption = (product) => {
  let pointsText = product.is_redemption ? `-${product.points}` : product.points

  return pointsText
}
