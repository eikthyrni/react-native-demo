import React, { useContext } from 'react';
import { Store } from '../store/provider';

const useSelector = (getter) => {
  const { state } = useContext(Store);

  return getter(state);
}

export default useSelector;