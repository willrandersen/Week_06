import React, { Component } from "react";

class ListItem extends React.Component {
  render() {
    return (
      <li key={this.props.todo}>
        {this.props.todo + " "}
        <input type="text" onChange={this.props.handleChange(this.props.todo)} />
        <button value={this.props.todo} onClick={this.props.handleSubmit}>
          Update
        </button>
      </li>
    );
  }
}

export default ListItem;
