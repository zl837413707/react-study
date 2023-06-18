import React, { Component } from "react";

import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  };

  getKey = (key) => {
    this.setState(key);
  };

  render() {
    return (
      <div className="container">
        <Search getKey={this.getKey}></Search>
        <List state={this.state}></List>
      </div>
    );
  }
}
