import React, { Component } from 'react';
import './toDoInput.css';

class ToDoInput extends Component {
    state = {
        title: '',
    }

    addToTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    onSubmit = () => {
        this.props.addItem(this.state.title);
        this.setState({
            title: '',
        });
    }

    onEnter = (event) => {
        if(event.which === 13){
            this.onSubmit();
        }
    }

    render() {
        return (<div id='input-text'>
            <input type='text' placeholder='Enter data here' value={this.state.title} onKeyPress = {this.onEnter} onChange={this.addToTitle} />
            <button type='submit' onClick={this.onSubmit}>Submit</button>
        </div>);
    }
}

export default ToDoInput;