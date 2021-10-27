import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home/Home'
import ToDoList from '../todoList/ToDoList';
import AddTask from '../addTask/AddTask';

const ComponentRoutes = () => {
    return (
        <div className="FormStyles">
                <Route path="/" exact component={Home} />
                <Route path="/todolist" exact component={ToDoList} />
                <Route path="/addtask" exact component={AddTask} />
        </div>
    );
}

export default ComponentRoutes;