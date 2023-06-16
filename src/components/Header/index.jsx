import React,{Component} from 'react'
import {nanoid} from 'nanoid'


import './index.css'

export default class Hello extends Component{



  addItem = (event)=>{
    const {keyCode,target} = event
    if(keyCode !== 13) return
    if(target.value.trim() === '') {
      alert('输入内容不能为空')
      return
    }
    const todoobj = {id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoobj)
    target.value = ''
  }

  render(){
    return(
      <div className="todo-header">
        <input onKeyUp={this.addItem} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}