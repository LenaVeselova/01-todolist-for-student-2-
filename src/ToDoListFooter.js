import React from 'react';
import './App.css';

class ToDoListFooter extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-footer">
                        <button>All</button>
                        <button>Completed</button>
                        <button>Active</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoListFooter;

