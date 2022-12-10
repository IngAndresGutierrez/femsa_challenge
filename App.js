/*** import externals ***/
import { Provider } from "react-redux"

/*** import internals ***/
import store from "./src/redux/store/store"
import Navigation from "./src/commons/components/Navigation"

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
