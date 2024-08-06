import {useState} from 'react'

import './index.css'

const AddTodo = props => {
  const {addTodoList} = props
  const [newTodo, setNewTodo] = useState('')

  return (
    <form
      className="addtodo-form"
      onSubmit={event => {
        addTodoList(event, newTodo)
        setNewTodo('')
      }}
    >
      <input
        type="text"
        className="addtodo-input"
        value={newTodo}
        onChange={event => {
          setNewTodo(event.target.value)
        }}
      />
      <button className="btn addtodo-button" type="submit">
        Add
      </button>
    </form>
  )
}

export default AddTodo
