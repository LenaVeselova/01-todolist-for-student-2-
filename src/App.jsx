import React, {Component} from 'react';
import './App.css';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }
    state = {
        tasks: [
            {title: 'jQuery', isDone: false, priority: 'low'},
            {title: 'CSS', isDone: true, priority: 'high'},
            {title: 'JS', isDone: true, priority: 'high'},
            {title: 'ReactJS', isDone: true, priority: 'high'},
            {title: 'Patterns', isDone: false, priority: 'medium'}
        ],
        filterValue: 'Completed'
    };
//добавление той task, которую я введа в input 2:00
    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value; //ссылка на input и на value
        this.newTaskTitleRef.current.value = ''; //обнуление input
        let newTask = {
            title: newTitle, isDone: false, priority: 'low'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: newTasks });
        // то же самое
        //this.setState({ tasks: [...this.state.tasks, newTask] }); // lesson-03 0:57, 0:58
};

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input
                                type="text"
                                placeholder="New task name"
                                ref={this.newTaskTitleRef} //ссылка на input
                        />
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    {/*<ToDoListHeader/>*/}
                    <ToDoListTasks tasks={this.state.tasks}/>
                    <ToDoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

