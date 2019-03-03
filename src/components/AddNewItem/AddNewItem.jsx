import React from 'react';
import './AddNewItem.scss';

const AddNewItem = ({onAddItem}) => {
    return (
        <div className="add-new-item">
            <button
                className="btn btn-outline-secondary my-3"
                onClick={() => onAddItem('Hello world')}
            >
                Add Item
            </button>
        </div>
    );
}
 
export default AddNewItem;