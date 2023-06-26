import React, { Component } from "react";

const List = [
  { id: "1", content: "我是id1的内容" },
  { id: "2", content: "我是id2的内容" },
  { id: "3", content: "我是id3的内容" },
];

export default class Detail extends Component {
  render() {
    // console.log(this.props);
    const { id, info } = this.props.match.params;
    const findContet = List.find((data) => {
      return data.id === id;
    });
    return (
      <ul>
        <li>{id}</li>
        <li>{info}</li>
        <li>{findContet.content}</li>
      </ul>
    );
  }
}
