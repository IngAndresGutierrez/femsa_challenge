import DetailLayout from "../../../components/layouts/DetailLayout/DetailLayout"

test("Verify render word into DetailLayout", async () => {
  const expectedWord = "compra"

  render(<DetailLayout />)

  const word = await screen.findByTestId("titlePoints")

  expect(word).toHaveTextContent(expectedWord)

  expect(screen.toJSON()).toMatchSnapshot()
})
