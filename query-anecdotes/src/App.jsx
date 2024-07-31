import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Anecdotes from './components/Anecdotes'
import { addVote, getAnecdotes } from './requests'

const App = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1,
  })

  if (isPending) {
    return <div>anecdotes are loading...</div>
  }

  if (isError) {
    return (
      <div>
        anecdote service not available due to server problems. error:
        {`${error}`}
      </div>
    )
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <Anecdotes anecdotes={data} />
    </div>
  )
}

export default App
