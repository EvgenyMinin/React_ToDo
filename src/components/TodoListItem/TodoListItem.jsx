import React from 'react';
import './TodoListItem.scss';

const TodoListItem = ({label, important=false}) => {

    const style = {
        color: important ? 'tomato' : 'black',
        fontWaight: important ? 'bold' : 'normal'
    }

    return (
        <div className="todo-listItem">
            <span
                className="todo-listItem__label"
                style={style}
            >
                {label}
            </span>
            <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
        </div>
    );
}
 
export default TodoListItem;