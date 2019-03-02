import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({todoDataArray}) => {

    const elements = todoDataArray.map(item => {
        return (
            <li key={item.id} className="list-group-item todo-list-item">
                <TodoListItem
                    label={item.label}
                    important={item.important}
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