import React, { Component } from "react";
import Title from "./components/title";
import ListItem from "./components/listItem";
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
        <Title title="Hot to make boba" />
        {this.state.todos.map(todo => (
          <ListItem
            todo={todo}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ))}
      </div>
    );
  }
}

export default App;
