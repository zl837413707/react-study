import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
    ]
  }

  addTodo = (todoObj) => {
    const newTodos = [todoObj, ...this.state.todos]
    this.setState({ todos: newTodos })
  }

  changeTodo = (id, done) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodo })
  }

  deleteTodo = (id)=>{
    const newTodo = this.state.todos.filter((todo)=>{
      return todo.id !== id
    })

    this.setState({todos:newTodo})
  }

  checkTodo = (flag)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      return {...todo,done:flag}
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkTodo={this.checkTodo}></Footer>
        </div>
      </div>
    )
  }
}