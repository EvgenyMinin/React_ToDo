import React, { Component } from 'react';

class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];

    state = {  }
    render() {
        const { onFilter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = onFilter === name;
            const className = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    className={`btn ${className}`}
                    onClick={() => onFilterChange(name)}
                >
                    { label }
                </button>
            );
        });
        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
}
 
export default ItemStatusFilter;