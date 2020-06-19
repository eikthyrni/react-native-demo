export const ACTIONS = {
  CREATE: 'CREATE',
  CLEAR_ALL: 'CLEAR_ALL',
  CLEAR_CHECKED: 'CLEAR_CHECKED',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE'
}

export const createTodoAction = () => ({ type: ACTIONS.CREATE });

export const clearCheckedTodoAction = () => ({ type: ACTIONS.CLEAR_CHECKED });

export const clearTodoListAction = () => ({ type: ACTIONS.CLEAR_ALL });

export const updateTodoAction = (payload) => {
  if (payload.id === undefined) return

  return {
    type: ACTIONS.UPDATE,
    payload: payload
  }
}

export const removeTodoAction = (id) => {
  if (id === undefined) return

  return {
    type: ACTIONS.REMOVE,
    payload: id
  }
}
