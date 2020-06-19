import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, ListItem } from 'react-native-material-ui';
import { Store } from '../../store/provider';
import { removeTodoAction, updateTodoAction } from '../../store/todo/actions';
import Input from './Input';

const checkedStyles = StyleSheet.create({
  opacity: 0.5
});

export const ITEM_STATES = {
  EDIT: 'EDIT',
  VIEW: 'VIEW'
}

const Item = ({ id, checked, text }) => {
  const { dispatch } = useContext(Store);
  const [itemState, setItemState] = useState(ITEM_STATES.VIEW);

  useEffect(() => {
    if (!text.length) {
      setItemState(ITEM_STATES.EDIT)
    }
  }, [text]);

  const isEditState = itemState === ITEM_STATES.EDIT;

  const handleUpdate = (payload) => dispatch(updateTodoAction({ id, ...payload }))

  const handlePress = () => !isEditState && handleUpdate({ checked: !checked })

  const handleLongPress = () => !isEditState && setItemState(ITEM_STATES.EDIT)

  const removeItem = () => dispatch(removeTodoAction(id))

  return (
    <View style={checked && checkedStyles}>
      <ListItem
        divider
        leftElement={<Checkbox label='' value={id} checked={checked} onCheck={() => {}}/>}
        centerElement={isEditState ? <Input {...{ text, removeItem, setItemState, handleUpdate }} /> : text}
        rightElement='close'
        onPress={handlePress}
        onLongPress={handleLongPress}
        onRightElementPress={removeItem}
      />
    </View>
  )
}

export default Item;