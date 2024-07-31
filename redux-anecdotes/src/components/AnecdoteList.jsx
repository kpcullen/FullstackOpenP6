import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter !== 'ALL'
      ? anecdotes.filter((anecdote) => anecdote.content.includes(filter))
      : anecdotes
  })

  const orderedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(addVote(anecdote))
    dispatch(setNotification(anecdote.content, 3))
  }

  return (
    <>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
