import React from 'react';
import { View } from "react-native";
import {Toolbar} from "react-native-material-ui";
import {useNavigation} from "@react-navigation/core";

const ContainerStyles = {
  flex: 1,
};

const ScreenWrapper = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={ContainerStyles}>
      <Toolbar
        leftElement="menu"
        onLeftElementPress={() => navigation.openDrawer()}
      />
      {children}
    </View>
  )
}

export default ScreenWrapper;
