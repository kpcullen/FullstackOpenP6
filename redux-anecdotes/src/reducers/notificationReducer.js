import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(_, action) {
      return action.payload
    },
    clearMessage() {
      return ''
    },
  },
})
export const { clearMessage, setMessage } = notificationSlice.actions

export const setNotification = (content, seconds) => {
  return async (dispatch) => {
    dispatch(setMessage(content))

    setTimeout(() => {
      dispatch(clearMessage())
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer
