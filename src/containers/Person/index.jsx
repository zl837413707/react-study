import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { PERSON } from "../../redux/actions/person";

class Person extends Component {
  add = () => {
    const name = this.name.value;
    const age = this.age.value;
    const personObj = { id: nanoid(), name, age };
    this.props.add(personObj);
    // console.log(personObj);
  };
  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h2>数字:{this.props.count}</h2>
        <input
          ref={(c) => (this.name = c)}
          type="text"
          placeholder="请输入名字"
        />
        <input
          ref={(c) => (this.age = c)}
          type="text"
          placeholder="请输入年龄"
        />
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.peoson.map((data) => {
            return (
              <li key={data.id}>
                {data.name}--{data.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ peoson: state.perosonadd, count: state.add }),
  {
    add: PERSON,
  }
)(Person);
