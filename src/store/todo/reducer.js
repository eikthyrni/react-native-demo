import { ACTIONS } from './actions';

export const initialState = [
  {
    id: 0,
    text: 'Du',
    checked: false,
  }, {
    id: 1,
    text: 'Du hast',
    description: '',
    checked: true,
  }, {
    id: 2,
    text: 'Du hast mich',
    checked: false,
  }, {
    id: 3,
    text: 'Du hast mich gefragt',
    checked: true,
  }
];

export const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.CREATE:
      const lastTodoId = state.length ? state[state.length - 1].id : 0;

      return [
        ...state,
        {
          id: lastTodoId + 1,
          text: '',
          checked: false
        }
      ]
    case ACTIONS.UPDATE:
      return state.map(item => {
        if (item.id !== action.payload.id) return item

        return {
          ...item,
          ...action.payload
        }
      })
    case ACTIONS.REMOVE:
      return state.filter(item => item.id !== action.payload)
    case ACTIONS.CLEAR_CHECKED:
      return state.filter(item => !item.checked)
    case ACTIONS.CLEAR_ALL:
      return []
    default:
      return state
  }
};
