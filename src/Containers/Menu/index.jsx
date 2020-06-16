import React from "react";
import {View, StyleSheet} from "react-native";
import {Avatar, Drawer, Toolbar} from "react-native-material-ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    elevation: 4,
    backgroundColor: 'white',
  },
});

const Menu = () => {
  return (
    <View style={styles.container}>

      <Toolbar
        leftElement="arrow-back"
        // onLeftElementPress={() => this.props.navigation.goBack()}
      />
      <Drawer>
        <Drawer.Header>
          <Drawer.Header.Account
            avatar={<Avatar text="A" />}
          />
        </Drawer.Header>
        <Drawer.Section
          items={[
            { icon: 'bookmark-border', value: 'Notifications' }
          ]}
        />
      </Drawer>
    </View>
  )
}

export default Menu;