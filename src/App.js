import React, { Component } from "react";
class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ],
    edits: []
  };

  handleChange = todo => event => {
    let updatedEdits = this.state.edits;
    updatedEdits[this.state.todos.indexOf(todo)] = event.target.value;
    this.setState({
      edits: updatedEdits
    });

    console.log(this.state.edits);
  };

  handleSubmit = event => {
    event.preventDefault();
    const index = this.state.todos.indexOf(event.target.value);
    let newTodos = this.state.todos;
    newTodos[index] = this.state.edits[index];
    let updatedEdits = this.state.edits;
    updatedEdits[index] = "";
    this.setState({
      todos: newTodos,
      edits: updatedEdits
    });
  };

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <li key={todo}>
            {todo + " "}
            <input type="text" onChange={this.handleChange(todo)} />
            <button value={todo} onClick={this.handleSubmit}>
              Update
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
