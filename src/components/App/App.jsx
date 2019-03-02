import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {

    state = {
        todoDataArray: [
            { id: 1, label: 'Drink Coffee', isImportant: false },
            { id: 2, label: 'Build React App', isImportant: true },
            { id: 3, label: 'Have a lunch', isImportant: false },
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

    render() {
        const {todoDataArray} = this.state;
        return (
            <div className="todo-app">
                <AppHeader todo={1} done={3} />
                <div className="todo-app__panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todoDataArray={todoDataArray}
                    onDeleted={this.handleDeleteItem}
                />
            </div>
                
            
        );
    }
}
 
export default App;