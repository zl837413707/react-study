import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props.state;
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
