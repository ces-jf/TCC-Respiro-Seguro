import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/Screens/Home/Home";
import Perguntas from "./src/Screens/Perguntas/Perguntas";
import Respostas from "./src/Screens/Respostas/Respostas";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perguntas"
              component={Perguntas}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="Respostas" component={Respostas} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
