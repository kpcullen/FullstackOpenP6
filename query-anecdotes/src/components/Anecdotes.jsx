import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addVote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const Anecdotes = ({ anecdotes }) => {
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({
    mutationFn: addVote,
    onSuccess: (returnedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(
        ['anecdotes'],
        anecdotes.map((anecdote) =>
          anecdote.id === returnedAnecdote.id ? returnedAnecdote : anecdote
        )
      )
      notificationDispatch({
        type: 'VOTE',
        payload: returnedAnecdote.content,
      })
      setTimeout(() => {
        notificationDispatch({ type: 'CLEAR' })
      }, 5000)
    },
  })
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
  }
  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote)}>vote</button>
      </div>
    </div>
  ))
}

export default Anecdotes
