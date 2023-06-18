import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class index extends Component {

  static propTypes = {
    changeTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  }

  render() {
    const {todos,changeTodo,deleteTodo} = this.props
    // console.log(todos);
    return (
      <ul className="todo-main">
        {todos.map((todos)=>{
          return <Item {...todos} key={todos.id} changeTodo={changeTodo} deleteTodo={deleteTodo}></Item>
        })}
      </ul>
    )
  }
}
