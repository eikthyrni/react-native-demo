import React, { useContext } from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import { Store } from '../../store/provider';
import { clearCheckedTodoAction, clearTodoListAction, createTodoAction } from '../../store/todo/actions';

const Actions = () => {
  const { dispatch } = useContext(Store);

  return (
    <BottomNavigation>
      <BottomNavigation.Action
        key="add"
        icon="add"
        label="Add"
        onPress={() => dispatch(createTodoAction())}
      />
      <BottomNavigation.Action
        key="clear-checked"
        icon="clear"
        label="Clear checked"
        onPress={() =>  dispatch(clearCheckedTodoAction())}
      />
      <BottomNavigation.Action
        key="clear-all"
        icon="clear-all"
        label="Clear all"
        onPress={() => dispatch(clearTodoListAction())}
      />
    </BottomNavigation>
  )
}

export default Actions;