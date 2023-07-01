import React, { Component } from "react";

import { createIncrementAction } from "../../redux/actions/count";

import { connect } from "react-redux";

class Count extends Component {
  //加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  //减法
  decrement = () => {
    // const { value } = this.selectNumber;
  };
  //奇数再加
  incrementIfOdd = () => {
    // const { value } = this.selectNumber;
  };
  //异步加
  incrementAsync = () => {
    // const { value } = this.selectNumber;
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.Count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { Count: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//   };
// }

export default connect((state) => ({ Count: state.add }), {
  jia: createIncrementAction,
})(Count);
