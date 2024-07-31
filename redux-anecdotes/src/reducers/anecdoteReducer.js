import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      const { id } = action.payload
      return state.map((anecdote) =>
        anecdote.id === id ? action.payload : anecdote
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { updateAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNew = (content) => {
  return async (dispatch) => {
    const returnedNote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(returnedNote))
  }
}

export const addVote = (object) => {
  return async (dispatch) => {
    const { id } = object
    const newObject = { ...object, votes: object.votes + 1 }
    const returnedAnecdote = await anecdoteService.increaseVote(id, newObject)
    console.log(returnedAnecdote)
    dispatch(updateAnecdote(returnedAnecdote))
  }
}

export default anecdoteSlice.reducer
