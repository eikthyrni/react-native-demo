import React from 'react';
import {COLOR, ThemeContext, getTheme} from 'react-native-material-ui';
import Navigator, {navigationRef} from './Navigator';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './src/store/provider';

const uiTheme = {
  palette: {
    primaryColor: COLOR.pink300,
  },
  toolbar: {
    container: {
      height: 90,
    },
  },
  fontFamily: 'Arial'
};

const App = () => {
  return (
    <StoreProvider>
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </ThemeContext.Provider>
    </StoreProvider>
  );
}

export default App;
