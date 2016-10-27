import React, {Component } from 'react'
// import Header from './Header'
// import MainSection from './MainSection'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: initialState,
      gameID: null,
      player: 0
    }
  }

  componentDidMount() {
    {this.addTodo('Did this work')}
  }
  addTodo = (text) => {
    const todos = [
      {
        id: this.state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: text
      },
      ...this.state.todos
    ]
    this.setState({todos})
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})
  }

  editTodo = (id, text) => {
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    )
    this.setState({todos})
  }

  completeTodo = (id) => {
    const todos = this.state.todos.map(todo =>
      todo.id === id ?
        { ...todo, completed: !todo.completed } : todo
    )
    this.setState({todos})
  }

  completeAll = () => {
    const areAllMarked = this.state.todos.every(todo => todo.completed)
    const todos = this.state.todos.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }))
    this.setState({todos})
  }

  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => todo.completed === false)
    this.setState({todos})
  }

  actions = {
    addTodo: this.addTodo,
    deleteTodo: this.deleteTodo,
    editTodo: this.editTodo,
    completeTodo: this.completeTodo,
    completeAll: this.completeAll,
    clearCompleted: this.clearCompleted
  }


  render() {
    const {todos, actions} = this.state
    return(
      <div>
        {console.log(this.state.todos)}
        {/* <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} /> */}
      </div>
    )
  }
}

export default App