import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'react-native-material-ui';
import { Screens } from '../../constants';
import useSelector from '../../hooks/useSelector';
import { getUser } from '../../store/selectors';
import UserAvatar, { AVATAR_SIZES } from '../../Components/UserAvatar';
import {Flex} from "../../Components/Flex";

const ContainerStyles = {
  flex: 1,
}

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
    <Flex>
      <Drawer>
        <Drawer.Header>
          <Drawer.Header.Account
            avatar={<UserAvatar size={AVATAR_SIZES.SMALL} />}
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
    </Flex>
  )
}

export default Menu;