import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./index.css";

export default class index extends Component {

  state = {
    //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  };

  componentDidMount() {
    this.token = PubSub.subscribe('gitData', (_, data) => {
      this.setState(data)
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }


  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>请输入名字</h2> :
            isLoading ? <h2>Loding...</h2> :
              err ? <h2>{err}</h2> :
                users.map((data) => {
                  return (
                    <div className="card" key={data.id}>
                      <a href={data.html_url} target="_blank" rel="noreferrer">
                        <img
                          alt="profile"
                          src={data.avatar_url}
                          style={{ width: "100px" }}
                        />
                      </a>
                      <p className="card-text">{data.login}</p>
                    </div>
                  );
                })
        }
      </div>
    );
  }
}
