export const ACTIONS = {
  UPLOAD_AVATAR: 'UPLOAD_AVATAR',
  UPDATE: 'UPDATE'
}

export const uploadAvatarAction = (payload) => ({
  type: ACTIONS.UPLOAD_AVATAR,
  payload
})

export const updateUserAction = (payload) => ({
  type: ACTIONS.UPDATE,
  payload
})
