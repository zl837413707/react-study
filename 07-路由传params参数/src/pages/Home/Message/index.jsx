import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./detail";

export default class Message extends Component {
  state = {
    info: [
      { id: '1', info: "message1" },
      { id: '2', info: "message2" },
      { id: '3', info: "message3" },
    ],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.info.map((data) => {
            return (
              <li key={data.id}>
                <Link to={`/home/message/detail/${data.id}/${data.info}`}>
                  {data.info}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:info" component={Detail}></Route>
      </div>
    );
  }
}
