import React, { Component } from 'react'
import './index.css'
import Item from '../Item'

export default class index extends Component {

  render() {
    return (
      <ul className="todo-main">
        <Item></Item>
      </ul>
    )
  }
}
