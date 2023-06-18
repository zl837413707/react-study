import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class index extends Component {

  state={mouse:false}

  mouseHandle = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  changeTodo = (id)=>{
    return (event)=>{
      this.props.changeTodo(id,event.target.checked)
    }
  }

  deleteTodo =(id)=>{
    if(window.confirm('确认删除吗?')){
      this.props.deleteTodo(id)
    }
  }

  static propTypes = {
    changeTodo:PropTypes.func.isRequired,
  }
  
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{background:mouse ? '#ddd' : '#fff'}} onMouseEnter={this.mouseHandle(true)} onMouseLeave={this.mouseHandle(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeTodo(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.deleteTodo(id)}} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
