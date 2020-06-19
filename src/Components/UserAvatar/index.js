import React from 'react';
import {Image, StyleSheet} from "react-native";
import {Avatar} from "react-native-material-ui";
import useSelector from "../../hooks/useSelector";
import {getUserAvatar} from "../../store/selectors";

export const AVATAR_SIZES = {
  BIG: 'BIG',
  SMALL: 'SMALL'
}

export const DIMENSIONS = {
  BIG: 150,
  SMALL: 90
}

const styles = StyleSheet.create({
  BIG: {
    resizeMode: 'cover',
    width: DIMENSIONS.BIG,
    height: DIMENSIONS.BIG,
    borderRadius: DIMENSIONS.BIG / 2
  },
  SMALL: {
    resizeMode: 'cover',
    width: DIMENSIONS.SMALL,
    height: DIMENSIONS.SMALL,
    borderRadius: DIMENSIONS.SMALL / 2
  }
});

const UserAvatar = ({ size }) => {
  const avatar = useSelector(getUserAvatar);

  return (
    <Avatar
      size={DIMENSIONS[size]}
      iconSize={DIMENSIONS[size] / 2}
      {...{
        ...(avatar ? { image: <Image style={styles[size]} source={{ uri: avatar }}/> } : { icon: 'person' })
      }}
    />
  )
}

export default UserAvatar;
