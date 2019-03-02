import React, { Component } from 'react';
import './TodoListItem.scss';

class TodoListItem extends Component {
    state = { 
        isDone: false
    }

    handleLabelClick = () => {
        this.setState(({isDone}) => {
            return {
                isDone: !isDone
            }
        });
    }

    handleImportant = () => {
        this.setState(state => {
            return {
                isImportant: !state.isImportant
            }
        });
    }

    render() {
        const { label, onDeleted } = this.props;
        const { isDone, isImportant } = this.state;
        let className = "todo-listItem"
        if (isDone) className += ' done';
        if (isImportant) className += ' important';
        return (
            <div className={className}>
                <span
                    className="todo-listItem__label"
                    onClick={this.handleLabelClick}
                >
                    {label}
                </span>
                <button
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
                <button
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.handleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>
            </div>
        );
    }
}
 
export default TodoListItem;