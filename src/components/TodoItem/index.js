import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, editTodoList} = props
  const {id, title} = todoDetails
  const [alterButton, setAlterButton] = useState('edit')
  const [task, setTask] = useState('')

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditTodo = (taskId, taskTitle) => {
    setAlterButton('save')
    setTask(taskTitle)
  }

  const onSaveTodo = taskId => {
    setAlterButton('edit')
    editTodoList(taskId, task)
    setTask('')
  }

  return (
    <li className="todo-item" key={id}>
      {alterButton === 'edit' ? (
        <p className="title">{title}</p>
      ) : (
        <input
          className="title title-edit"
          value={task}
          onChange={event => setTask(event.target.value)}
        />
      )}
      <div>
        {alterButton === 'edit' ? (
          <button
            type="button"
            className="btn edit-btn"
            onClick={() => onEditTodo(id, title)}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="btn save-btn"
            onClick={() => onSaveTodo(id)}
          >
            Save
          </button>
        )}
        <button type="button" className="btn delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
