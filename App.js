import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import {COLOR, ThemeContext, getTheme, Toolbar, Button, Card} from "react-native-material-ui";
import Menu from "./src/Containers/Menu";
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./Routes";
import {createStackNavigator} from "@react-navigation/stack";


const uiTheme = {
  palette: {
    primaryColor: COLOR.pink300,
  },
  toolbar: {
    container: {
      height: 150,
    },
  },
  fontFamily: 'Arial'
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


const App = () => {

  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/*<View>*/}
      {/*  <Toolbar*/}
      {/*    leftElement="menu"*/}
      {/*    // onLeftElementPress={() => Alert.alert('alert')}*/}
      {/*    centerElement="Title"*/}
      {/*  />*/}
      {/*  <Menu />*/}
      {/*  <Button primary text="Primary" />*/}
      {/*  <Home />*/}
      {/*</View>*/}
    </ThemeContext.Provider>
  );
}

export default App;
