import React, { Component } from 'react';
import './toDoInput.css';

class ToDoInput extends Component {
    render() {
        return (<div id='input-text'>
            <input type='text' placeholder='Enter data here' value = {this.props.title} onChange = {this.props.addToTitle} onKeyPress = {this.props.onEnter}/>
            <button type='submit' onClick = {this.props.onSubmit}>Submit</button>
        </div>);
    }
}

export default ToDoInput;