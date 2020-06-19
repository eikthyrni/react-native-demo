import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const Store = React.createContext({});

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ dispatch, state }}>{children}</Store.Provider>
}

export default StoreProvider;