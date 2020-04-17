import React from 'react';
import './App.css';
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {

render = () => {

    let tasksElements = this.props.tasks.map(task => {
        return <ToDoListTask title={task.title} isDone={task.isDone} priority={task.priority}/>
    });
    return (
        <div className="todoList-tasks">
            {tasksElements}
        </div>
    );
}
}

export default ToDoListTasks;

