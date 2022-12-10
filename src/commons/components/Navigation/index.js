/*** import externals ***/
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/*** import internals ***/
import HomeScreen from "../../../components/pages/Home"
import DetailScreen from "../../../components/pages/Detail"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Bienvenido de vuelta" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Nombre Producto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
