import React from 'react';
import * as todo from './todo/reducer';

export const initialState = {
  todoList: todo.initialState
};

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

export const reducer = combineReducers({
  todoList: todo.reducer,
});
