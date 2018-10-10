import React, { Component } from "react";
import Title from "./title"
class ListItem extends React.Component {
  render() {
    return (
      <li key={this.props.todo}>
        <Title todo={this.props.todo + " "}></Title>
        <input type="text" onChange={this.props.handleChange(this.props.todo)} />
        <button value={this.props.todo} onClick={this.props.handleSubmit}>
          Update
        </button>
        <p> </p>
      </li>
    );
  }
}

export default ListItem;
