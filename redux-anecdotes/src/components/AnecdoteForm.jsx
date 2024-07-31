import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddNew = (e) => {
    e.preventDefault()
    const content = e.target.new.value
    dispatch(createNew(content))
    e.target.new.value = ''
  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleAddNew}>
        <div>
          <input name="new" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
