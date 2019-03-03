import React from 'react';
import './TodoListItem.scss';

const TodoListItem = ({
    label,
    onDeleted,
    onToggleDone,
    onToggleImportant,
    isDone,
    isImportant }) => {
    let className = "todo-listItem"
    if (isDone) className += ' done';
    if (isImportant) className += ' important';
    return (
        <div className={className}>
            <span
                className="todo-listItem__label"
                onClick={onToggleDone}
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
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation" />
            </button>
        </div>
    );
}

export default TodoListItem;