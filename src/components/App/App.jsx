import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddNewItem from '../AddNewItem/AddNewItem';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {

    maxId = 1;
    
    createTodoItem = (label) => {
        return {
            label,
            isImportant: false,
            isDone: false,
            id: this.maxId++
        }
    }

    toggleProperty = (arr, id, propName) => {
        const index = arr.findIndex(el => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    state = {
        todoDataArray: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch'),
        ]
    }

    handleDeleteItem = (id) => {
        this.setState(({todoDataArray}) => {
            const index = todoDataArray.findIndex(el => el.id === id);
            const newArray = [
                ...todoDataArray.slice(0, index),
                ...todoDataArray.slice(index + 1)
            ]
            return {
                todoDataArray: newArray
            };
        })
    }

    handleAddItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoDataArray}) => {
            const newArray = [
                ...todoDataArray,
                newItem
            ];
            return {
                todoDataArray: newArray
            }
        });
    }

    handleToggleImportant = (id) => {
        this.setState(({todoDataArray}) => {
            return {
                todoDataArray: this.toggleProperty(todoDataArray, id, 'isImportant')
            };
        });
    }

    handleToggleDone = (id) => {
        this.setState(({todoDataArray}) => {
            return {
                todoDataArray: this.toggleProperty(todoDataArray, id, 'isDone')
            };
        });
    }

    render() {
        const { todoDataArray } = this.state;
        const doneCount = todoDataArray.filter(el => el.isDone).length;
        const todoCount = todoDataArray.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount} />
                <div className="todo-app__panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todoDataArray={todoDataArray}
                    onDeleted={this.handleDeleteItem}
                    onToggleDone={this.handleToggleDone}
                    onToggleImportant={this.handleToggleImportant}
                />
                <AddNewItem onAddItem={this.handleAddItem}/>
            </div>
                
            
        );
    }
}
 
export default App;