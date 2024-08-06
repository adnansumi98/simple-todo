import {useState} from 'react'

import './index.css'

const AddTodo = props => {
  const {addTodoList} = props
  const [newTodo, setNewTodo] = useState('')
  const [times, setTimes] = useState(1)

  return (
    <form
      className="addtodo-form"
      onSubmit={event => {
        for (let i = 0; i < times; i += 1) {
          addTodoList(event, newTodo)
        }
        setNewTodo('')
      }}
    >
      <textarea
        className="input addtodo-input"
        value={newTodo}
        onChange={event => {
          setNewTodo(event.target.value)
        }}
      />
      <input
        type="number"
        className="input times-input"
        value={times}
        onChange={event => {
          const {value} = event.target
          if (value > 0) {
            setTimes(value)
          }
        }}
      />
      <button className="btn addtodo-button" type="submit">
        Add
      </button>
    </form>
  )
}

export default AddTodo
