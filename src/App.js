import React, { Component } from 'react';
import './App.css';
import Todoheader from './components/toDoHeader';
import ToDoInput from './components/toDoInput';
import ToDoContainer from './components/toDoContainer';

class App extends Component {
  state = {
    itemsArray: JSON.parse(localStorage.getItem('items')),
    dragStartPosition: 0,
    dragEndPosition: 0,
  }

  updateLocalStorage() {
    console.log(this.state.itemsArray)
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
    });
    this.updateLocalStorage();
  }

  deleteItem = (position) => {
    console.log(position);
    this.state.itemsArray.splice(position, 1)
    this.setState({
      itemsArray: this.state.itemsArray,
    });
    this.updateLocalStorage();
  }

  addItem = (title) => {
    if (title) {
      this.state.itemsArray.push({ text: title, status: false });
      this.setState({
        itemsArray: this.state.itemsArray,
      });
      this.updateLocalStorage();
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
    console.log(item);
    this.state.itemsArray.splice(this.state.dragEndPosition, 0, item[0]);
    console.log(this.state.itemsArray)
    this.setState({
      itemsArray: this.state.itemsArray,
    });
    this.updateLocalStorage();
  }

  render() {
    return (
      <div className="App">
        <Todoheader />
        <ToDoInput addItem={this.addItem} />
        <div id="container">
          <ToDoContainer itemsArray={this.state.itemsArray} toggleStatus={this.toggleStatus} deleteItem={this.deleteItem} dragStart={this.dragStart} dragOver={this.dragOver} dragEnd={this.dragEnd} />
        </div>
      </div>
    );
  }
}

export default App;
