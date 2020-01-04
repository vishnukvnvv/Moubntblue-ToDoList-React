import React, { Component } from 'react'

class Item extends Component {
    getstyle = () => {
        if (this.props.todo.status) {
            return {
                textDecoration: 'line-through'
            }
        }
    }

    render() {
        const { position } = this.props;
        return (
            <div className='item-list' draggable position={position} onDragStart={this.props.dragStart.bind(this, position)} onDragOver={this.props.dragOver.bind(this, position)} onDragEnd={this.props.dragEnd}>
                <div style={this.getstyle()}>
                    <input type='checkbox' defaultChecked={this.props.todo.status} onChange={this.props.toggleStatus.bind(this, position)}/>{this.props.todo.text}
                </div>
                <button className='delete' onClick={this.props.deleteItem.bind(this, position)}>Delete</button>
            </div>
        );
    }
}

export default Item
