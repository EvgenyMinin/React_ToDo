import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
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
            this.createTodoItem('Build React App'),
            this.createTodoItem('Change profession'),
            this.createTodoItem('Become a senior developer'),
        ],
        searchItem: '',
        filter: 'all'
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

    search = (items, searchItem) => {
        if (searchItem.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(searchItem.toLowerCase()) > -1;
        });
    }

    handleSearchChange = (searchItem) => {
        this.setState({ searchItem });
    }

    onFilter = (items, filter) => {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.isDone);
            case 'done':
                return items.filter(item => item.isDone);
            default:
                return items;
        }
    }

    handleFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {
        const { todoDataArray, searchItem, filter } = this.state;
        const visibleItems = this.onFilter(
            this.search(todoDataArray, searchItem), filter);
        const doneCount = todoDataArray.filter(el => el.isDone).length;
        const todoCount = todoDataArray.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount} />
                <div className="todo-app__panel d-flex">
                    <SearchPanel onSearchChange={this.handleSearchChange} />
                    <ItemStatusFilter
                        onFilter={filter}
                        onFilterChange={this.handleFilterChange}
                    />
                </div>
                <TodoList
                    todoDataArray={visibleItems}
                    onDeleted={this.handleDeleteItem}
                    onToggleDone={this.handleToggleDone}
                    onToggleImportant={this.handleToggleImportant}
                />
                <ItemAddForm onAddItem={this.handleAddItem}/>
            </div>
                
            
        );
    }
}
 
export default App;