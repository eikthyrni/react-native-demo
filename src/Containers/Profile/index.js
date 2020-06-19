import React, { useState, useContext } from 'react';
import { TextInput, ScrollView } from 'react-native';
import ScreenWrapper from '../../ScreenWrapper';
import { Button, ListItem, Subheader } from 'react-native-material-ui';
import useSelector from '../../hooks/useSelector';
import { getUser } from '../../store/selectors';
import AvatarForm from './AvatarForm';
import { Box, Flex } from '../../Components/Flex';
import { Store } from '../../store/provider';
import { updateUserAction } from '../../store/user/actions';

const Profile = () => {
  const { name, email } = useSelector(getUser);
  const { dispatch } = useContext(Store);

  const [state, setState] = useState({ name, email });
  const [isDisabledSubmit, setDisableSubmit] = useState(true);

  const handleNameChange = (value) => {
    setState({
      ...state,
      name: value
    })
    setDisableSubmit(false);
  }

  const handleEmailChange = (value) => {
    setState({
      ...state,
      email: value
    })
    setDisableSubmit(false);
  }

  const handleSubmit = () => {
    dispatch(updateUserAction(state));
    setDisableSubmit(true);
  }

  return (
    <ScreenWrapper>
      <ScrollView>
        <Subheader text='Profile' />
        <Flex align='center'>
          <Box style={{ display: 'flex', alignItems: 'center'}}>
            <AvatarForm />
          </Box>
          <Box style={{ marginTop: 20 }}>
            <ListItem
              divider
              leftElement='face'
              centerElement={
                <TextInput value={state.name} onChangeText={handleNameChange} />
              }
            />
          </Box>
          <Box>
            <ListItem
              divider
              leftElement='mail'
              centerElement={
                <TextInput value={state.email} onChangeText={handleEmailChange} />
              }
            />
          </Box>
          <Box style={{ marginTop: 20 }}>
            <Button
              raised
              primary
              text='Save'
              onPress={handleSubmit}
              disabled={isDisabledSubmit}
            />
          </Box>
        </Flex>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default Profile;
