import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { ITEM_STATES } from './Item';

const Input = ({ text, removeItem, setItemState, handleUpdate }) => {
  const [inputValue, setInputValue] = useState(text);

  const handleChange = (value) => setInputValue(value);

  const handleSubmit = () => {
    if (inputValue) {
      handleUpdate({ text: inputValue })
    } else {
      removeItem()
    }
    setItemState(ITEM_STATES.VIEW)
  }

  return (
    <TextInput
      autoFocus
      onBlur={handleSubmit}
      onChangeText={handleChange}
      value={inputValue}
    />
  )
};

export default React.memo(Input);