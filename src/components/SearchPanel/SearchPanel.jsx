import React, { Component } from 'react';
import './SearchPanel.scss';

class SearchPanel extends Component {
    state = {
        searchItem: ''
    }

    onSearchChange = (event) => {
        const searchItem = event.target.value;
        this.setState({
            searchItem
        });
        this.props.onSearchChange(searchItem);
    }

    render() {
        const { searchItem } = this.state;
        return (
            <input
                type="text"
                placeholder='search'
                value={searchItem}
                className="form-control search-panel"
                onChange={this.onSearchChange}
            />
        );
    }
}

export default SearchPanel;