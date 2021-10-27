import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import "./ToDoList.css"
import { ToDoAppService } from '../../services/todoapp.service';
import axios from 'axios';
import {parse, stringify} from 'flatted/esm';
import Swal from 'sweetalert2';
import CONSTANTS from '../../services/constants';

const UserList = () => {

    const [ToDoListstate, setToDoListState] = useState();

    const [isViewMore, setIsViewMore] = useState(null);

    const [isEdit, setIsEdit] = useState(0);

    const [taskState, taskSetstate] = useState({
        title: null,
        description: null
    })


    useEffect(() => {
        ToDoAppService.getAlltasks();
        ToDoAppService
            .getToDoList()
            .subscribe(tasks => {
                console.log(tasks);
                setToDoListState(tasks);
            });
    }, [])



    const deleteTask = (task) => {
        let data = ToDoListstate.filter(i => i.id !== task.id)
        setToDoListState(data)
        if (task.id !== null) {
            Swal.fire({
                title: 'Do you want to remove this task permanently?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, remove permenently!',
                cancelButtonText: 'No,Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(CONSTANTS.API + `/todo/${task.id}`)
                        .then((res) => {
                            console.log(res.data);
                        })
                        .catch(errtag => {
                            Swal.fire({
                                position: 'middle',
                                icon: 'error',
                                title: "Error when removing task",
                                text: errtag,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                    console.log(task.id)
                    console.log(data)
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Task removed successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //   window.location.reload();
                }
                else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cancelled',
                        html: 'You have canceled the deletion.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    };

    const ViewMore = (t) => {
        setIsViewMore(t.id)
    }

    const ViewLess = () => {
        setIsViewMore(null)
        setIsEdit(null)
        taskSetstate({
            title: null,
            description: null
        });
    }

    const editTask = (t) => {
        setIsEdit(t.id)
    }

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
    const updateTask = (task) => {
        const taskdetails = {
            title: taskState.title?taskState.title:task.title,
            description: taskState.description?taskState.description:task.description
        }

        axios.put(CONSTANTS.API + `/todo/${task.id}`, taskdetails)
        .then(resp => {
            console.log(resp);
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Your changes has been saved',
                text: resp.data.msg,
                showConfirmButton: false,
                timer: 2000
            });
        })
        .catch(err => {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: "Error when updating the task",
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
        updateTask(task);
        setTimeout(() => window.location.reload(), 2000)
        
    }


    let renderingToDoList;
    if (ToDoListstate) {
        renderingToDoList = ToDoListstate.map((task) => {
            return (
                <div className="Container" key={task.id}>
                    <h2>{taskState.title !== null && isEdit == task.id? taskState.title:task.title}</h2>
                    {isEdit == task.id ?
                        <Form.Control type="text" defaultValue={taskState.title !== null ? taskState.title : JSON.stringify(task.title).replace(/"/g, "")} onChange={handleTitleChange} />
                        : ""}
                    <hr /><br />
                    {isViewMore == task.id ? <div><p>
                        {isEdit == task.id ?
                            <Form.Control as="textarea" rows={3} defaultValue={taskState.description !== null ? taskState.description : JSON.stringify(task.description).replace(/"/g, "")} onChange={handleDescriptionChange} />
                            : task.description}
                    </p></div> : ''}
                    {isViewMore == task.id ? <div>

                        <Button variant="secondary" onClick={() => ViewLess()}> {isEdit == task.id ? "Cancel" : "View Less"}</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        {isEdit == task.id ?
                            <Button variant="secondary" onClick={() => saveTask(task)}>Save</Button> : ""}

                        {isEdit == task.id ? "" :
                            <Button variant="secondary" onClick={() => editTask(task)}>Edit</Button>}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        {isEdit == task.id ? "" :
                            <Button variant="secondary" onClick={() => deleteTask(task)}>Delete</Button>}

                    </div> :
                        <Button variant="secondary" onClick={() => ViewMore(task)}>View More</Button>}

                </div>
            );
        });
    }


    return (
        <Container>
            {renderingToDoList}
        </Container>
    );
}

export default UserList;