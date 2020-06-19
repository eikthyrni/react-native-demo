export const getTodoList = (state) => state.todoList;

export const getUser = (state) => state.user;
export const getUserAvatar = (state) => getUser(state).avatar;