import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/Containers/Home";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;

