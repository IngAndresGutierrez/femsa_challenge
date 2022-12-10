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
