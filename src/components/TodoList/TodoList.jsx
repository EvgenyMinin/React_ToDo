import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = ({
    todoDataArray,
    onDeleted,
    onToggleDone,
    onToggleImportant
    }) => {
    const elements = todoDataArray.map(item => {
        return (
            <li key={item.id} className="list-group-item todo-list-item">
                <TodoListItem
                    label={item.label}
                    isImportant={item.isImportant}
                    isDone={item.isDone}
                    onDeleted = {() => onDeleted(item.id)}
                    onToggleDone = {() => onToggleDone(item.id)}
                    onToggleImportant = {() => onToggleImportant(item.id)}
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