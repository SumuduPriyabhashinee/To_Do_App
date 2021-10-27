import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './AddTask.css';
import CONSTANTS from '../../services/constants';

const AddTask = () => {

    const [taskState, taskSetstate] = useState({
        title: "",
        description: "",
    });

    const handleTitleChange = (e) => {
        taskSetstate({
            ...taskState,
            title: e.target.value
        });
    }

    const handleDescriptionChange = (e) => {
        taskSetstate({
            ...taskState,
            description: e.target.value
        });
    }

    const addTask = () => {

        const taskdetails = {
            title: taskState.title,
            description: taskState.description,
        }

        axios.post(CONSTANTS.API + '/todo', taskdetails)
            .then(res => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Task added to List',
                    text: res.data.msg,
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err => {
                Swal.fire({
                    position: 'middle',
                    icon: 'error',
                    title: "Error when adding Task",
                    text: err,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }
    const saveTask = (task) => {

        if (task.title === "") {
            taskSetstate({
                ...taskState,
                error: Swal.fire({
                    position: 'middle',
                    icon: 'warning',
                    title: 'You need to add a title',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        } else if (task.description === "") {
            taskSetstate({
                ...taskState,
                error: Swal.fire({
                    position: 'middle',
                    icon: 'warning',
                    title: 'You need to add your birthday',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        } else 
    addTask(task);
    setTimeout(() =>  window.location.href = `/todolist`, 2000)   
}


    return (
        <Form className="ContainerAddTask">
            <h2>Add a Task</h2><hr />
            <Form.Group >
                <Form.Label><h4>Title : </h4></Form.Label>
                <Form.Control type="text" onChange={handleTitleChange} />
            </Form.Group><br />
            <Form.Group>
                <Form.Label><h4>Description : </h4></Form.Label><br />
                <Form.Control as="textarea" rows={3} onChange={handleDescriptionChange} />
            </Form.Group><br />           
            <Button
                variant="secondary" onClick={saveTask}>Submit</Button>
        </Form>
    );
}

export default AddTask;
