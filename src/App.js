import React, { Component } from 'react';
import ListOfTodos from './Todos'
import AddTodo from './AddTodo'
import { withAlert } from "react-alert";
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [ ],

    }
  }

  deleteItem = (todoId) => {
    const todos = this.state.todos.filter(todo => todo.id !== todoId)
    this.setState({
      todos: todos
    })
  }

  addTodoItem = (todo) => {
      const hasContent = this.state.todos.filter(c => c.content === todo.content)
      if(hasContent.length !== 0 || todo.content === '')
      {
        const alert = this.props.alert;
        alert.error(todo.content === '' ? 'Task cannot be empty' : 'The list cannot contain the same task!');
        return;
      }
      todo.id = Math.random();
      const newTodoArrey = [...this.state.todos, todo];
      this.setState({
        todos: newTodoArrey
      })
  }

  saveToLocalstorage = () => {
    const alert = this.props.alert; 
    if(this.state.todos.length === 0) {
      alert.error('Cannot saved an empty list');
      return;
    }
    localStorage.setItem("savedList", JSON.stringify(this.state.todos))
    this.forceUpdate()
    alert.success('List saved successfully!');
  }

  handleLoadList = () => {
    const listStored = JSON.parse(localStorage.getItem("savedList"))
    this.setState({
      todos: listStored
    })
  }

  render() {
    let listSavedButton;
      if(localStorage.length !== 0) {
        listSavedButton = (
          <p className="list"><i className="fa fa-clipboard" onClick={ this.handleLoadList }></i>Load saved list</p>
        )
      }
    
    return (
      <div className="App container">
        <h1 className="center blue-text">Make a todo's list!</h1>
        {listSavedButton}
        <ListOfTodos deleteItem={ this.deleteItem } todos={ this.state.todos }/>
        <AddTodo addTodoItem={ this.addTodoItem } saveToLocalstorage={ this.saveToLocalstorage }/>
      </div>
    );
  }

}

export default withAlert()(App);
