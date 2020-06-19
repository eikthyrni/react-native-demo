import React from 'react';
import * as todo from './todo/reducer';
import * as user from './user/reducer';
import { combineReducers } from './combineRecucers';

export const initialState = {
  todoList: todo.initialState,
  user: user.initialState,
};

export const reducer = combineReducers({
  todoList: todo.reducer,
  user: user.reducer,
});
