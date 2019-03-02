import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = ({ todoDataArray, onDeleted }) => {
    const elements = todoDataArray.map(item => {
        return (
            <li key={item.id} className="list-group-item todo-list-item">
                <TodoListItem
                    label={item.label}
                    important={item.important}
                    onDeleted = {() => onDeleted(item.id)}
                />
            </li>
        )
    }); 
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}
 
export default TodoList;