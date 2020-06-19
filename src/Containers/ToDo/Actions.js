import React, { useContext } from 'react';
import {BottomNavigation} from 'react-native-material-ui';
import {Store} from '../../store/provider';
import {clearCheckedTodoAction, clearTodoListAction, createTodoAction} from '../../store/todo/actions';

const Actions = () => {
  const { dispatch } = useContext(Store);

  const createNew = () => {
    dispatch(createTodoAction())
  }

  const removeAll = () => dispatch(clearTodoListAction())

  const removeChecked = () =>  dispatch(clearCheckedTodoAction())

  return (
    <BottomNavigation>
      <BottomNavigation.Action
        key="add"
        icon="add"
        label="Add"
        onPress={createNew}
      />
      <BottomNavigation.Action
        key="clear-checked"
        icon="clear"
        label="Clear checked"
        onPress={removeChecked}
      />
      <BottomNavigation.Action
        key="clear-all"
        icon="clear-all"
        label="Clear all"
        onPress={removeAll}
      />
    </BottomNavigation>
  )
}

export default Actions;