

import React, { Component } from "react";

class Home extends React.Component {
  state = {
      newTodo: "",
      todos: [
        "Buy tea",
        "Buy boba",
        "Boil water",
        "Add boba",
        "Drain water",
        "Add tea"
      ]
    };

    handleChange = event => {
        this.setState({ newTodo: event.target.value });
      };
       handleSubmit = event => {
        event.preventDefault()
        this.setState({
          todos: [...this.state.todos, this.state.newTodo],
          newTodo: ""
        });
      };

      handleDelete = event => {
        var newTodoList = [...this.state.todos];
        var index = newTodoList.indexOf(event.target.value);
        newTodoList.splice(index, 1);
        this.setState({todos: newTodoList});
      };


        handleChangeName = event => {
            console.log("DELETE");
          };

    render() {
      return (
        <div>
          <h1> How to make boba at home</h1>
          {this.state.todos.map(todo => (
            <div>
             <li key={todo}>
               {todo + "  "}

             </li>
           </div>
          ))}


        </div>
      );
    }
  }

export default Home;
