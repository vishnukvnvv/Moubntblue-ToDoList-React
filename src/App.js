import React, { Component } from 'react';
import './App.css';
import ToDoInput from './components/toDoInput';
import ToDoContainer from './components/toDoContainer';

class App extends Component {
  state = {
    itemsArray: JSON.parse(localStorage.getItem('items')),
    dragStartPosition: 0,
    dragEndPosition: 0,
    title: '',
  }

  addToTitle = (event) => {
    this.setState({
      title: event.target.value,
    })
  }

  onEnter = (event) => {
    if (event.which === 13) {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    this.addItem();
    this.setState({
      title: '',
    });
  }

  updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.state.itemsArray))
  }

  toggleStatus = (position) => {
    this.setState({
      itemsArray: this.state.itemsArray.map((todo, index) => {
        if (index === position) {
          todo.status = !todo.status;
        }
        return todo;
      })
    }, this.updateLocalStorage());

  }

  deleteItem = (position) => {
    this.state.itemsArray.splice(position, 1)
    this.setState({
      itemsArray: this.state.itemsArray,
    }, this.updateLocalStorage());
  }

  addItem = () => {
    const title = this.state.title;
    if (title) {
      this.state.itemsArray.push({ text: title, status: false });
      this.setState({
        itemsArray: this.state.itemsArray,
      }, this.updateLocalStorage());
    }
  }


  dragStart = (position) => {
    this.setState({ dragStartPosition: position });
  }

  dragOver = (position) => {
    this.setState({ dragEndPosition: position });
  }

  dragEnd = () => {
    const item = this.state.itemsArray.splice(this.state.dragStartPosition, 1);
    this.state.itemsArray.splice(this.state.dragEndPosition, 0, item[0]);
    this.setState({
      itemsArray: this.state.itemsArray,
    }, this.updateLocalStorage());
  }

  render() {
    return (
      <div className="App">
        <header><b>To Do List</b></header>
        <ToDoInput addToTitle = {this.addToTitle} title = {this.state.title} onEnter = {this.onEnter} onSubmit = {this.onSubmit}/>
        <div id="container">
          <ToDoContainer itemsArray={this.state.itemsArray} toggleStatus={this.toggleStatus} deleteItem={this.deleteItem} dragStart={this.dragStart} dragOver={this.dragOver} dragEnd={this.dragEnd} />
        </div>
      </div>
    );
  }
}

export default App;
