import React from "react";
import Profile from "./src/Containers/Profile";
import Map from "./src/Containers/Map";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Menu from "./src/Containers/Menu";
import { Screens } from './src/constants';
import ToDo from "./src/Containers/ToDo";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Screens.todo}
      drawerContent={() => <Menu {...{ navigationRef, navigate }} />}
    >
      <Drawer.Screen name={Screens.profile} component={Profile} />
      <Drawer.Screen name={Screens.map} component={Map} />
      <Drawer.Screen name={Screens.todo} component={ToDo} />
    </Drawer.Navigator>
  )
}

export default Navigator;

