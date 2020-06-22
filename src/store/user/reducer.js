import { ACTIONS } from './actions';

export const initialState = {
  name: 'Anastasia',
  email: 'eikthyrni@gmail.com',
  avatar: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPLOAD_AVATAR:
      return {
        ...state,
        avatar: action.payload
      }
    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      }
    default:
      return state
  }
}
