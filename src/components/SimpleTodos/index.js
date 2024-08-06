import {Component} from 'react'

import TodoItem from '../TodoItem'
import AddTodo from '../AddTodo'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  addTodoList = (event, newTodo) => {
    event.preventDefault()
    this.setState(prevState => ({
      todosList: [
        ...prevState.todosList,
        {id: prevState.todosList.length + 1, title: newTodo},
      ],
    }))
  }

  editTodoList = (id, editedTask) => {
    const {todosList} = this.state
    const index = todosList.findIndex(todo => todo.id === id)

    if (index !== -1) {
      const updatedTodoList = [...todosList]
      updatedTodoList[index] = {id, title: editedTask}
      this.setState({todosList: updatedTodoList})
    } else {
      console.log(`Todo with id ${id} not Found`)
    }
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <AddTodo addTodoList={this.addTodoList} />
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                editTodoList={this.editTodoList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
