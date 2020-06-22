export const ACTIONS = {
  UPLOAD_AVATAR: 'UPLOAD_AVATAR',
  UPDATE_USER: 'UPDATE_USER'
}

export const uploadAvatarAction = (payload) => ({
  type: ACTIONS.UPLOAD_AVATAR,
  payload
})

export const updateUserAction = (payload) => ({
  type: ACTIONS.UPDATE_USER,
  payload
})
