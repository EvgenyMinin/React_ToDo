import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

class App extends Component {
    render() {
        const todoDataArray = [
            { id: 1, label: 'Drink Coffee', important: false },
            { id: 2, label: 'Build React App', important: true },
            { id: 3, label: 'Have a lunch', important: false },
        ]; 
        return (
            <div className="todo-app">
                <AppHeader todo={1} done={3} />
                <div className="todo-app__panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todoDataArray={todoDataArray} />
            </div>
                
            
        );
    }
}
 
export default App;