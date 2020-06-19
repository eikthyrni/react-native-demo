import React from 'react';
import { Image } from 'react-native';
import { Avatar } from 'react-native-material-ui';
import useSelector from '../../hooks/useSelector';
import { getUserAvatar } from '../../store/selectors';

export const AVATAR_SIZES = {
  lg: 'lg',
  sm: 'sm'
}

export const DIMENSIONS = {
  lg: 150,
  sm: 70
}

const getStyles = (size) => {
  const dimension = DIMENSIONS[size];

  return {
    resizeMode: 'cover',
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2
  }
}

const UserAvatar = ({ sizes = 'sm' }) => {
  const avatar = useSelector(getUserAvatar);

  return (
    <Avatar
      size={DIMENSIONS[sizes]}
      iconSize={DIMENSIONS[sizes] / 2}
      {...(avatar ? { image: <Image style={getStyles(sizes)} source={{ uri: avatar }}/> } : { icon: 'person' })}
    />
  )
}

export default UserAvatar;
