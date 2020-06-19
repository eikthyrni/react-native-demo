import React from 'react';
import { View, StyleSheet } from 'react-native';
import {COLOR, Drawer} from 'react-native-material-ui';
import { Screens } from '../../constants';
import useSelector from '../../hooks/useSelector';
import { getUser } from '../../store/selectors';
import UserAvatar, { AVATAR_SIZES } from '../../Components/UserAvatar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey500,
    paddingTop: 35,
  }
});

const Menu = ({ navigationRef, navigate }) => {
  const currentRoute = navigationRef.current?.getCurrentRoute();
  const user = useSelector(getUser);

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
    <View style={styles.container}>
      <Drawer>
        <Drawer.Header>
          <Drawer.Header.Account
            avatar={<UserAvatar />}
            footer={{
              dense: true,
              centerElement: {
                primaryText: user.name,
                secondaryText: user.email,
              },
            }}
          />
        </Drawer.Header>
        <Drawer.Section items={items} />
      </Drawer>
    </View>
  )
}

export default Menu;