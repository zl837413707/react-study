import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class index extends Component {
  Search = () => {
    // this.props.getKey({ isFirst: false, isLoading: true });
    PubSub.publish("gitData", { isFirst: false, isLoading: true });
    const { keyWord } = this;
    axios.get(`https://api.github.com/search/users?q=${keyWord.value}`).then(
      (response) => {
        // console.log(response.data.items);
        PubSub.publish("gitData", {
          isFirst: false,
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        PubSub.publish("gitData", {
          isLoading: false,
          err: error.message,
        });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWord = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.Search}>Search</button>
        </div>
      </section>
    );
  }
}
