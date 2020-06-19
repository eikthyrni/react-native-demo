import React from "react";
import {View} from "react-native";
import {Avatar, Drawer} from "react-native-material-ui";
import { Screens } from '../../constants';

const ContainerStyles = {
  flex: 1,
}

const Menu = ({ navigationRef, navigate }) => {
  const currentRoute = navigationRef.current?.getCurrentRoute();

  const item = (icon, url) => {
    return {
      icon,
      value: url,
      active: currentRoute?.name === url,
      onPress: () => navigate(url)
    }
  }

  const items = [
    item('bookmark', Screens.todo),
    item('map', Screens.map),
    item('settings', Screens.profile)
  ]

  return (
    <View style={ContainerStyles}>
      <Drawer>
        <Drawer.Header>
          <Drawer.Header.Account
            avatar={<Avatar text="A" />}
            footer={{
              dense: true,
              centerElement: {
                primaryText: 'User name',
                secondaryText: 'mail@email.com',
              },
            }}
          />
        </Drawer.Header>
        <Drawer.Section
          items={items}
        />
      </Drawer>
    </View>
  )
}

export default Menu;