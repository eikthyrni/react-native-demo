import React, { useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-material-ui';
import { Store } from '../../store/provider';
import { uploadAvatarAction } from '../../store/user/actions';
import UserAvatar, { AVATAR_SIZES } from '../../Components/UserAvatar';
import { Box } from '../../Components/Flex';
import * as Permissions from 'expo-permissions';

const AvatarForm = () => {
  const { dispatch } = useContext(Store);

  const requestPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const statusSucceed = status === 'granted';
    if (!statusSucceed) {
      alert(status);
    }
    return statusSucceed
  }

  const handleUpload = async () => {
    const cameraRollGranted = await requestPermissions();
    if (cameraRollGranted) {
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