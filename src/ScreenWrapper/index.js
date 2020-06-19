import React from 'react';
import { View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { useNavigation } from '@react-navigation/core';

const styles = {
  wrapper: {
    flex: 1
  },
  toolbar: {
    container: { paddingTop: 25 }
  }
};

const ScreenWrapper = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Toolbar
        leftElement='menu'
        onLeftElementPress={() => navigation.openDrawer()}
        style={styles.toolbar}
      />
      {children}
    </View>
  )
}

export default ScreenWrapper;
