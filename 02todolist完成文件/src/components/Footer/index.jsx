import React, { Component } from "react";
import './index.css'

export default class index extends Component {

  AllSelect = (event) => {
    this.props.checkTodo(event.target.checked)
  }

  selectClear = () =>{
    this.props.clearTodo()
  }


  render() {
    const {todos} = this.props

    const AllCheck = todos.length

    const checkedAll = todos.reduce((pre,current)=>{return pre + (current.done ? 1 : 0)},0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.AllSelect} checked={checkedAll === AllCheck && checkedAll !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{checkedAll}</span> / 全部{AllCheck}
        </span>
        <button className="btn btn-danger" onClick={this.selectClear}>清除已完成任务</button>
      </div>
    );
  }
}
