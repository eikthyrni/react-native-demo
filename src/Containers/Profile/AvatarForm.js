import React, { useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-material-ui';
import { Store } from '../../store/provider';
import { uploadAvatarAction } from '../../store/user/actions';
import UserAvatar, { AVATAR_SIZES } from '../../Components/UserAvatar';
import { Box } from '../../Components/Flex';

const AvatarForm = () => {
  const { dispatch } = useContext(Store);

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    const statusSucceed = status === 'granted';
    if (!statusSucceed) {
      alert(`Can't upload photo without permissions`);
    }
    return statusSucceed
  }

  const handleUpload = async () => {
    if (await requestPermissions()) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
        base64: true
      });

      if (!result.cancelled) {
        dispatch(uploadAvatarAction(result.uri));
      }
    }
  };

  return (
    <Box style={{ alignItems: 'center', height: 200 }}>
      <UserAvatar sizes={AVATAR_SIZES.lg} />
      <Button text='Upload photo' onPress={handleUpload} />
    </Box>
  )
}

export default AvatarForm;