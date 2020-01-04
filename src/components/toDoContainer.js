import React, { Component } from 'react';
import './toDoContainer.css';
import Item from './item';
// import Item from './item'


class ToDoContainer extends Component {

    render() {
        return (this.props.itemsArray.map((element, index) => (
            <Item  position = {index} todo = {element} key = {index} toggleStatus = {this.props.toggleStatus} deleteItem = {this.props.deleteItem} dragStart = {this.props.dragStart} dragOver = {this.props.dragOver} dragEnd = {this.props.dragEnd}/>
        )));
    }
}

export default ToDoContainer;