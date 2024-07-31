import { createSlice } from '@reduxjs/toolkit'

const initialState = 'ALL'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange(action) {
      return action
    },
  },
})

// const filterReducer = (state = 'ALL', action) => {
//   switch (action.type) {
//     case 'SET_FILTER':
//       return action.payload
//     default:
//       return state
//   }
// }

// export const filterChange = (filter) => {
//   return {
//     type: 'SET_FILTER',
//     payload: filter,
//   }
// }

export default filterSlice.reducer
export const { filterChange } = filterSlice.actions
