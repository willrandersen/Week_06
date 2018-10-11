import React, { Component } from "react";

class About extends React.Component {

  state = {
      newTodo: ""
    };

  handleSubmit = event => {
      event.preventDefault()
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ""
      });
    };

    handleChange = event => {
      this.setState({ newTodo: event.target.value });
    };

  render() {
    return (
      <div>
        <h2>About</h2>

        <input
              type="text"
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit()}>EDIT</button>

      </div>
    );
  }
}

export default About;
