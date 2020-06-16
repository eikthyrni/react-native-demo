import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import {COLOR, ThemeContext, getTheme, Toolbar, Button, Card} from "react-native-material-ui";
import Menu from "./src/Containers/Menu";
import Routes from "./Routes";


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

const App = () => {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <Routes />
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
