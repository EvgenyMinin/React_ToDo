import React, { Component } from 'react';
import './ItemAddForm.scss';

class AddNewItem extends Component {

    state = {
        label: ''
    }

    handleLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
                className="item-addForm d-flex my-3"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done"
                    onChange={this.handleLabelChange}
                    value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary"
                    disabled={this.state.label==='' ? 'disabled' : ''}
                >
                    Add
                </button>
            </form>
        );
    }
}
 
export default AddNewItem;